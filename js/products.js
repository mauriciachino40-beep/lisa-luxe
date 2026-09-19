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
  { id: 'cb1', name: 'Classic Clover Bracelet (5/6 Motifs)', price: 28.50, image: 'images/sq/cb1.jpg', collection: 'clover', category: 'Bracelet',
    desc: 'The signature clover motif in five or six links. Pick your stone and finish for a bracelet that reads as effortlessly classic.',
    variants: [
      { name: 'Clover Size', options: ['Mini (6 Motifs)', 'Medium (5 Motifs)'] },
      { name: 'Stone', options: STONES },
      { name: 'Color', options: COLORS3 }
    ] },
  { id: 'cb3', name: 'Stone with Sparkles Bracelet (5 Motifs)', price: 28.50, image: 'images/sq/cb3.jpg', collection: 'clover', category: 'Bracelet',
    desc: 'Five clover motifs accented with a whisper of sparkle. A little evening energy for every day.',
    variants: [
      { name: 'Stone', options: ['Red', 'Black', 'White MOP', 'Grey MOP', 'Pink MOP', 'Malachite', 'Laser Cut', 'Tiger Eye', 'Darker Blue', 'Turquoise'] },
      { name: 'Color', options: COLORS3 }
    ] },
  { id: 'cb4', name: '5 Charms Bracelet', price: 41.80, image: 'images/sq/cb4.jpg', collection: 'clover', category: 'Bracelet',
    desc: 'Five charms — ladybug or butterfly — strung on a single clover motif for a playful, personal feel.',
    variants: [
      { name: 'Style', options: ['Ladybug with 5 Charms (Rose Gold)', 'Butterfly with 5 Charms (Yellow Gold)'] }
    ] },
  { id: 'cb5', name: 'One Motif Bracelet', price: 28.50, image: 'images/sq/cb5.jpg', collection: 'clover', category: 'Bracelet',
    desc: 'A single clover motif on a fine chain. The quiet, everyday version of the classic.',
    variants: [
      { name: 'Clover Size', options: ['Mini', 'Medium'] },
      { name: 'Stone', options: STONES_FULL },
      { name: 'Color', options: COLORS3 }
    ] },
  { id: 'cn1', name: 'One Motif Clover Necklace', price: 28.50, image: 'images/sq/cn1.jpg', collection: 'clover', category: 'Necklace',
    desc: 'One clover motif at the collarbone. The necklace that layers with everything.',
    variants: [
      { name: 'Clover Size', options: ['Mini', 'Medium', 'Magic pendant'] },
      { name: 'Stone', options: STONES_FULL },
      { name: 'Color', options: COLORS3 }
    ] },
  { id: 'cn2', name: '10 Motifs Clover Necklace', price: 41.80, image: 'images/sq/cn2.jpg', collection: 'clover', category: 'Necklace',
    desc: 'Ten clover motifs in a full strand. The statement piece that still feels light.',
    variants: [
      { name: 'Stone', options: STONES },
      { name: 'Color', options: COLORS3 }
    ] },

  // ── Carti Collection ──
  { id: 'nb1', name: 'Nail Bangle (Without Sparkle)', price: 41.80, image: 'images/sq/nb1.jpg', collection: 'carti', category: 'Nail Bangle',
    desc: 'A clean, structured bangle with a smooth finish. Minimal hardware, maximum presence.',
    variants: [
      { name: 'Color', options: COLORS4 },
      { name: 'Width', options: ['Slim', 'Thick'] },
      { name: 'Size', options: SIZES }
    ] },
  { id: 'nb2', name: 'Nail Bangle (With Sparkles)', price: 41.80, image: 'images/sq/nb2.jpg', collection: 'carti', category: 'Nail Bangle',
    desc: 'The structured bangle, now with a line of sparkle. Polished enough for evening.',
    variants: [
      { name: 'Color', options: COLORS4 },
      { name: 'Width', options: ['Slim', 'Thick'] },
      { name: 'Size', options: SIZES }
    ] },
  { id: 'cr1', name: 'Carti Unlimited Bracelet', price: 53.50, image: 'images/sq/cr1.jpg', collection: 'carti', category: 'Unlimited',
    desc: 'A fluid, unlimited-link bracelet that moves with you. The everyday staple.',
    variants: [
      { name: 'Color', options: COLORS3 },
      { name: 'Size', options: SIZES }
    ] },
  { id: 'lb1', name: 'Love Bangle (Without Sparkle)', price: 28.50, image: 'images/sq/lb1.jpg', collection: 'carti', category: 'Love Bangle',
    desc: 'A smooth, screw-motif bangle. Classic, and quietly elegant.',
    variants: [
      { name: 'Color', options: COLORS3 },
      { name: 'Width', options: ['Slim', 'Thick'] },
      { name: 'Size', options: SIZES }
    ] },
  { id: 'lb2', name: 'Love Bangle (With Sparkles)', price: 28.50, image: 'images/sq/lb2.jpg', collection: 'carti', category: 'Love Bangle',
    desc: 'The screw-motif bangle with added sparkle. A little shine for your stack.',
    variants: [
      { name: 'Width', options: ['Slim', 'Thick'] },
      { name: 'Sparkles', options: ['4 Diamonds', '6 Diamonds', '10 Diamonds'] },
      { name: 'Color', options: COLORS3 },
      { name: 'Size', options: SIZES }
    ] },

  // ── CC Collection ──
  { id: 'ce1', name: 'One Motif Earring', price: 28.50, image: 'images/sq/ce1.jpg', collection: 'cc', category: 'Earring',
    desc: 'A single clover motif for the ear. Clip or stud — wear it your way.',
    variants: [
      { name: 'Stone', options: STONES },
      { name: 'Color', options: COLORS3 },
      { name: 'Type', options: ['Clip', 'Stud'] }
    ] }
];
