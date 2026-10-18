"""볼거리 추가 도우미: JSON(도시id → [[이름ko,en,ja, 설명ko,en,ja, 근거URL], ...])을 받아
city-guides*.ts 의 그 도시 볼거리 끝에 붙이고, 근거를 city-guide-sources.ts 에 '도시id:hN' 으로 넣는다.
사용: python3 scripts/add-highlights.py <json 파일>"""
import json, re, sys, glob, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.load(open(sys.argv[1], encoding='utf-8'))
esc = lambda x: x.replace('\\', '\\\\').replace("'", "\\'")
src_path = f'{root}/src/data/city-guide-sources.ts'
src = open(src_path, encoding='utf-8').read().rstrip()
assert src.endswith('};')
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
        if 'highlights: [' in block:  # BASE 형식
            n = block.count('        name: {')
            j = block.index('    ],\n    tips: [')
            ins = ''.join("      {\n        name: { ko: '%s', en: '%s', ja: '%s' },\n        text: {\n          ko: '%s',\n          en: '%s',\n          ja: '%s',\n        },\n      },\n" % tuple(esc(v) for v in it[:6]) for it in items)
        else:  # 압축 형식
            hs = block.index('    h: [')
            j = block.index('    ],\n', hs)
            n = block[hs:j].count("\n      ['")
            ins = ''.join("      [%s],\n" % ', '.join("'%s'" % esc(v) for v in it[:6]) for it in items)
        block = block[:j] + ins + block[j:]
        s = s[:start] + block + s[end:]
        open(p, 'w', encoding='utf-8').write(s)
        for k, it in enumerate(items):
            key = f'{city}:h{n + k + 1}'
            src = src[:-2] + f"  '{key}': '{it[6]}',\n" + '};'
            added.append(key)
        done = True
        break
    assert done, city
open(src_path, 'w', encoding='utf-8').write(src + '\n')
print('added', len(added), added)
