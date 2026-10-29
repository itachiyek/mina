/* Mina Café – Speisekarte, Stand aktualisierte Karte */
export const menu = {
  categories: [
    {
      id: "coffee", label: "Coffee & more", title: "Coffee & more", kicker: "Classics",
      intro: "",
      items: [
        { name: "Espresso", price: 2.5, desc: [] },
        { name: "Espresso Doppio", price: 3.5, desc: [] },
        { name: "Americano", price: 4, desc: [] },
        { name: "Cappuccino", price: 4.3, desc: [] },
        { name: "Latte Macchiato", price: 4.5, desc: [] },
        { name: "Hot Chocolate", price: 4.7, desc: [] },
        { name: "Hot White Chocolate", price: 4.7, desc: [] },
        { name: "Babyccino", price: 2.2, desc: [] },
        { name: "Tee", price: 3.5, desc: ["Schwarztee", "Grüner Tee", "Pfefferminztee", "Früchtetee"] },
      ],
      note: "Sirup +0,60 €: Vanilla · Caramel · Salted Caramel · Hazelnut",
    },
    {
      id: "signature", label: "Mina Signatur", title: "Mina Signatur", kicker: "Hot / Iced",
      intro: "Mina Favoriten – heiß oder auf Eis.",
      items: [
        { name: "Spanish Latte", price: 5.2, badge: "Bestseller", desc: [] },
        { name: "White Mocha", price: 5.2, desc: [] },
        { name: "Salted Caramel Latte", price: 5.5, desc: [] },
        { name: "Lotus Latte", price: 5.5, badge: "Hype", desc: [] },
        { name: "Pistachio Latte", price: 5.7, desc: [] },
      ],
    },
    {
      id: "matcha", label: "Matcha", title: "Matcha", kicker: "Classic & Fruity",
      intro: "Classic, fruity oder creamy.",
      items: [
        { name: "Matcha Classic", price: 5.2, desc: ["heiß / auf Eis"] },
        { name: "Strawberry Matcha", price: 5.5, badge: "Hype", desc: [] },
        { name: "Mango Matcha", price: 5.5, desc: [] },
        { name: "Blueberry Coconut Matcha", price: 5.7, desc: [] },
        { name: "White Chocolate Raspberry Matcha", price: 5.7, desc: [] },
        { name: "White Chocolate Pistachio Matcha", price: 5.7, desc: [] },
      ],
    },
    {
      id: "softdrinks", label: "Softdrinks", title: "Softdrinks", kicker: "Eiskalt",
      intro: "",
      items: [
        { name: "Wasser Aqua Morelli", price: 3.2, desc: ["still / sprudel · 0,25 l"] },
        { name: "Red Bull", price: 3.9, desc: ["Classic / Zero", "White", "Heidelbeere", "Kaktusfeige"] },
        { name: "Eistee Elephant Bay", price: 3.9, desc: ["Peach (classic / zero)", "Watermelon", "Cherry", "Lemon"] },
      ],
    },
    {
      id: "smoothies", label: "Smoothies", title: "Smoothies", kicker: "Frisch gemixt",
      intro: "Pure fruit. Easy mood.",
      items: [
        { name: "Berry Smoothie", price: 5.7, desc: ["Erdbeere", "Himbeere", "Heidelbeere", "Banane", "Haferdrink"] },
        { name: "Tropical", price: 5.7, desc: ["Mango", "Maracuja", "Banane", "Haferdrink"] },
        { name: "Green Goddess", price: 5.9, badge: "Glow", desc: ["Avocado", "Banane", "Mango", "Spinat", "Honig", "Haferdrink"] },
      ],
    },
    {
      id: "bowls", label: "Açaí Bowls", title: "Açaí Bowls", kicker: "Our Signature",
      intro: "Cremige Açaí-Basis, kalt serviert, mit frischen Früchten und leckeren Toppings.",
      pricingLabel: "Alle Bowls",
      pricing: [{ label: "M", price: 7.5 }, { label: "L", price: 9.5 }],
      items: [
        { name: "Mina Bowl", badge: "Signature", desc: ["Açaí", "Erdbeeren", "Himbeeren", "Heidelbeeren", "Granola", "Pistaziencreme"] },
        { name: "Tropical Bowl", badge: "Sunny", desc: ["Açaí", "Mango & Maracuja Mix", "Kokoschips", "Granola", "White Chocolate Drizzle"] },
        { name: "Bueno Bowl", badge: "Fan Favorite", desc: ["Açaí", "Banane", "Erdbeeren", "Bueno Creme", "Schoko Drops", "Bueno Crunch"] },
        { name: "Peanut Butter Bowl", badge: "Protein Vibes", desc: ["Açaí", "Banane", "Erdbeeren", "Peanut Butter", "Granola", "Chocolate Drizzle"] },
        { name: "Dubai Bowl", desc: ["Açaí", "Banane", "Erdbeeren", "Pistazien", "Granola", "Pistaziencreme", "Kadayif"] },
      ],
      extras: [{ title: "Extra Zutat", price: 0.5, options: ["Chiapudding"] }],
    },
    {
      id: "croffel", label: "Croffel", title: "Croffel", kicker: "Croissant × Waffel",
      intro: "Außen knusprig, innen soft. Frisch aus dem Waffeleisen.",
      items: [
        { name: "Pistachio Dream", price: 8.9, badge: "Hype", desc: ["Pistaziencreme", "gehackte Pistazien", "Puderzucker", "White Chocolate Drizzle"] },
        { name: "Chocolate Lover", price: 8.7, desc: ["Nutella", "Erdbeeren", "Bananen", "Puderzucker", "Chocolate Drops"] },
        { name: "Lotus Crunch", price: 8.9, desc: ["Lotuscreme", "Lotus Crumble", "White Chocolate Drizzle"] },
      ],
    },
    {
      id: "food", label: "Bread & Breakfast", title: "Bread & Breakfast", kicker: "Herzhaft",
      intro: "Für alle, die es lieber herzhaft mögen.",
      items: [
        { name: "Avocado Feta", price: 8.9, badge: "Signature", desc: ["Avocadocreme", "Feta", "Cherrytomaten", "Sesam", "Kräuter"] },
        { name: "Smoked Salmon", price: 10.5, desc: ["Frischkäse", "Räucherlachs", "Rucola", "Sesam", "Avocado"] },
        { name: "Burrata Tomato", price: 9.5, desc: ["Burrata", "Tomaten", "Pesto", "Rucola", "Balsamico"] },
        { name: "Chicken Pesto", price: 9.5, desc: ["Hähnchenbrust", "Frischkäse", "Pesto", "Cherrytomaten", "Rucola", "Parmesan"] },
      ],
    },
    {
      id: "breakfast", label: "Breakfast Special", title: "Breakfast Special", kicker: "Frühstück",
      intro: "",
      pricing: [{ label: "1 Platte + 1 Getränk deiner Wahl", price: 13.5 }],
      items: [
        { name: "Labneh Orient Platte", desc: ["Labneh", "Hummus", "gekochtes Ei", "Zupfkäse", "Oliven", "Gurken & Cherrytomaten", "Za'atar", "Honig"] },
        { name: "Cheese Platte", desc: ["Putenschinken", "Gouda", "Brie", "Marmelade", "Honig", "Erdbeeren", "Trauben"] },
      ],
    },
    {
      id: "kuchen", label: "Kuchen", title: "Kuchen", kicker: "Pro Stück",
      intro: "",
      items: [
        { name: "San Sebastian Käsekuchen", price: 4.9, badge: "Must-Try", desc: ["Topping nach Wahl: Pistachio · Lotus · White Chocolate · Buenocreme"] },
        { name: "Carrot Cake", price: 4.5, desc: [] },
        { name: "Schokoladenkuchen", price: 4.5, desc: [] },
        { name: "Lemon Blueberry Cake", price: 4.5, desc: [] },
        { name: "Kuchen des Monats", price: 4.5, desc: [] },
      ],
    },
  ],
};
