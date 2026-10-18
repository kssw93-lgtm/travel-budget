"""팁 추가 도우미: JSON(도시id → [[ko, en, ja, 근거URL], ...])을 받아
city-guides*.ts 의 그 도시 팁 끝에 붙이고, 근거를 city-guide-sources.ts 에 '도시id:tN' 으로 넣는다.
사용: python3 scripts/add-tips.py <json 파일>"""
import json, re, sys, glob, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.load(open(sys.argv[1], encoding='utf-8'))
esc = lambda x: x.replace('\\', '\\\\').replace("'", "\\'")
src_path = f'{root}/src/data/city-guide-sources.ts'
src = open(src_path, encoding='utf-8').read().rstrip()
assert src.endswith('};')
# NOTES_EXTRA(city-guides-4.ts 끝)에 팁이 더 있는 도시는 번호가 어긋나므로 손으로 넣는다.
extra = open(f'{root}/src/data/city-guides-4.ts', encoding='utf-8').read().split('export const NOTES_EXTRA')[-1]
blocked = [c for c in data if re.search(r"\n  '?" + re.escape(c) + r"'?: \{", extra)]
if blocked:
    sys.exit(f'NOTES_EXTRA에도 있는 도시라 자동으로 넣지 않습니다: {blocked}')
added = []
for city, items in data.items():
    done = False
    for p in sorted(glob.glob(f'{root}/src/data/city-guides*.ts')):
        s = open(p, encoding='utf-8').read()
        m = re.search(r"\n  '?" + re.escape(city) + r"'?: \{\n", s)
        if not m:
            continue
        start = m.end()
        nxt = re.compile(r"\n  '?[a-z0-9-]+'?: \{\n").search(s, start)
        end = nxt.start() if nxt else len(s)
        block = s[start:end]
        if '    tips: [' in block:  # BASE 형식
            ts = block.index('    tips: [')
            j = block.index('\n    ],', ts) + 1
            n = block[ts:j].count('\n      {\n')
            ins = ''.join("      {\n        ko: '%s',\n        en: '%s',\n        ja: '%s',\n      },\n" % tuple(esc(v) for v in it[:3]) for it in items)
        else:  # 압축 형식
            ts = block.index('    t: [')
            j = block.index('\n    ],', ts) + 1
            n = block[ts:j].count('\n      [')
            ins = ''.join("      [%s],\n" % ', '.join("'%s'" % esc(v) for v in it[:3]) for it in items)
        block = block[:j] + ins + block[j:]
        s = s[:start] + block + s[end:]
        open(p, 'w', encoding='utf-8').write(s)
        for k, it in enumerate(items):
            key = f'{city}:t{n + k + 1}'
            src = src[:-2] + f"  '{key}': '{it[3]}',\n" + '};'
            added.append(key)
        done = True
        break
    assert done, city
open(src_path, 'w', encoding='utf-8').write(src + '\n')
print('added', len(added), added)
