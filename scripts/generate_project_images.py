from pathlib import Path
from PIL import Image, ImageDraw

out_dir = Path(__file__).resolve().parent.parent / 'src' / 'assets' / 'projects'
out_dir.mkdir(parents=True, exist_ok=True)


def make_scene(filename: str, bg, draw_fn):
    w, h = 160, 90
    img = Image.new('RGBA', (w, h), bg)
    draw = ImageDraw.Draw(img)
    draw_fn(draw)
    img = img.resize((w * 4, h * 4), resample=Image.Resampling.NEAREST)
    img.save(out_dir / filename)


make_scene(
    'urban-guardian.png',
    (10, 13, 28),
    lambda d: (
        d.rectangle((0, 0, 160, 90), fill=(10, 13, 28)),
        d.rectangle((0, 0, 160, 58), fill=(17, 25, 46)),
        d.ellipse((118, 7, 144, 33), fill=(255, 224, 122)),
        [d.rectangle((x, y, x + 1, y + 1), fill=(255, 255, 255)) for x, y in [(20, 10), (34, 18), (52, 12), (72, 20), (92, 15), (108, 10), (130, 18)]],
        [d.rectangle((x, 0, x + 12, 56), fill=(26, 37, 66)) for x in [0, 16, 36, 54, 76, 98, 118, 138]],
        [d.rectangle((x + 4, y, x + 8, y + 8), fill=(255, 196, 94)) for x, y in [(4, 48), (22, 42), (42, 50), (60, 44), (84, 52), (104, 46), (124, 52), (142, 46)]],
        d.line((10, 80, 46, 70, 78, 58, 116, 60, 150, 48), fill=(255, 143, 123), width=2),
        [d.rectangle((x, y, x + 2, y + 2), fill=(255, 143, 123)) for x, y in [(30, 68), (70, 58), (112, 58)]],
        d.rectangle((64, 60, 108, 76), fill=(255, 101, 123)),
        d.rectangle((70, 52, 100, 60), fill=(255, 190, 165)),
        d.rectangle((62, 76, 72, 82), fill=(20, 20, 32)),
        d.rectangle((98, 76, 108, 82), fill=(20, 20, 32)),
        d.rectangle((56, 62, 62, 70), fill=(143, 231, 255)),
        d.rectangle((108, 62, 114, 70), fill=(143, 231, 255)),
        d.rectangle((0, 80, 160, 90), fill=(59, 74, 117)),
        [d.rectangle((x, 82, x + 8, 84), fill=(143, 231, 255)) for x in range(0, 160, 12)],
        [d.rectangle((x, y, x + 1, y + 1), fill=(189, 167, 255)) for x, y in [(120, 24), (126, 30), (133, 25), (140, 31)]],
    ),
)

make_scene(
    'healthsync.png',
    (12, 22, 33),
    lambda d: (
        d.rectangle((0, 0, 160, 90), fill=(12, 22, 33)),
        d.rectangle((12, 12, 148, 40), fill=(24, 38, 60)),
        d.rectangle((18, 18, 103, 34), fill=(31, 51, 82)),
        d.rectangle((104, 18, 140, 34), fill=(168, 240, 198)),
        d.ellipse((36, 46, 52, 62), fill=(248, 248, 255)),
        d.rectangle((39, 62, 49, 76), fill=(248, 248, 255)),
        d.line((40, 62, 30, 72), fill=(248, 248, 255), width=2),
        d.line((48, 62, 58, 72), fill=(248, 248, 255), width=2),
        d.line((40, 76, 32, 82), fill=(248, 248, 255), width=2),
        d.line((48, 76, 56, 82), fill=(248, 248, 255), width=2),
        d.rectangle((90, 46, 132, 72), fill=(20, 35, 60)),
        d.rectangle((94, 50, 128, 68), fill=(143, 231, 255)),
        d.rectangle((96, 52, 126, 58), fill=(255, 164, 200)),
        d.rectangle((98, 60, 122, 64), fill=(255, 210, 112)),
        d.rectangle((98, 66, 122, 68), fill=(168, 240, 198)),
        d.line((18, 50, 30, 50, 38, 42, 46, 50, 54, 50), fill=(255, 164, 200), width=2),
        d.rectangle((122, 18, 126, 30), fill=(20, 20, 32)),
        d.rectangle((132, 18, 136, 30), fill=(20, 20, 32)),
        d.rectangle((128, 36, 146, 42), fill=(255, 210, 112)),
        d.rectangle((128, 48, 146, 54), fill=(185, 167, 255)),
        d.rectangle((124, 58, 142, 72), fill=(15, 26, 34)),
        d.rectangle((126, 60, 140, 64), fill=(168, 240, 198)),
        d.rectangle((0, 76, 160, 90), fill=(16, 44, 42)),
        [d.rectangle((x, 82, x + 6, 84), fill=(143, 231, 255)) for x in range(0, 160, 12)],
    ),
)

