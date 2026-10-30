export type SushiCategory = 'entradas' | 'nigiri' | 'maki' | 'sashimi' | 'specials' | 'bebidas' | 'postres';

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
  images: string[];
  allergens: string[];
  sakePairing: string;
  /** Optional normalized crop coordinates kept for a future sprite-sheet variant. */
  spineCrop: { x: number; y: number; w: number; h: number };
  coverCrop: { x: number; y: number; w: number; h: number };
}

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&fm=webp&q=85&w=1600`;

const galleries = {
  dragonRoll: [photo('photo-1761314026068-f07ec1ce6e2b'), photo('photo-1749321834585-bda3df817655'), photo('photo-1637074930269-089fde202b57')],
  otoroNigiri: [photo('photo-1691442574552-6059a11c0e25'), photo('photo-1772285268647-11deb0bdbe29'), photo('photo-1747471447806-c56d99c348cd')],
  unagiFoieGras: [photo('photo-1763647756796-af9230245bf8'), photo('photo-1754211152988-c0622613211e'), photo('photo-1747471447806-c56d99c348cd')],
  aburiSalmon: [photo('photo-1744360515510-db7bf0f6def8'), photo('photo-1747471447806-c56d99c348cd'), photo('photo-1637074930269-089fde202b57')],
  spicyTunaRoll: [photo('photo-1713453018516-b08018818c0c'), photo('photo-1749321834585-bda3df817655'), photo('photo-1761314026068-f07ec1ce6e2b')],
  yellowtailSashimi: [photo('photo-1772285283419-b34f42b4a4df'), photo('photo-1754211152988-c0622613211e'), photo('photo-1772285268647-11deb0bdbe29')],
  tempuraKingPrawn: [photo('photo-1666599207746-0868c6a556d2'), photo('photo-1772285283419-b34f42b4a4df'), photo('photo-1754211152988-c0622613211e')],
  seaUrchinGunkan: [photo('photo-1747471447806-c56d99c348cd'), photo('photo-1754211152988-c0622613211e'), photo('photo-1637074930269-089fde202b57')],
  a5WagyuNigiri: [photo('photo-1691442574552-6059a11c0e25'), photo('photo-1772285268647-11deb0bdbe29'), photo('photo-1747471447806-c56d99c348cd')],
  softShellCrab: [photo('photo-1713453018516-b08018818c0c'), photo('photo-1749321834585-bda3df817655'), photo('photo-1637074930269-089fde202b57')],
  scallopSashimi: [photo('photo-1772285283419-b34f42b4a4df'), photo('photo-1754211152988-c0622613211e'), photo('photo-1772285268647-11deb0bdbe29')],
  ceremonialMatcha: [photo('photo-1755685068178-4b57210ddcd4'), photo('photo-1753009712810-3f72c3f72548'), photo('photo-1515823064-d6e0c04616a7')],
  edamame: [photo('photo-1547592180-85f173990554'), photo('photo-1512621776951-a57141f2eefd'), photo('photo-1547592180-85f173990554')],
  porkGyoza: [photo('photo-1563245372-f21724e3856d'), photo('photo-1749321834585-bda3df817655'), photo('photo-1563245372-f21724e3856d')],
  spicyEdamame: [photo('photo-1512621776951-a57141f2eefd'), photo('photo-1547592180-85f173990554'), photo('photo-1512621776951-a57141f2eefd')],
  sake: [photo('photo-1513558161293-cdaf765edfd47'), photo('photo-1515823064-d6e0c04616a7'), photo('photo-1513558161293-cdaf765edfd47')],
  sapporo: [photo('photo-1535958636474-b021ee887b13'), photo('photo-1513558161293-cdaf765edfd47'), photo('photo-1535958636474-b021ee887b13')],
  icedMatcha: [photo('photo-1515823064-d6e0c04616a7'), photo('photo-1755685068178-4b57210ddcd4'), photo('photo-1753009712810-3f72c3f72548')],
  matchaMochi: [photo('photo-1582176604856-e824b4736522'), photo('photo-1755685068178-4b57210ddcd4'), photo('photo-1582176604856-e824b4736522')],
  blackSesameIceCream: [photo('photo-1563805042-7684c019e1cb'), photo('photo-1582176604856-e824b4736522'), photo('photo-1563805042-7684c019e1cb')],
};

export const sushiData: SushiItem[] = [
  {
    id: 'dragon-roll', title: 'Dragon Roll', titleEs: 'Rollo dragón', romaji: 'Doragon Maki', kanji: '龍巻', category: 'maki', price: 245,
    images: galleries.dragonRoll,
    ingredients: ['Camarón tempura', 'aguacate', 'pepino', 'anguila', 'salsa unagi', 'ajonjolí'],
    allergens: ['Crustáceos', 'Pescado', 'Soya', 'Sésamo', 'Gluten'],
    sakePairing: 'Junmai ginjo frío · notas de pera y arroz que equilibran el glaseado de anguila.',
    synopsis: 'Rollo uramaki coronado con anguila glaseada y aguacate; dulce, crujiente y de umami profundo.',
    spineCrop: { x: 0, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'otoro-nigiri', title: 'Otoro Nigiri', titleEs: 'Nigiri de otoro', romaji: 'Ōtoro Nigiri', kanji: '大とろ握り', category: 'nigiri', price: 185,
    images: galleries.otoroNigiri,
    ingredients: ['Ventresca de atún graso', 'arroz de sushi', 'wasabi'],
    allergens: ['Pescado'],
    sakePairing: 'Junmai daiginjo · textura sedosa y final limpio para la grasa del otoro.',
    synopsis: 'La parte más marmoleada del atún, servida sobre arroz avinagrado para una textura sedosa y larga.',
    spineCrop: { x: 0.25, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.25, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'unagi-foie-gras', title: 'Unagi Foie Gras', titleEs: 'Anguila y foie gras', romaji: 'Unagi to Foie Gras', kanji: '鰻とフォアグラ', category: 'specials', price: 295,
    images: galleries.unagiFoieGras,
    ingredients: ['Anguila de agua dulce', 'foie gras', 'arroz de sushi', 'salsa kabayaki', 'cebollín'],
    allergens: ['Pescado', 'Soya', 'Gluten'],
    sakePairing: 'Junmai yamahai · su estructura y umami acompañan la anguila y el foie gras.',
    synopsis: 'Anguila glaseada a la brasa con foie gras dorado; un bocado untuoso, ahumado y ligeramente dulce.',
    spineCrop: { x: 0.5, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.5, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'aburi-salmon', title: 'Aburi Salmon', titleEs: 'Salmón aburi', romaji: 'Aburi Sāmon', kanji: '炙りサーモン', category: 'nigiri', price: 145,
    images: galleries.aburiSalmon,
    ingredients: ['Salmón', 'arroz de sushi', 'ponzu de yuzu', 'sal de mar'],
    allergens: ['Pescado', 'Soya', 'Gluten'],
    sakePairing: 'Junmai ginjo · acidez fresca que recoge el yuzu y el tostado del salmón.',
    synopsis: 'Salmón flameado al momento, con bordes cálidos, centro jugoso y un toque cítrico de yuzu.',
    spineCrop: { x: 0.75, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.75, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'spicy-tuna-roll', title: 'Spicy Tuna Roll', titleEs: 'Rollo de atún picante', romaji: 'Supaisī Tsuna Maki', kanji: '辛味鮪巻', category: 'maki', price: 210,
    images: galleries.spicyTunaRoll,
    ingredients: ['Atún', 'mayonesa japonesa', 'togarashi', 'pepino', 'nori', 'cebollín'],
    allergens: ['Pescado', 'Huevo', 'Soya', 'Gluten'],
    sakePairing: 'Honjozo ligeramente frío · seco y ligero para acompañar el chile y la mayonesa.',
    synopsis: 'Atún picado y cremoso con chile japonés, pepino fresco y nori tostado.',
    spineCrop: { x: 0, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'yellowtail-sashimi', title: 'Yellowtail Sashimi', titleEs: 'Sashimi de hamachi', romaji: 'Hamachi Sashimi', kanji: '鰤刺身', category: 'sashimi', price: 230,
    images: galleries.yellowtailSashimi,
    ingredients: ['Hamachi (jurel japonés)', 'daikon', 'ponzu', 'cebollín'],
    allergens: ['Pescado', 'Soya', 'Gluten'],
    sakePairing: 'Junmai ginjo · notas cítricas y minerales para la textura firme del hamachi.',
    synopsis: 'Láminas de hamachi de sabor limpio y textura firme, acompañadas de daikon y ponzu.',
    spineCrop: { x: 0.25, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.25, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'tempura-king-prawn', title: 'Tempura King Prawn', titleEs: 'Camarón jumbo en tempura', romaji: 'Ebi Tempura', kanji: '海老天ぷら', category: 'specials', price: 225,
    images: galleries.tempuraKingPrawn,
    ingredients: ['Camarón jumbo', 'harina de tempura', 'daikon', 'salsa tentsuyu'],
    allergens: ['Crustáceos', 'Gluten', 'Soya'],
    sakePairing: 'Junmai karakuchi · seco, con cuerpo suficiente para la fritura ligera.',
    synopsis: 'Camarón jumbo en tempura ligera y crujiente, con tentsuyu de soya, mirin y dashi.',
    spineCrop: { x: 0.5, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.5, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'sea-urchin-gunkan', title: 'Sea Urchin Gunkan', titleEs: 'Gunkan de erizo', romaji: 'Uni Gunkan', kanji: '雲丹軍艦', category: 'nigiri', price: 260,
    images: galleries.seaUrchinGunkan,
    ingredients: ['Uni (erizo de mar)', 'arroz de sushi', 'nori'],
    allergens: ['Mariscos', 'Pescado'],
    sakePairing: 'Junmai daiginjo · delicado y floral para preservar el dulzor marino del uni.',
    synopsis: 'Erizo de mar fresco en una cápsula de nori; cremoso, salino y con notas dulces del océano.',
    spineCrop: { x: 0.75, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.75, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'a5-wagyu-nigiri', title: 'A5 Wagyu Nigiri', titleEs: 'Nigiri de wagyu A5', romaji: 'Wagyū A5 Nigiri', kanji: '和牛A5握り', category: 'specials', price: 320,
    images: galleries.a5WagyuNigiri,
    ingredients: ['Wagyu japonés A5', 'arroz de sushi', 'sal de Maldon', 'wasabi'],
    allergens: [],
    sakePairing: 'Junmai kimoto · umami profundo que armoniza con el marmoleo del wagyu.',
    synopsis: 'Wagyu A5 apenas sellado sobre arroz tibio; marmoleo delicado, sabor intenso y final mantequilloso.',
    spineCrop: { x: 0, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'soft-shell-crab', title: 'Soft Shell Crab', titleEs: 'Cangrejo de caparazón blando', romaji: 'Sōto Sheru Kurabu Maki', kanji: 'ソフトシェルクラブ巻', category: 'maki', price: 255,
    images: galleries.softShellCrab,
    ingredients: ['Cangrejo de caparazón blando', 'lechuga', 'aguacate', 'masago', 'mayonesa japonesa'],
    allergens: ['Crustáceos', 'Pescado', 'Huevo', 'Soya', 'Gluten'],
    sakePairing: 'Junmai ginjo frío · limpia el paladar entre el crujiente y la cremosidad.',
    synopsis: 'Cangrejo entero de caparazón blando, frito hasta quedar crujiente y envuelto con aguacate.',
    spineCrop: { x: 0.25, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.25, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'scallop-sashimi', title: 'Scallop Sashimi', titleEs: 'Sashimi de callo de hacha', romaji: 'Hotate Sashimi', kanji: '帆立刺身', category: 'sashimi', price: 215,
    images: galleries.scallopSashimi,
    ingredients: ['Callo de hacha', 'limón', 'sal de mar', 'shiso'],
    allergens: ['Moluscos'],
    sakePairing: 'Junmai daiginjo · aroma floral y final nítido junto al dulzor del callo.',
    synopsis: 'Callo de hacha fresco cortado en láminas gruesas; dulce y delicado con limón y shiso.',
    spineCrop: { x: 0.5, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.5, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'ceremonial-matcha', title: 'Ceremonial Matcha', titleEs: 'Matcha ceremonial', romaji: 'Matcha', kanji: '抹茶', category: 'specials', price: 120,
    images: galleries.ceremonialMatcha,
    ingredients: ['Té verde matcha ceremonial', 'agua a 80 °C'],
    allergens: [],
    sakePairing: 'Sin sake · acompáñalo con agua mineral para apreciar el umami y el amargor del té.',
    synopsis: 'Matcha batido a mano al estilo usucha: vegetal, fragante y con un amargor equilibrado.',
    spineCrop: { x: 0.75, y: 0.6666, w: 0.25, h: 0.3334 }, coverCrop: { x: 0.75, y: 0.6666, w: 0.25, h: 0.3334 },
  },
  {
    id: 'edamame-steamed', title: 'Steamed Edamame', titleEs: 'Edamame al vapor', romaji: 'Mushi Edamame', kanji: '塩茹で枝豆', category: 'entradas', price: 95,
    images: galleries.edamame,
    ingredients: ['Edamame', 'sal de mar'], allergens: ['Soya'],
    sakePairing: 'Junmai ginjo frío · su final limpio acompaña la salinidad de la soya tierna.',
    synopsis: 'Vainas de soya jóvenes cocidas al vapor y terminadas con sal de mar; un inicio ligero y clásico.',
    spineCrop: { x: 0, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'pork-gyoza', title: 'Pork Gyoza', titleEs: 'Gyozas de cerdo', romaji: 'Buta Gyōza', kanji: '豚餃子', category: 'entradas', price: 145,
    images: galleries.porkGyoza,
    ingredients: ['Cerdo', 'col', 'cebollín', 'jengibre', 'ajo', 'masa de trigo', 'salsa de soya'], allergens: ['Gluten', 'Soya', 'Sésamo'],
    sakePairing: 'Junmai honjozo frío · equilibra el dorado de la masa y el relleno jugoso.',
    synopsis: 'Empanadillas japonesas doradas por un lado y cocidas al vapor, rellenas de cerdo, col y jengibre.',
    spineCrop: { x: 0.25, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.25, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'edamame-spicy', title: 'Spicy Edamame', titleEs: 'Edamame picante', romaji: 'Pirikara Edamame', kanji: '辛枝豆', category: 'entradas', price: 110,
    images: galleries.spicyEdamame,
    ingredients: ['Edamame', 'shichimi tōgarashi', 'aceite de sésamo', 'sal de mar'], allergens: ['Soya', 'Sésamo'],
    sakePairing: 'Junmai karakuchi frío · su sequedad suaviza el picor del shichimi.',
    synopsis: 'Edamame salteado con aceite de sésamo y shichimi tōgarashi, con picor aromático y final tostado.',
    spineCrop: { x: 0.5, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.5, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'junmai-daiginjo-sake', title: 'Junmai Daiginjo Sake', titleEs: 'Sake Junmai Daiginjo', romaji: 'Junmai Daiginjō', kanji: '純米大吟醸', category: 'bebidas', price: 220,
    images: galleries.sake,
    ingredients: ['Arroz pulido', 'koji', 'agua'], allergens: [],
    sakePairing: 'Servicio sugerido · frío, entre 8 y 12 °C, en copa pequeña.',
    synopsis: 'Sake premium de arroz, de perfil floral y delicado; servir frío para conservar su aroma limpio.',
    spineCrop: { x: 0.75, y: 0, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.75, y: 0, w: 0.25, h: 0.3333 },
  },
  {
    id: 'sapporo-beer', title: 'Sapporo Beer', titleEs: 'Cerveza Sapporo', romaji: 'Sapporo Bīru', kanji: 'サッポロビール', category: 'bebidas', price: 95,
    images: galleries.sapporo,
    ingredients: ['Agua', 'malta de cebada', 'lúpulo', 'levadura'], allergens: ['Gluten'],
    sakePairing: 'Servicio sugerido · lager japonesa fría, ideal con tempura y gyozas.',
    synopsis: 'Lager japonesa de cuerpo ligero, burbuja fina y final seco; servir bien fría.',
    spineCrop: { x: 0, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'iced-matcha', title: 'Iced Matcha', titleEs: 'Té matcha helado', romaji: 'Aisu Matcha', kanji: '冷抹茶', category: 'bebidas', price: 85,
    images: galleries.icedMatcha,
    ingredients: ['Té verde matcha', 'agua', 'hielo'], allergens: [],
    sakePairing: 'Sin sake · bebida fresca y vegetal para acompañar el menú.',
    synopsis: 'Matcha batido con agua y servido sobre hielo; intenso, vegetal y sin endulzar.',
    spineCrop: { x: 0.25, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.25, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'matcha-mochi', title: 'Matcha Mochi', titleEs: 'Mochi de matcha', romaji: 'Matcha Mochi', kanji: '抹茶餅', category: 'postres', price: 110,
    images: galleries.matchaMochi,
    ingredients: ['Harina de arroz glutinoso', 'pasta de frijol blanco', 'matcha', 'azúcar'], allergens: [],
    sakePairing: 'Té sencha · sus notas herbales prolongan el sabor del matcha.',
    synopsis: 'Mochi suave relleno de pasta dulce y perfumado con matcha japonés.',
    spineCrop: { x: 0.5, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.5, y: 0.3333, w: 0.25, h: 0.3333 },
  },
  {
    id: 'black-sesame-ice-cream', title: 'Black Sesame Ice Cream', titleEs: 'Helado de sésamo negro', romaji: 'Kuro Goma Aisu', kanji: '黒胡麻アイス', category: 'postres', price: 105,
    images: galleries.blackSesameIceCream,
    ingredients: ['Crema', 'leche', 'sésamo negro', 'azúcar'], allergens: ['Leche', 'Sésamo'],
    sakePairing: 'Té hojicha · su tostado armoniza con las notas de nuez del sésamo.',
    synopsis: 'Helado cremoso de sésamo negro tostado, con notas profundas de nuez y dulzor equilibrado.',
    spineCrop: { x: 0.75, y: 0.3333, w: 0.25, h: 0.3333 }, coverCrop: { x: 0.75, y: 0.3333, w: 0.25, h: 0.3333 },
  },
];
