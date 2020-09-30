const moment = require("moment");

const now = moment().utc().toDate();

module.exports = [
  {
    item_id: 1,
    type: "Pot",
    name: "Pierre de Ronsard",
    price: 22.5,
    stock_quantity: 10,
    variety: "Rosier grimpant",
    perfume: "Parfumée",
    size_cm: 200,
    color: "Rose",
    flowering: "Remontante",
    description:
      "Le rosier ‘Pierre de Ronsard’ est une valeur sûre dans un jardin, une variété absolument charmante célèbre pour ses grosses fleurs très pleines, parfaitement organisées, arborant un coloris tout en nuances de rose auquel il est difficile de résister._Primé et récompensé à plusieurs reprises sa réputation n'est plus à faire. C'est un grand rosier arbustif, classé parmi les rosiers grimpants, d'excellente vigueur, de croissance rapide, au feuillage brillant. Ses fleurs de grande taille aux allures de roses anciennes n'ont hélas pas de parfum, ce qu'on leur pardonne facilement: elles sont si belles! Ce rosier atteindra rapidement 2m de haut et de large, parfaitement remontant il fleurit de juin jusqu’aux premières gelées, à condition de ne manquer ni de nourriture ni d'eau, car la plante est certes vigoureuse mais aussi très gourmande._Palissez-le sur un treillage dans un endroit bien exposé: d'après notre expérience, au Nord de la Loire, c'est en plein sud qu'il sera le plus beau. Il produit des rameaux solides, bien aiguillonnés, un peu raides, bien armés pour supporter le poids des fleurs. Les jeunes pousses de ce rosiers sont rougeâtres, puis elles s'épanouissent en grandes folioles d'un vert vif et brillant, très agréable._Ce feuillage, assez sain en début de saison, est tout de même sensible au marsonia par temps très humide et en fin de saison. La floraison est longue et précoce. En région chaude, les gros boutons solitaires d'un jaune léger strié de carmin se forment dès le mois d'avril. Ils éclosent en fleurs de 10 à 13 cm de diamètre, bien rondes, composées de 70 pétales parfaitement imbriqués les uns dans les autres. Leur coloris, riche de nuances roses, est globalement bicolore: d'un rose frais devenant presque blanc en périphérie, il est ombré de carmin à la base des pétales et au coeur de la fleur. Pierre de Ronsard est capable de fleurir durant toute la belle saison, par vagues successives, et sa remontée d'automne est très belle.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Tous les types de sol. Plein soleil. Lumière partielle du soleil",
    ideal_for:
      "Murs ou clôtures de 3 mètres. Une grande arche. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 2,
    type: "Pot",
    name: "EUSTACIA VYE",
    price: 32.5,
    stock_quantity: 40,
    variety: "Rosier anglais",
    perfume: "Très parfumée",
    size_cm: 125,
    color: "Rose",
    flowering: "Remontante",
    description:
      "Une rose extrêmement jolie de rose abricot doux et éclatant, chaque fleur emballée de nombreux pétales délicatement ébouriffés. Tenues sur des tiges teintées de rouge, les fleurs commencent comme des tasses peu profondes, s’ouvrant sur des rosettes pleines, révélant des pétales d’une teinte plus riche, qui pâlit progressivement au fil du temps._Ils ont un délicieux parfum fruité fort. Une variété très saine; il m’agite un arbuste fort et vigoureux avec une croissance touffue et verticale.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Mixed-borders. Massifs de roses. Pots & Contenants. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 3,
    type: "Pot",
    name: "CLAIRE AUSTIN",
    price: 28.95,
    stock_quantity: 27,
    variety: "Rosier grimpant",
    perfume: "Très parfumée",
    size_cm: 375,
    color: "Blanche",
    flowering: "Remontante",
    description:
      "Ce rosier vigoureux et érigé fait un très bon grimpeur, tant par sa beauté que par ses performances. Il porte d'agréables boutons en forme de coupe, de couleur citron pâle, qui s'ouvrent progressivement pour donner de grandes fleurs blanc crème, dont les pétales extérieurs sont parfaitement disposés en cercles concentriques._Elles ont un fort parfum de myrrhe avec des touches de reine des prés, de vanille et d'héliotrope. La croissance est forte et particulièrement saine, et elle est habillée d'un feuillage vert mat attrayant.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Murs ou clôtures de 2 mètres. Murs ou clôtures de 3 mètres. Une arche moyenne. Une grande arche. Obélisque ou Pilier. Une entrée. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 4,
    type: "Pot",
    name: "ROALD DAHL",
    price: 28.95,
    stock_quantity: 11,
    variety: "Rosier arbustive",
    perfume: "Non parfumée",
    size_cm: 90,
    color: "Orange",
    flowering: "Remontante",
    description:
      "Des bourgeons souples rouge orangé s'ouvrent sur des rosettes en coupe de taille moyenne, d'une parfaite couleur abricot. Ils sont extrêmement robustes et ont un joli parfum de thé fruité._Très sain, il mûrit en un arbuste attrayant, arrondi et buissonnant, avec peu d'épines.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Mixed-borders. Pots & Contenants. Haies. Massifs de roses. Zones Ombragées. Bouquets.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 5,
    type: "Pot",
    name: "CHARLES DARWIN",
    price: 28.95,
    stock_quantity: 32,
    variety: "Rosier arbustive",
    perfume: "Très parfumée",
    size_cm: 110,
    color: "Jaune",
    flowering: "Remontante",
    description:
      "Les fleurs sont très pleines et arrondies au début, puis s'ouvrent en coupes peu profondes. Elles sont de couleur jaune, tendant presque à la moutarde, et ont un parfum fort et délicieux, variant entre le thé floral doux et le citron pur._Il s'agit d'un arbuste robuste à la croissance large et étalée",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for: "Mixed-borders. Pots & Contenants. Haies. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 6,
    type: "Root",
    name: "Pierre de Ronsard",
    price: 16.5,
    stock_quantity: 50,
    variety: "Rosier grimpant",
    perfume: "Parfumée",
    size_cm: 200,
    color: "Rose",
    flowering: "Remontante",
    description:
      "Le rosier ‘Pierre de Ronsard’ est une valeur sûre dans un jardin, une variété absolument charmante célèbre pour ses grosses fleurs très pleines, parfaitement organisées, arborant un coloris tout en nuances de rose auquel il est difficile de résister._Primé et récompensé à plusieurs reprises sa réputation n'est plus à faire. C'est un grand rosier arbustif, classé parmi les rosiers grimpants, d'excellente vigueur, de croissance rapide, au feuillage brillant. Ses fleurs de grande taille aux allures de roses anciennes n'ont hélas pas de parfum, ce qu'on leur pardonne facilement: elles sont si belles! Ce rosier atteindra rapidement 2m de haut et de large, parfaitement remontant il fleurit de juin jusqu’aux premières gelées, à condition de ne manquer ni de nourriture ni d'eau, car la plante est certes vigoureuse mais aussi très gourmande._Palissez-le sur un treillage dans un endroit bien exposé: d'après notre expérience, au Nord de la Loire, c'est en plein sud qu'il sera le plus beau. Il produit des rameaux solides, bien aiguillonnés, un peu raides, bien armés pour supporter le poids des fleurs. Les jeunes pousses de ce rosiers sont rougeâtres, puis elles s'épanouissent en grandes folioles d'un vert vif et brillant, très agréable._Ce feuillage, assez sain en début de saison, est tout de même sensible au marsonia par temps très humide et en fin de saison. La floraison est longue et précoce. En région chaude, les gros boutons solitaires d'un jaune léger strié de carmin se forment dès le mois d'avril. Ils éclosent en fleurs de 10 à 13 cm de diamètre, bien rondes, composées de 70 pétales parfaitement imbriqués les uns dans les autres. Leur coloris, riche de nuances roses, est globalement bicolore: d'un rose frais devenant presque blanc en périphérie, il est ombré de carmin à la base des pétales et au coeur de la fleur. Pierre de Ronsard est capable de fleurir durant toute la belle saison, par vagues successives, et sa remontée d'automne est très belle.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Tous les types de sol. Plein soleil. Lumière partielle du soleil",
    ideal_for:
      "Murs ou clôtures de 3 mètres. Une grande arche. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 7,
    type: "Root",
    name: "EUSTACIA VYE",
    price: 25.5,
    stock_quantity: 30,
    variety: "Rosier anglais",
    perfume: "Très parfumée",
    size_cm: 125,
    color: "Rose",
    flowering: "Remontante",
    description:
      "Une rose extrêmement jolie de rose abricot doux et éclatant, chaque fleur emballée de nombreux pétales délicatement ébouriffés. Tenues sur des tiges teintées de rouge, les fleurs commencent comme des tasses peu profondes, s’ouvrant sur des rosettes pleines, révélant des pétales d’une teinte plus riche, qui pâlit progressivement au fil du temps._Ils ont un délicieux parfum fruité fort. Une variété très saine; il m’agite un arbuste fort et vigoureux avec une croissance touffue et verticale.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Mixed-borders. Massifs de roses. Pots & Contenants. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 8,
    type: "Root",
    name: "CLAIRE AUSTIN",
    price: 21.95,
    stock_quantity: 60,
    variety: "Rosier grimpant",
    perfume: "Très parfumée",
    size_cm: 375,
    color: "Blanche",
    flowering: "Remontante",
    description:
      "Ce rosier vigoureux et érigé fait un très bon grimpeur, tant par sa beauté que par ses performances. Il porte d'agréables boutons en forme de coupe, de couleur citron pâle, qui s'ouvrent progressivement pour donner de grandes fleurs blanc crème, dont les pétales extérieurs sont parfaitement disposés en cercles concentriques._Elles ont un fort parfum de myrrhe avec des touches de reine des prés, de vanille et d'héliotrope. La croissance est forte et particulièrement saine, et elle est habillée d'un feuillage vert mat attrayant.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Murs ou clôtures de 2 mètres. Murs ou clôtures de 3 mètres. Une arche moyenne. Une grande arche. Obélisque ou Pilier. Une entrée. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 9,
    type: "Root",
    name: "ROALD DAHL",
    price: 21.95,
    stock_quantity: 30,
    variety: "Rosier arbustive",
    perfume: "Non parfumée",
    size_cm: 90,
    color: "Orange",
    flowering: "Remontante",
    description:
      "Des bourgeons souples rouge orangé s'ouvrent sur des rosettes en coupe de taille moyenne, d'une parfaite couleur abricot. Ils sont extrêmement robustes et ont un joli parfum de thé fruité._Très sain, il mûrit en un arbuste attrayant, arrondi et buissonnant, avec peu d'épines.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Mixed-borders. Pots & Contenants. Haies. Massifs de roses. Zones Ombragées. Bouquets.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 10,
    type: "Root",
    name: "CHARLES DARWIN",
    price: 21.95,
    stock_quantity: 50,
    variety: "Rosier arbustive",
    perfume: "Très parfumée",
    size_cm: 110,
    color: "Jaune",
    flowering: "Remontante",
    description:
      "Les fleurs sont très pleines et arrondies au début, puis s'ouvrent en coupes peu profondes. Elles sont de couleur jaune, tendant presque à la moutarde, et ont un parfum fort et délicieux, variant entre le thé floral doux et le citron pur._Il s'agit d'un arbuste robuste à la croissance large et étalée",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for: "Mixed-borders. Pots & Contenants. Haies. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
];