make_scene(
    'pneumonia.png',
    (15, 13, 31),
    lambda d: (
        d.rectangle((0, 0, 160, 90), fill=(15, 13, 31)),
        d.rectangle((12, 12, 148, 78), fill=(22, 30, 52)),
        d.rectangle((18, 18, 142, 72), fill=(31, 44, 74)),
        d.rectangle((28, 26, 120, 52), fill=(245, 245, 255)),
        d.rectangle((38, 32, 110, 66), fill=(143, 231, 255)),
        d.rectangle((54, 38, 94, 60), fill=(8, 18, 26)),
        d.ellipse((60, 42, 82, 56), fill=(255, 164, 200)),
        d.ellipse((84, 42, 106, 56), fill=(255, 164, 200)),
        d.line((72, 44, 72, 62), fill=(255, 255, 255), width=2),
        d.line((88, 44, 88, 62), fill=(255, 255, 255), width=2),
        [d.ellipse((x, y, x + 3, y + 3), fill=(255, 210, 112)) for x, y in [(30, 20), (38, 24), (46, 18), (122, 20), (130, 24), (138, 18)]],
        [d.line((x1, y1, x2, y2), fill=(185, 167, 255), width=1) for x1, y1, x2, y2 in [(30, 20, 38, 24), (38, 24, 46, 18), (122, 20, 130, 24), (130, 24, 138, 18), (30, 28, 48, 32), (110, 28, 132, 32)]],
        d.rectangle((116, 60, 138, 78), fill=(15, 26, 34)),
        d.rectangle((119, 64, 135, 70), fill=(143, 231, 255)),
        d.rectangle((119, 70, 135, 74), fill=(255, 210, 112)),
        d.rectangle((98, 70, 112, 76), fill=(255, 164, 200)),
        d.line((18, 80, 48, 80, 56, 76, 70, 80, 90, 76, 110, 80, 142, 80), fill=(143, 231, 255), width=2),
    ),
)

make_scene(
    'prescription.png',
    (18, 26, 27),
    lambda d: (
        d.rectangle((0, 0, 160, 90), fill=(18, 26, 27)),
        d.rectangle((28, 16, 118, 68), fill=(24, 38, 58)),
        d.rectangle((32, 20, 114, 64), fill=(143, 231, 255)),
        d.rectangle((36, 24, 110, 32), fill=(255, 164, 200)),
        d.rectangle((42, 38, 100, 44), fill=(248, 248, 255)),
        d.rectangle((42, 46, 100, 52), fill=(255, 210, 112)),
        d.rectangle((42, 54, 100, 58), fill=(168, 240, 198)),
        [d.rectangle((x, 68, x + 8, 84), fill=(185, 167, 255)) for x in [128, 138]],
        [d.rectangle((x + 2, 64, x + 6, 68), fill=(255, 210, 112)) for x in [128, 138]],
        d.rectangle((118, 18, 122, 52), fill=(248, 248, 255)),
        d.rectangle((112, 12, 128, 18), fill=(255, 210, 112)),
        d.rectangle((102, 52, 132, 54), fill=(168, 240, 198)),
        d.rectangle((20, 60, 50, 72), fill=(12, 20, 24)),
        d.rectangle((22, 62, 48, 70), fill=(143, 231, 255)),
        d.ellipse((54, 38, 64, 46), fill=(248, 248, 255)),
        d.rectangle((57, 46, 61, 62), fill=(248, 248, 255)),
        d.line((57, 50, 50, 58), fill=(248, 248, 255), width=2),
        d.line((61, 50, 68, 58), fill=(248, 248, 255), width=2),
        d.line((57, 62, 52, 78), fill=(248, 248, 255), width=2),
        d.line((61, 62, 67, 78), fill=(248, 248, 255), width=2),
        d.rectangle((0, 78, 160, 90), fill=(16, 36, 37)),
    ),
)

make_scene(
    'medicare.png',
    (11, 19, 35),
    lambda d: (
        d.rectangle((0, 0, 160, 90), fill=(11, 19, 35)),
        d.rectangle((18, 12, 142, 72), fill=(27, 42, 64)),
        d.rectangle((22, 16, 138, 68), fill=(24, 38, 60)),
        d.rectangle((26, 20, 134, 64), fill=(143, 231, 255)),
        d.rectangle((26, 20, 134, 28), fill=(31, 51, 82)),
        [d.rectangle((x, 22, x + 4, 24), fill=(255, 164, 200)) for x in [28, 34, 40, 46]],
        d.rectangle((34, 34, 62, 52), fill=(255, 210, 112)),
        d.rectangle((70, 34, 96, 52), fill=(168, 240, 198)),
        d.rectangle((100, 34, 126, 52), fill=(185, 167, 255)),
        d.rectangle((34, 56, 126, 60), fill=(248, 248, 255)),
        d.ellipse((40, 40, 48, 48), fill=(248, 248, 255)),
        d.rectangle((43, 48, 45, 62), fill=(248, 248, 255)),
        d.line((43, 52, 36, 58), fill=(248, 248, 255), width=2),
        d.line((45, 52, 52, 58), fill=(248, 248, 255), width=2),
        d.rectangle((104, 38, 118, 56), fill=(255, 164, 200)),
        d.rectangle((108, 44, 114, 50), fill=(248, 248, 255)),
        d.rectangle((100, 56, 122, 62), fill=(168, 240, 198)),
        d.rectangle((48, 72, 92, 84), fill=(12, 20, 24)),
        d.rectangle((50, 74, 90, 82), fill=(143, 231, 255)),
        d.rectangle((58, 84, 82, 90), fill=(255, 210, 112)),
        d.rectangle((116, 64, 120, 72), fill=(255, 164, 200)),
        d.rectangle((112, 68, 124, 70), fill=(255, 164, 200)),
        d.rectangle((122, 62, 128, 74), fill=(168, 240, 198)),
        d.rectangle((130, 64, 136, 72), fill=(185, 167, 255)),
        d.rectangle((0, 78, 160, 90), fill=(14, 29, 24)),
    ),
)

print('Generated files:')
for item in sorted(out_dir.glob('*.png')):
    print(item.name)
