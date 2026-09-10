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
      items: [
        { name: "Mina Bowl", image: "mina-bowl.jpg", price: 10.9, badge: "Signature", tagline: "Açaí, but make it special.",
          desc: ["Açaí", "Erdbeeren", "Himbeeren", "Heidelbeeren", "Granola", "Pistaziencreme"] },
        { name: "Tropical Bowl", price: 10.9, badge: "Sunny",
          desc: ["Açaí", "Mango & Maracuja Mix", "Kokoschips", "Granola", "White Chocolate Drizzle"] },
        { name: "Bueno Bowl", image: "bueno-bowl.jpg", price: 11.9, badge: "Fan Favorite",
          desc: ["Açaí", "Banane", "Erdbeeren", "Bueno Creme", "Schoko Drops", "Bueno Crunch"] },
        { name: "Peanut Butter Bowl", price: 11.9, badge: "Protein Vibes",
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
      items: [
        { name: "Pistachio Dream", image: "pistachio-dream.jpg", price: 6.9, badge: "Hype",
          desc: ["Pistaziencreme", "gehackte Pistazien", "Puderzucker", "White Chocolate Drizzle"] },
        { name: "Chocolate Lover", price: 6.7,
          desc: ["Nutella", "Erdbeeren", "Bananen", "Puderzucker", "Chocolate Drops"] },
        { name: "Lotus Crunch", price: 6.7,
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
      items: [
        { name: "Berry Cloud", price: 6.7,
          desc: ["Erdbeeren", "Heidelbeeren", "weiße & Vollmilchschokolade", "Puderzucker"] },
        { name: "Bueno Bites", price: 6.9, badge: "Fan Favorite",
          desc: ["Haselnusscreme", "Bananen", "Bueno Crunch", "Schoko Drops"] },
        { name: "Cookies & Cream", price: 6.9,
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
      items: [
        { name: "Avo Feta", image: "avo-feta.jpg", price: 8.9, badge: "Signature", tagline: "Happiness served on toast.",
          desc: ["cremige Avocado", "Feta", "Kirschtomaten", "Rucola", "Oliven", "Kürbiskerne", "Olivenöl", "Zitrone"] },
        { name: "Chicken Pesto", price: 9.5, desc: ["Hähnchenbrust", "Frischkäse", "Pesto", "Cherrytomaten", "Rucola"] }
      ]
    },
    {
      id: "kuchen",
      label: "Kuchen",
      emoji: "🍰",
      title: "Kuchen",
      kicker: "Pro Stück",
      intro: "Täglich frisch. Wenn's weg ist, ist es weg.",
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
      items: [
        { name: "Spanish Latte", price: 5.2, badge: "Bestseller", desc: [] },
        { name: "White Mocha", price: 5.2, desc: ["x vanilla cold foam"] },
        { name: "Salted Caramel Latte", price: 5.5, desc: [] },
        { name: "Lotus Latte", price: 5.5, badge: "Hype", desc: [] },
        { name: "Pistachio Latte", price: 5.7, desc: [] }
      ]
    },
    {
      id: "matcha",
      label: "Matcha",
      emoji: "🍵",
      title: "Matcha",
      kicker: "Hot / Iced",
      intro: "Fresh, fruity & pure. Mit Milch deiner Wahl – heiß oder auf Eis.",
      items: [
        { name: "Matcha Classic", price: 5.2, desc: [] },
        { name: "Strawberry Matcha", price: 5.5, badge: "Hype", desc: ["Erdbeerpüree"] },
        { name: "Mango Matcha", price: 5.5, desc: ["Mangopüree"] },
        { name: "Blueberry Coconut Matcha", price: 5.7, desc: [] },
        { name: "White Chocolate Raspberry Matcha", price: 5.7, desc: [] },
        { name: "White Chocolate Pistachio Matcha", price: 5.7, desc: [] }
      ]
    },
    {
      id: "coffee",
      label: "Coffee & Tee",
      emoji: "🫘",
      title: "Coffee & more",
      kicker: "Classics",
      intro: "Sirup +0,50 €: Vanilla · Caramel · Salted Caramel · Hazelnut",
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
      items: [
        { name: "Berry Smoothie", price: 5.7,
          desc: ["Erdbeere", "Himbeere", "Heidelbeere", "Banane", "Haferdrink"] },
        { name: "Tropical", price: 5.7,
          desc: ["Mango", "Maracuja", "Banane", "Haferdrink"] },
        { name: "Green Goddess", price: 5.9, badge: "Glow",
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
