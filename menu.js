/* Mina Café – Speisekarte (Daten) */
window.MINA_MENU = {
  categories: [
    {
      id: "bowls",
      label: "Açaí Bowls",
      emoji: "🫐",
      title: "Açaí Bowls",
      kicker: "Unser Signature",
      intro: "Eiskalte Açaí-Basis, frisch püriert, mit Toppings, die knacken. Das, wofür ihr herkommt.",
      layout: "feature",
      items: [
        { name: "Mina Bowl", price: 10.9, badge: "Signature", tone: "berry", art: "bowl", tagline: "Açaí, but make it special.",
          desc: ["Açaí", "Erdbeeren", "Himbeeren", "Heidelbeeren", "Granola", "Pistaziencreme"] },
        { name: "Tropical Bowl", price: 10.9, badge: "Sunny", tone: "mango", art: "bowl",
          desc: ["Açaí", "Mango & Maracuja Mix", "Kokoschips", "Granola", "White Chocolate Drizzle"] },
        { name: "Bueno Bowl", price: 11.9, badge: "Fan Favorite", tone: "choco", art: "bowl",
          desc: ["Açaí", "Banane", "Erdbeeren", "Bueno Creme", "Schoko Drops", "Bueno Crunch"] },
        { name: "Peanut Butter Bowl", price: 11.9, badge: "Protein Vibes", tone: "peanut", art: "bowl",
          desc: ["Açaí", "Banane", "Erdbeeren", "Peanut Butter", "Granola"] }
      ],
      extras: [
        { title: "Obst", price: 1.0, options: ["Banane", "Erdbeeren", "Himbeeren", "Heidelbeeren", "Mango-Maracuja"] },
        { title: "Toppings", price: 0.7, options: ["Granola", "Kokoschips", "Schoko-Drops"] },
        { title: "Creams", price: 1.0, options: ["Pistaziencreme", "Erdnussbutter", "Weiße Schokolade", "Haselnusscreme"] }
      ]
    },
    {
      id: "croffel",
      label: "Croffel",
      emoji: "🥐",
      title: "Croffel",
      kicker: "Croissant × Waffel",
      intro: "Außen karamellisiert-knusprig, innen buttrig-weich. Frisch aus dem Waffeleisen.",
      layout: "cards",
      items: [
        { name: "Pistachio Dream", price: 6.9, badge: "Hype", tone: "pistachio", art: "croffle",
          desc: ["Pistaziencreme", "gehackte Pistazien", "Puderzucker", "White Chocolate Drizzle"] },
        { name: "Chocolate Lover", price: 6.7, tone: "choco", art: "croffle",
          desc: ["Nutella", "Erdbeeren", "Bananen", "Puderzucker", "Chocolate Drops"] },
        { name: "Lotus Crunch", price: 6.7, tone: "lotus", art: "croffle",
          desc: ["Lotuscreme", "Lotus Crumble", "White Chocolate Drizzle"] }
      ]
    },
    {
      id: "pancakes",
      label: "Mini Pancakes",
      emoji: "🥞",
      title: "Mini Pancakes",
      kicker: "10 Stück",
      intro: "Fluffige Mini-Pancakes, großzügig getoppt. Zum Teilen gedacht – wird aber selten geteilt.",
      layout: "cards",
      items: [
        { name: "Berry Cloud", price: 6.7, tone: "berry", art: "pancakes",
          desc: ["Erdbeeren", "Heidelbeeren", "weiße & Vollmilchschokolade", "Puderzucker"] },
        { name: "Bueno Bites", price: 6.9, badge: "Fan Favorite", tone: "choco", art: "pancakes",
          desc: ["Haselnusscreme", "Bananen", "Bueno Crunch", "Schoko Drops"] },
        { name: "Cookies & Cream", price: 6.9, tone: "oreo", art: "pancakes",
          desc: ["Oreo Crumble", "weiße & Vollmilchschokolade"] }
      ]
    },
    {
      id: "food",
      label: "Food & Breakfast",
      emoji: "🥑",
      title: "Food & Breakfast",
      kicker: "Herzhaft",
      intro: "Für alle, die es lieber deftig mögen.",
      layout: "list",
      items: [
        { name: "Avo Feta", price: 8.9, badge: "Signature", art: "toast", tagline: "Happiness served on toast.",
          desc: ["cremige Avocado", "Feta", "Kirschtomaten", "Rucola", "Oliven", "Kürbiskerne", "Olivenöl", "Zitrone"] },
        { name: "Chicken Pesto", price: 9.5, art: "toast", tone: "pesto", desc: ["Hähnchenbrust", "Frischkäse", "Pesto", "Cherrytomaten", "Rucola"] }
      ]
    },
    {
      id: "kuchen",
      label: "Kuchen",
      emoji: "🍰",
      title: "Kuchen",
      kicker: "Pro Stück",
      intro: "Täglich frisch. Wenn's weg ist, ist es weg.",
      layout: "list",
      items: [
        { name: "San Sebastian Cheesecake", price: 4.9, badge: "Must-Try",
          desc: ["Topping nach Wahl +1,00 €: Pistachio · Lotus · White Chocolate · Hazelnut · Erdbeersauce"] },
        { name: "Carrot Cake", price: 4.5, desc: [] },
        { name: "Brownie", price: 3.7, desc: [] },
        { name: "Kuchen der Woche", price: 4.5, desc: ["Frag uns an der Theke"] }
      ]
    },
    {
      id: "signature",
      label: "Mina Signature",
      emoji: "☕",
      title: "Mina Signature",
      kicker: "Hot / Iced",
      intro: "Unsere eigenen Kreationen. Heiß oder auf Eis – du entscheidest.",
      layout: "cards",
      items: [
        { name: "Spanish Latte", price: 5.2, badge: "Bestseller", art: "coffee", tone: "spanish", desc: ["hot / iced"] },
        { name: "White Mocha", price: 5.2, art: "coffee", tone: "mocha", tagline: "x vanilla cold foam", desc: ["hot / iced"] },
        { name: "Salted Caramel Latte", price: 5.5, art: "coffee", tone: "caramel", desc: ["hot / iced"] },
        { name: "Lotus Latte", price: 5.5, badge: "Hype", art: "coffee", tone: "lotus", desc: ["hot / iced"] },
        { name: "Pistachio Latte", price: 5.7, art: "coffee", tone: "pistachio", desc: ["hot / iced"] }
      ]
    },
    {
      id: "matcha",
      label: "Matcha",
      emoji: "🍵",
      title: "Matcha",
      kicker: "Hot / Iced",
      intro: "Fresh, fruity & pure. Mit Milch deiner Wahl.",
      layout: "cards",
      items: [
        { name: "Matcha Classic", price: 5.2, art: "matcha", tone: "classic", desc: ["Matcha", "Milch deiner Wahl", "hot / iced"] },
        { name: "Strawberry Matcha", price: 5.5, badge: "Hype", art: "matcha", tone: "berry", desc: ["Matcha", "Milch deiner Wahl", "Erdbeerpüree"] },
        { name: "Mango Matcha", price: 5.5, art: "matcha", tone: "mango", desc: ["Matcha", "Milch deiner Wahl", "Mangopüree"] },
        { name: "Blueberry Coconut Matcha", price: 5.7, art: "matcha", tone: "blueberry", desc: ["Matcha", "Milch deiner Wahl", "hot / iced"] },
        { name: "White Chocolate Raspberry Matcha", price: 5.7, art: "matcha", tone: "raspberry", desc: ["Matcha", "Milch deiner Wahl", "hot / iced"] },
        { name: "White Chocolate Pistachio Matcha", price: 5.7, art: "matcha", tone: "pistachio", desc: ["Matcha", "Milch deiner Wahl", "hot / iced"] }
      ]
    },
    {
      id: "coffee",
      label: "Coffee & Tee",
      emoji: "🫘",
      title: "Coffee & more",
      kicker: "Classics",
      intro: "Sirup +0,50 €: Vanilla · Caramel · Salted Caramel · Hazelnut",
      layout: "list",
      items: [
        { name: "Espresso", price: 2.5, desc: [] },
        { name: "Espresso Doppio", price: 3.5, desc: [] },
        { name: "Americano", price: 4.0, desc: [] },
        { name: "Cappuccino", price: 4.3, desc: [] },
        { name: "Latte Macchiato", price: 4.5, desc: [] },
        { name: "Hot Chocolate", price: 4.7, desc: [] },
        { name: "White Hot Chocolate", price: 4.8, desc: [] },
        { name: "Babyccino", price: 2.2, desc: ["für die Kleinen"] }
      ],
      sub: [
        { title: "Tee", price: 3.7, options: ["Schwarztee", "Grüner Tee", "Pfefferminztee", "Früchtetee"] }
      ]
    },
    {
      id: "smoothies",
      label: "Smoothies",
      emoji: "🥤",
      title: "Smoothies",
      kicker: "Frisch gemixt",
      intro: "Nur Frucht, Haferdrink und gute Laune.",
      layout: "cards",
      items: [
        { name: "Berry Smoothie", price: 5.7, tone: "berry", art: "smoothie",
          desc: ["Erdbeere", "Himbeere", "Heidelbeere", "Banane", "Haferdrink"] },
        { name: "Tropical", price: 5.7, tone: "mango", art: "smoothie",
          desc: ["Mango", "Maracuja", "Banane", "Haferdrink"] },
        { name: "Green Goddess", price: 5.9, badge: "Glow", tone: "pistachio", art: "smoothie",
          desc: ["Avocado", "Banane", "Mango", "Spinat", "Honig", "Haferdrink"] }
      ]
    },
    {
      id: "softdrinks",
      label: "Softdrinks",
      emoji: "🧊",
      title: "Softdrinks",
      kicker: "Eiskalt",
      intro: "",
      layout: "list",
      items: [
        { name: "Wasser", price: 3.2, desc: ["still / sprudel · 0,25 l"] },
        { name: "Wasser", price: 6.9, desc: ["still / sprudel · 0,75 l"] },
        { name: "Fritz Kola", price: 3.9, desc: ["classic / zero · 0,33 l"] },
        { name: "Red Bull", price: 3.9, desc: ["Classic / Zero · White · Heidelbeere · Kaktusfeige"] },
        { name: "Eistee Elephant Bay", price: 3.9, desc: ["Peach (classic / zero) · Watermelon · Cherry · Lemon · Granatapfel"] }
      ]
    }
  ]
};
