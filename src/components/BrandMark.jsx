const symbols = {
  burgundy: '/brand/lara-diaz-symbol-burgundy.png',
  white: '/brand/lara-diaz-symbol-white.png',
};

// Decorative: always paired with the visible name in Navbar and Footer.
export default function BrandMark({ variant = 'burgundy' }) {
  return <img className="brand-mark" src={symbols[variant]} width="160" height="160" alt="" aria-hidden="true" />;
}
