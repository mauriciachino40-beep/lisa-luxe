// ================================================================
// Heritage Luxury Finds — product catalog
// SKUs, categories, prices & variants sourced from the wholesale
// order page (jewelry-order). Product photos live in /images/.
// ================================================================

const STONES = ['Red', 'Black', 'White MOP', 'Grey MOP', 'Pink MOP', 'Malachite', 'Laser Cut', 'Tiger Eye', 'Darker Blue', 'Turquoise', 'All Diamonds'];
const STONES_FULL = ['Red', 'Black', 'White MOP', 'Grey MOP', 'Pink MOP', 'Malachite', 'Laser Cut', 'Tiger Eye', 'Darker Blue', 'Turquoise', 'All Diamonds', 'mini mop butterfly', 'mini turquoise butterfly', 'mini heart', 'ladybug'];
const COLORS3 = ['Yellow Gold', 'White Gold', 'Rose Gold'];
const COLORS4 = ['Yellow Gold', 'White Gold', 'Rose Gold', 'Light YG'];
const SIZES = ['16cm', '17cm', '18cm', '19cm'];

window.PRODUCTS = [
  // ── Clover Collection ──
  { id: 'cb1', name: 'Classic Clover Bracelet (5/6 Motifs)', price: 28.50, image: 'images/cb1.jpg', collection: 'clover', category: 'Bracelet',
    variants: [
      { name: 'Clover Size', options: ['Mini (6 Motifs)', 'Medium (5 Motifs)'] },
      { name: 'Stone', options: STONES },
      { name: 'Color', options: COLORS3 }
    ] },
  { id: 'cb3', name: 'Stone with Sparkles Bracelet (5 Motifs)', price: 28.50, image: 'images/cb3.jpg', collection: 'clover', category: 'Bracelet',
    variants: [
      { name: 'Stone', options: ['Red', 'Black', 'White MOP', 'Grey MOP', 'Pink MOP', 'Malachite', 'Laser Cut', 'Tiger Eye', 'Darker Blue', 'Turquoise'] },
      { name: 'Color', options: COLORS3 }
    ] },
  { id: 'cb4', name: '5 Charms Bracelet', price: 41.80, image: 'images/cb4.jpg', collection: 'clover', category: 'Bracelet',
    variants: [
      { name: 'Style', options: ['Ladybug with 5 Charms (Rose Gold)', 'Butterfly with 5 Charms (Yellow Gold)'] }
    ] },
  { id: 'cb5', name: 'One Motif Bracelet', price: 28.50, image: 'images/cb5.jpg', collection: 'clover', category: 'Bracelet',
    variants: [
      { name: 'Clover Size', options: ['Mini', 'Medium'] },
      { name: 'Stone', options: STONES_FULL },
      { name: 'Color', options: COLORS3 }
    ] },
  { id: 'cn1', name: 'One Motif Clover Necklace', price: 28.50, image: 'images/cn1.jpg', collection: 'clover', category: 'Necklace',
    variants: [
      { name: 'Clover Size', options: ['Mini', 'Medium', 'Magic pendant'] },
      { name: 'Stone', options: STONES_FULL },
      { name: 'Color', options: COLORS3 }
    ] },
  { id: 'cn2', name: '10 Motifs Clover Necklace', price: 41.80, image: 'images/cn2.jpg', collection: 'clover', category: 'Necklace',
    variants: [
      { name: 'Stone', options: STONES },
      { name: 'Color', options: COLORS3 }
    ] },

  // ── Carti Collection ──
  { id: 'nb1', name: 'Nail Bangle (Without Sparkle)', price: 41.80, image: 'images/nb1.jpg', collection: 'carti', category: 'Nail Bangle',
    variants: [
      { name: 'Color', options: COLORS4 },
      { name: 'Width', options: ['Slim', 'Thick'] },
      { name: 'Size', options: SIZES }
    ] },
  { id: 'nb2', name: 'Nail Bangle (With Sparkles)', price: 41.80, image: 'images/nb2.jpg', collection: 'carti', category: 'Nail Bangle',
    variants: [
      { name: 'Color', options: COLORS4 },
      { name: 'Width', options: ['Slim', 'Thick'] },
      { name: 'Size', options: SIZES }
    ] },
  { id: 'cr1', name: 'Carti Unlimited Bracelet', price: 53.50, image: 'images/cr1.jpg', collection: 'carti', category: 'Unlimited',
    variants: [
      { name: 'Color', options: COLORS3 },
      { name: 'Size', options: SIZES }
    ] },
  { id: 'lb1', name: 'Love Bangle (Without Sparkle)', price: 28.50, image: 'images/lb1.jpg', collection: 'carti', category: 'Love Bangle',
    variants: [
      { name: 'Color', options: COLORS3 },
      { name: 'Width', options: ['Slim', 'Thick'] },
      { name: 'Size', options: SIZES }
    ] },
  { id: 'lb2', name: 'Love Bangle (With Sparkles)', price: 28.50, image: 'images/lb2.jpg', collection: 'carti', category: 'Love Bangle',
    variants: [
      { name: 'Width', options: ['Slim', 'Thick'] },
      { name: 'Sparkles', options: ['4 Diamonds', '6 Diamonds', '10 Diamonds'] },
      { name: 'Color', options: COLORS3 },
      { name: 'Size', options: SIZES }
    ] },

  // ── CC Collection ──
  { id: 'ce1', name: 'One Motif Earring', price: 28.50, image: 'images/ce1.jpg', collection: 'cc', category: 'Earring',
    variants: [
      { name: 'Stone', options: STONES },
      { name: 'Color', options: COLORS3 },
      { name: 'Type', options: ['Clip', 'Stud'] }
    ] }
];
