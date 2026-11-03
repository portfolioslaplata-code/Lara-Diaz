"""Generate WebP derivatives with Pillow, preserving the supplied JPEG originals."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'public/images'
OUTPUT = SOURCE / 'optimized'
OUTPUT.mkdir(exist_ok=True)
casa = next(SOURCE.glob('Casa Diana*'))
lago = next(SOURCE.glob('Vivienda unifamiliar 2*'))
images = {
    'lara': SOURCE / 'Fotolarasobremi.jpeg',
    'alpina': next(SOURCE.glob('Anteproyecto vivienda alpina*')),
    'epuyen': next(SOURCE.glob('Anteproyecto vivienda unifamiliar*')),
    'diana-exterior': casa / 'WhatsApp Image 2026-11-01 at 4.26.18 PM.jpeg',
    'diana-estar': casa / 'WhatsApp Image 2026-11-01 at 4.26.17 PM.jpeg',
    'diana-estudio': casa / 'WhatsApp Image 2026-11-01 at 4.26.17 PM (2).jpeg',
    'diana-dormitorio': casa / 'WhatsApp Image 2026-11-01 at 4.26.17 PM (1).jpeg',
    'diana-detalle': casa / 'WhatsApp Image 2026-11-01 at 4.29.25 PM.jpeg',
    'lago-exterior': lago / 'WhatsApp Image 2026-11-01 at 4.41.11 PM.jpeg',
    'lago-estar': lago / 'WhatsApp Image 2026-11-01 at 4.41.10 PM (1).jpeg',
    'lago-dormitorio': lago / 'WhatsApp Image 2026-11-01 at 4.41.10 PM.jpeg',
}
covers = {'alpina', 'epuyen', 'diana-exterior', 'lago-exterior'}
for name, source in images.items():
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        image.save(OUTPUT / f'{name}.webp', quality=85, method=6)
        if name in covers:
            image.thumbnail((800, 800), Image.Resampling.LANCZOS)
            image.save(OUTPUT / f'{name}-cover.webp', quality=82, method=6)
print(f'Originals: {sum(p.stat().st_size for p in images.values()):,} bytes')
print(f'WebP (including 4 covers): {sum(p.stat().st_size for p in OUTPUT.glob("*.webp")):,} bytes')
