export type SushiCategory = 'nigiri' | 'maki' | 'sashimi' | 'specials';

export interface SushiItem {
  id: string;
  title: string;
  romaji: string;
  kanji: string;
  category: SushiCategory;
  price: number;
  ingredients: string[];
  synopsis: string;
  /** Coordinates and dimensions as fractions (0–1) of the shared image atlas. */
  spineCrop: { x: number; y: number; w: number; h: number };
  coverCrop: { x: number; y: number; w: number; h: number };
}

export const sushiData: SushiItem[] = [
  {
    id: 'dragon-roll', title: 'Dragon Roll', romaji: 'Doragon Maki', kanji: '龍巻', category: 'maki', price: 245,
    ingredients: ['Camarón tempura', 'aguacate', 'pepino', 'anguila', 'salsa unagi', 'ajonjolí'],
    synopsis: 'Rollo uramaki coronado con anguila glaseada y aguacate; dulce, crujiente y de umami profundo.',
    spineCrop: { x: 0, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'otoro-nigiri', title: 'Otoro Nigiri', romaji: 'Ōtoro Nigiri', kanji: '大とろ握り', category: 'nigiri', price: 185,
    ingredients: ['Ventresca de atún graso', 'arroz de sushi', 'wasabi'],
    synopsis: 'La parte más marmoleada del atún, servida sobre arroz avinagrado para una textura sedosa y larga.',
    spineCrop: { x: 0.25, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.25, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'unagi-foie-gras', title: 'Unagi Foie Gras', romaji: 'Unagi to Foie Gras', kanji: '鰻とフォアグラ', category: 'specials', price: 295,
    ingredients: ['Anguila de agua dulce', 'foie gras', 'arroz de sushi', 'salsa kabayaki', 'cebollín'],
    synopsis: 'Anguila glaseada a la brasa con foie gras dorado; un bocado untuoso, ahumado y ligeramente dulce.',
    spineCrop: { x: 0.5, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.5, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'aburi-salmon', title: 'Aburi Salmon', romaji: 'Aburi Sāmon', kanji: '炙りサーモン', category: 'nigiri', price: 145,
    ingredients: ['Salmón', 'arroz de sushi', 'ponzu de yuzu', 'sal de mar'],
    synopsis: 'Salmón flameado al momento, con bordes cálidos, centro jugoso y un toque cítrico de yuzu.',
    spineCrop: { x: 0.75, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.75, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'spicy-tuna-roll', title: 'Spicy Tuna Roll', romaji: 'Supaisī Tsuna Maki', kanji: '辛味鮪巻', category: 'maki', price: 210,
    ingredients: ['Atún', 'mayonesa japonesa', 'togarashi', 'pepino', 'nori', 'cebollín'],
    synopsis: 'Atún picado y cremoso con chile japonés, pepino fresco y nori tostado.',
    spineCrop: { x: 0, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'yellowtail-sashimi', title: 'Yellowtail Sashimi', romaji: 'Hamachi Sashimi', kanji: '鰤刺身', category: 'sashimi', price: 230,
    ingredients: ['Hamachi (jurel japonés)', 'daikon', 'ponzu', 'cebollín'],
    synopsis: 'Láminas de hamachi de sabor limpio y textura firme, acompañadas de daikon y ponzu.',
    spineCrop: { x: 0.25, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.25, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'tempura-king-prawn', title: 'Tempura King Prawn', romaji: 'Ebi Tempura', kanji: '海老天ぷら', category: 'specials', price: 225,
    ingredients: ['Camarón jumbo', 'harina de tempura', 'daikon', 'salsa tentsuyu'],
    synopsis: 'Camarón jumbo en tempura ligera y crujiente, con tentsuyu de soya, mirin y dashi.',
    spineCrop: { x: 0.5, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.5, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'sea-urchin-gunkan', title: 'Sea Urchin Gunkan', romaji: 'Uni Gunkan', kanji: '雲丹軍艦', category: 'nigiri', price: 260,
    ingredients: ['Uni (erizo de mar)', 'arroz de sushi', 'nori'],
    synopsis: 'Erizo de mar fresco en una cápsula de nori; cremoso, salino y con notas dulces del océano.',
    spineCrop: { x: 0.75, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.75, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'a5-wagyu-nigiri', title: 'A5 Wagyu Nigiri', romaji: 'Wagyū A5 Nigiri', kanji: '和牛A5握り', category: 'specials', price: 320,
    ingredients: ['Wagyu japonés A5', 'arroz de sushi', 'sal de Maldon', 'wasabi'],
    synopsis: 'Wagyu A5 apenas sellado sobre arroz tibio; marmoleo delicado, sabor intenso y final mantequilloso.',
    spineCrop: { x: 0, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'soft-shell-crab', title: 'Soft Shell Crab', romaji: 'Sōto Sheru Kurabu Maki', kanji: 'ソフトシェルクラブ巻', category: 'maki', price: 255,
    ingredients: ['Cangrejo de caparazón blando', 'lechuga', 'aguacate', 'masago', 'mayonesa japonesa'],
    synopsis: 'Cangrejo entero de caparazón blando, frito hasta quedar crujiente y envuelto con aguacate.',
    spineCrop: { x: 0.25, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.25, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'scallop-sashimi', title: 'Scallop Sashimi', romaji: 'Hotate Sashimi', kanji: '帆立刺身', category: 'sashimi', price: 215,
    ingredients: ['Callo de hacha', 'limón', 'sal de mar', 'shiso'],
    synopsis: 'Callo de hacha fresco cortado en láminas gruesas; dulce y delicado con limón y shiso.',
    spineCrop: { x: 0.5, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.5, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'ceremonial-matcha', title: 'Ceremonial Matcha', romaji: 'Matcha', kanji: '抹茶', category: 'specials', price: 120,
    ingredients: ['Té verde matcha ceremonial', 'agua a 80 °C'],
    synopsis: 'Matcha batido a mano al estilo usucha: vegetal, fragante y con un amargor equilibrado.',
    spineCrop: { x: 0.75, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.75, y: 0.6666, w: 0.25, h: 0.3334 },
  },
];
