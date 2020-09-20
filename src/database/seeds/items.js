const moment = require("moment");

const now = moment().utc().toDate();

module.exports = [
  {
    item_id: 1,
    name: "Pierre de Ronsard",
    price_pot: 22.5,
    stock_quantity_pot: 10,
    price_root: 16.5,
    stock_quantity_root: 50,
    variety: "Rosier grimpant",
    perfume: "Parfumée",
    size_cm: 200,
    color: "Rose",
    description:
      "Le rosier ‘Pierre de Ronsard’ est une valeur sûre dans un jardin, une variété absolument charmante célèbre pour ses grosses fleurs très pleines, parfaitement organisées, arborant un coloris tout en nuances de rose auquel il est difficile de résister. Primé et récompensé à plusieurs reprises sa réputation n'est plus à faire. C'est un grand rosier arbustif, classé parmi les rosiers grimpants, d'excellente vigueur, de croissance rapide, au feuillage brillant. Ses fleurs de grande taille aux allures de roses anciennes n'ont hélas pas de parfum, ce qu'on leur pardonne facilement: elles sont si belles! Ce rosier atteindra rapidement 2m de haut et de large, parfaitement remontant il fleurit de juin jusqu’aux premières gelées, à condition de ne manquer ni de nourriture ni d'eau, car la plante est certes vigoureuse mais aussi très gourmande. Palissez-le sur un treillage dans un endroit bien exposé: d'après notre expérience, au Nord de la Loire, c'est en plein sud qu'il sera le plus beau. Il produit des rameaux solides, bien aiguillonnés, un peu raides, bien armés pour supporter le poids des fleurs. Les jeunes pousses de ce rosiers sont rougeâtres, puis elles s'épanouissent en grandes folioles d'un vert vif et brillant, très agréable. Ce feuillage, assez sain en début de saison, est tout de même sensible au marsonia par temps très humide et en fin de saison. La floraison est longue et précoce. En région chaude, les gros boutons solitaires d'un jaune léger strié de carmin se forment dès le mois d'avril. Ils éclosent en fleurs de 10 à 13 cm de diamètre, bien rondes, composées de 70 pétales parfaitement imbriqués les uns dans les autres. Leur coloris, riche de nuances roses, est globalement bicolore: d'un rose frais devenant presque blanc en périphérie, il est ombré de carmin à la base des pétales et au coeur de la fleur. Pierre de Ronsard est capable de fleurir durant toute la belle saison, par vagues successives, et sa remontée d'automne est très belle.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Tous les types de sol. Plein soleil. Lumière partielle du soleil",
    ideal_for:
      "Murs ou clôtures de 3 mètres. Une grande arche. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 2,
    name: "EUSTACIA VYE",
    price_pot: 32.5,
    stock_quantity_pot: 40,
    price_root: 25.5,
    stock_quantity_root: 30,
    variety: "Rosier anglais",
    perfume: "Très parfumée",
    size_cm: 125,
    color: "Rose",
    description:
      "Une rose extrêmement jolie de rose abricot doux et éclatant, chaque fleur emballée de nombreux pétales délicatement ébouriffés. Tenues sur des tiges teintées de rouge, les fleurs commencent comme des tasses peu profondes, s’ouvrant sur des rosettes pleines, révélant des pétales d’une teinte plus riche, qui pâlit progressivement au fil du temps. Ils ont un délicieux parfum fruité fort. Une variété très saine; il m’agite un arbuste fort et vigoureux avec une croissance touffue et verticale.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Mixed-borders. Massifs de roses. Pots & Contenants. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 3,
    name: "CLAIRE AUSTIN",
    price_pot: 28.95,
    stock_quantity_pot: 27,
    price_root: 21.95,
    stock_quantity_root: 60,
    variety: "Rosier grimpant",
    perfume: "Très parfumée",
    size_cm: 375,
    color: "Blanche",
    description:
      "Ce rosier vigoureux et érigé fait un très bon grimpeur, tant par sa beauté que par ses performances. Il porte d'agréables boutons en forme de coupe, de couleur citron pâle, qui s'ouvrent progressivement pour donner de grandes fleurs blanc crème, dont les pétales extérieurs sont parfaitement disposés en cercles concentriques. Elles ont un fort parfum de myrrhe avec des touches de reine des prés, de vanille et d'héliotrope. La croissance est forte et particulièrement saine, et elle est habillée d'un feuillage vert mat attrayant.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Murs ou clôtures de 2 mètres. Murs ou clôtures de 3 mètres. Une arche moyenne. Une grande arche. Obélisque ou Pilier. Une entrée. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 4,
    name: "ROALD DAHL",
    price_pot: 28.95,
    stock_quantity_pot: 11,
    price_root: 21.95,
    stock_quantity_root: 30,
    variety: "Rosier arbustive",
    perfume: "Non parfumée",
    size_cm: 90,
    color: "Orange",
    description:
      "Des bourgeons souples rouge orangé s'ouvrent sur des rosettes en coupe de taille moyenne, d'une parfaite couleur abricot. Ils sont extrêmement robustes et ont un joli parfum de thé fruité. Très sain, il mûrit en un arbuste attrayant, arrondi et buissonnant, avec peu d'épines.",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for:
      "Mixed-borders. Pots & Contenants. Haies. Massifs de roses. Zones Ombragées. Bouquets.",
    created_at: now,
    updated_at: now,
  },
  {
    item_id: 5,
    name: "CHARLES DARWIN",
    price_pot: 28.95,
    stock_quantity_pot: 32,
    price_root: 21.95,
    stock_quantity_root: 50,
    variety: "Rosier arbustive",
    perfume: "Très parfumée",
    size_cm: 110,
    color: "Jaune",
    description:
      "Les fleurs sont très pleines et arrondies au début, puis s'ouvrent en coupes peu profondes. Elles sont de couleur jaune, tendant presque à la moutarde, et ont un parfum fort et délicieux, variant entre le thé floral doux et le citron pur. Il s'agit d'un arbuste robuste à la croissance large et étalée",
    plantation_care:
      "Orientation Nord, Est, Sud, Ouest. Plein soleil. Tous les types de sol. Lumière partielle du soleil",
    ideal_for: "Mixed-borders. Pots & Contenants. Haies. Zones Ombragées.",
    created_at: now,
    updated_at: now,
  },
];
