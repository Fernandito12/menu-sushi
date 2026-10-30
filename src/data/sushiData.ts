export type SushiCategory = 'nigiri' | 'maki' | 'sashimi' | 'specials';

export interface SushiItem {
  id: string;
  title: string;
  titleEs: string;
  romaji: string;
  kanji: string;
  category: SushiCategory;
  price: number;
  ingredients: string[];
  synopsis: string;
  imageUrl: string;
  allergens: string[];
  sakePairing: string;
  /** Optional normalized crop coordinates kept for a future sprite-sheet variant. */
  spineCrop: { x: number; y: number; w: number; h: number };
  coverCrop: { x: number; y: number; w: number; h: number };
}

export const sushiData: SushiItem[] = [
  {
    id: 'dragon-roll', title: 'Dragon Roll', titleEs: 'Rollo dragón', romaji: 'Doragon Maki', kanji: '龍巻', category: 'maki', price: 245,
    imageUrl: 'https://images.unsplash.com/photo-1761314026068-f07ec1ce6e2b?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Camarón tempura', 'aguacate', 'pepino', 'anguila', 'salsa unagi', 'ajonjolí'],
    allergens: ['Crustáceos', 'Pescado', 'Soya', 'Sésamo', 'Gluten'],
    sakePairing: 'Junmai ginjo frío · notas de pera y arroz que equilibran el glaseado de anguila.',
    synopsis: 'Rollo uramaki coronado con anguila glaseada y aguacate; dulce, crujiente y de umami profundo.',
    spineCrop: { x: 0, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'otoro-nigiri', title: 'Otoro Nigiri', titleEs: 'Nigiri de otoro', romaji: 'Ōtoro Nigiri', kanji: '大とろ握り', category: 'nigiri', price: 185,
    imageUrl: 'https://images.unsplash.com/photo-1691442574552-6059a11c0e25?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Ventresca de atún graso', 'arroz de sushi', 'wasabi'],
    allergens: ['Pescado'],
    sakePairing: 'Junmai daiginjo · textura sedosa y final limpio para la grasa del otoro.',
    synopsis: 'La parte más marmoleada del atún, servida sobre arroz avinagrado para una textura sedosa y larga.',
    spineCrop: { x: 0.25, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.25, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'unagi-foie-gras', title: 'Unagi Foie Gras', titleEs: 'Anguila y foie gras', romaji: 'Unagi to Foie Gras', kanji: '鰻とフォアグラ', category: 'specials', price: 295,
    imageUrl: 'https://images.unsplash.com/photo-1763647756796-af9230245bf8?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Anguila de agua dulce', 'foie gras', 'arroz de sushi', 'salsa kabayaki', 'cebollín'],
    allergens: ['Pescado', 'Soya', 'Gluten'],
    sakePairing: 'Junmai yamahai · su estructura y umami acompañan la anguila y el foie gras.',
    synopsis: 'Anguila glaseada a la brasa con foie gras dorado; un bocado untuoso, ahumado y ligeramente dulce.',
    spineCrop: { x: 0.5, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.5, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'aburi-salmon', title: 'Aburi Salmon', titleEs: 'Salmón aburi', romaji: 'Aburi Sāmon', kanji: '炙りサーモン', category: 'nigiri', price: 145,
    imageUrl: 'https://images.unsplash.com/photo-1744360515510-db7bf0f6def8?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Salmón', 'arroz de sushi', 'ponzu de yuzu', 'sal de mar'],
    allergens: ['Pescado', 'Soya', 'Gluten'],
    sakePairing: 'Junmai ginjo · acidez fresca que recoge el yuzu y el tostado del salmón.',
    synopsis: 'Salmón flameado al momento, con bordes cálidos, centro jugoso y un toque cítrico de yuzu.',
    spineCrop: { x: 0.75, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.75, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'spicy-tuna-roll', title: 'Spicy Tuna Roll', titleEs: 'Rollo de atún picante', romaji: 'Supaisī Tsuna Maki', kanji: '辛味鮪巻', category: 'maki', price: 210,
    imageUrl: 'https://images.unsplash.com/photo-1713453018516-b08018818c0c?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Atún', 'mayonesa japonesa', 'togarashi', 'pepino', 'nori', 'cebollín'],
    allergens: ['Pescado', 'Huevo', 'Soya', 'Gluten'],
    sakePairing: 'Honjozo ligeramente frío · seco y ligero para acompañar el chile y la mayonesa.',
    synopsis: 'Atún picado y cremoso con chile japonés, pepino fresco y nori tostado.',
    spineCrop: { x: 0, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'yellowtail-sashimi', title: 'Yellowtail Sashimi', titleEs: 'Sashimi de hamachi', romaji: 'Hamachi Sashimi', kanji: '鰤刺身', category: 'sashimi', price: 230,
    imageUrl: 'https://images.unsplash.com/photo-1744360515510-db7bf0f6def8?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Hamachi (jurel japonés)', 'daikon', 'ponzu', 'cebollín'],
    allergens: ['Pescado', 'Soya', 'Gluten'],
    sakePairing: 'Junmai ginjo · notas cítricas y minerales para la textura firme del hamachi.',
    synopsis: 'Láminas de hamachi de sabor limpio y textura firme, acompañadas de daikon y ponzu.',
    spineCrop: { x: 0.25, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.25, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'tempura-king-prawn', title: 'Tempura King Prawn', titleEs: 'Camarón jumbo en tempura', romaji: 'Ebi Tempura', kanji: '海老天ぷら', category: 'specials', price: 225,
    imageUrl: 'https://images.unsplash.com/photo-1744360515510-db7bf0f6def8?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Camarón jumbo', 'harina de tempura', 'daikon', 'salsa tentsuyu'],
    allergens: ['Crustáceos', 'Gluten', 'Soya'],
    sakePairing: 'Junmai karakuchi · seco, con cuerpo suficiente para la fritura ligera.',
    synopsis: 'Camarón jumbo en tempura ligera y crujiente, con tentsuyu de soya, mirin y dashi.',
    spineCrop: { x: 0.5, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.5, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'sea-urchin-gunkan', title: 'Sea Urchin Gunkan', titleEs: 'Gunkan de erizo', romaji: 'Uni Gunkan', kanji: '雲丹軍艦', category: 'nigiri', price: 260,
    imageUrl: 'https://images.unsplash.com/photo-1763647756796-af9230245bf8?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Uni (erizo de mar)', 'arroz de sushi', 'nori'],
    allergens: ['Mariscos', 'Pescado'],
    sakePairing: 'Junmai daiginjo · delicado y floral para preservar el dulzor marino del uni.',
    synopsis: 'Erizo de mar fresco en una cápsula de nori; cremoso, salino y con notas dulces del océano.',
    spineCrop: { x: 0.75, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.75, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'a5-wagyu-nigiri', title: 'A5 Wagyu Nigiri', titleEs: 'Nigiri de wagyu A5', romaji: 'Wagyū A5 Nigiri', kanji: '和牛A5握り', category: 'specials', price: 320,
    imageUrl: 'https://images.unsplash.com/photo-1691442574552-6059a11c0e25?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Wagyu japonés A5', 'arroz de sushi', 'sal de Maldon', 'wasabi'],
    allergens: [],
    sakePairing: 'Junmai kimoto · umami profundo que armoniza con el marmoleo del wagyu.',
    synopsis: 'Wagyu A5 apenas sellado sobre arroz tibio; marmoleo delicado, sabor intenso y final mantequilloso.',
    spineCrop: { x: 0, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'soft-shell-crab', title: 'Soft Shell Crab', titleEs: 'Cangrejo de caparazón blando', romaji: 'Sōto Sheru Kurabu Maki', kanji: 'ソフトシェルクラブ巻', category: 'maki', price: 255,
    imageUrl: 'https://images.unsplash.com/photo-1713453018516-b08018818c0c?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Cangrejo de caparazón blando', 'lechuga', 'aguacate', 'masago', 'mayonesa japonesa'],
    allergens: ['Crustáceos', 'Pescado', 'Huevo', 'Soya', 'Gluten'],
    sakePairing: 'Junmai ginjo frío · limpia el paladar entre el crujiente y la cremosidad.',
    synopsis: 'Cangrejo entero de caparazón blando, frito hasta quedar crujiente y envuelto con aguacate.',
    spineCrop: { x: 0.25, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.25, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'scallop-sashimi', title: 'Scallop Sashimi', titleEs: 'Sashimi de callo de hacha', romaji: 'Hotate Sashimi', kanji: '帆立刺身', category: 'sashimi', price: 215,
    imageUrl: 'https://images.unsplash.com/photo-1744360515510-db7bf0f6def8?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Callo de hacha', 'limón', 'sal de mar', 'shiso'],
    allergens: ['Moluscos'],
    sakePairing: 'Junmai daiginjo · aroma floral y final nítido junto al dulzor del callo.',
    synopsis: 'Callo de hacha fresco cortado en láminas gruesas; dulce y delicado con limón y shiso.',
    spineCrop: { x: 0.5, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.5, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'ceremonial-matcha', title: 'Ceremonial Matcha', titleEs: 'Matcha ceremonial', romaji: 'Matcha', kanji: '抹茶', category: 'specials', price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1755685068178-4b57210ddcd4?auto=format&fit=crop&fm=webp&q=85&w=1200',
    ingredients: ['Té verde matcha ceremonial', 'agua a 80 °C'],
    allergens: [],
    sakePairing: 'Sin sake · acompáñalo con agua mineral para apreciar el umami y el amargor del té.',
    synopsis: 'Matcha batido a mano al estilo usucha: vegetal, fragante y con un amargor equilibrado.',
    spineCrop: { x: 0.75, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.75, y: 0.6666, w: 0.25, h: 0.3334 },
  },
];
