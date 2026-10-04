/* Mina Café – Speisekarte (Daten) */
export const menu = {
  categories: [
    {
      id: "bowls",
      label: "Açaí Bowls",
      title: "Açaí Bowls",
      kicker: "Our Signature",
      intro:
        "Cremige Açaí-Basis, kalt serviert, mit frischen Früchten und leckeren Toppings.",
      items: [
        {
          name: "Mina Bowl",
          image: "mina-bowl.jpg",
          price: 9.9,
          badge: "Signature",
          tagline: "Açaí, but make it special.",
          desc: [
            "Açaí",
            "Erdbeeren",
            "Himbeeren",
            "Heidelbeeren",
            "Granola",
            "Pistaziencreme",
          ],
        },
        {
          name: "Tropical Bowl",
          price: 9.9,
          badge: "Sunny",
          desc: [
            "Açaí",
            "Mango & Maracuja Mix",
            "Kokoschips",
            "Granola",
            "White Chocolate Drizzle",
            "Chia-Pudding",
          ],
        },
        {
          name: "Bueno Bowl",
          image: "bueno-bowl.jpg",
          price: 10.9,
          badge: "Fan Favorite",
          desc: [
            "Açaí",
            "Banane",
            "Erdbeeren",
            "Bueno Creme",
            "Schoko Drops",
            "Bueno Crunch",
          ],
        },
        {
          name: "Peanut Butter Bowl",
          price: 10.9,
          badge: "Protein Vibes",
          desc: ["Açaí", "Banane", "Erdbeeren", "Peanut Butter", "Granola"],
        },
      ],
      extras: [
        {
          title: "Creams",
          price: 1,
          options: [
            "Pistaziencreme",
            "Erdnussbutter",
            "Weiße Schokolade",
            "Haselnusscreme",
            "Chia-Pudding",
          ],
        },
        {
          title: "Toppings",
          price: 0.7,
          options: ["Granola", "Kokoschips", "Schoko-Drops", "Bueno Crunch"],
        },
        {
          title: "Obst",
          price: 1,
          options: [
            "Banane",
            "Erdbeeren",
            "Himbeeren",
            "Heidelbeeren",
            "Mango-Maracuja",
          ],
        },
      ],
    },
    {
      id: "coffee",
      label: "Coffee & Tea",
      title: "Coffee & Tea",
      kicker: "Classics",
      intro: "",
      items: [
        {
          name: "Espresso",
          price: 2.5,
          desc: [],
        },
        {
          name: "Espresso Doppio",
          price: 3.5,
          desc: [],
        },
        {
          name: "Americano",
          price: 4,
          desc: [],
        },
        {
          name: "Cappuccino",
          price: 4.3,
          desc: [],
        },
        {
          name: "Latte Macchiato",
          price: 4.5,
          desc: [],
        },
        {
          name: "Hot Chocolate",
          price: 4.7,
          desc: [],
        },
        {
          name: "Babyccino",
          price: 2.2,
          desc: ["für die Kleinen"],
        },
        {
          name: "Tee",
          price: 3.7,
          desc: ["Schwarztee", "Grüner Tee", "Pfefferminztee", "Früchtetee"],
        },
      ],
      note: "Sirup +0,50 €: Vanilla · Caramel · Salted Caramel · Hazelnut",
    },
    {
      id: "signature",
      label: "Mina Signatur",
      title: "Mina Signatur",
      kicker: "Hot / Iced",
      intro: "Mina Favoriten – heiß oder auf Eis. Serviert x Cold Foam.",
      items: [
        {
          name: "Spanish Latte",
          price: 5.2,
          badge: "Bestseller",
          desc: [],
        },
        {
          name: "White Mocha",
          price: 5.2,
          desc: [],
        },
        {
          name: "Salted Caramel Latte",
          price: 5.5,
          desc: [],
        },
        {
          name: "Lotus Latte",
          price: 5.5,
          badge: "Hype",
          desc: [],
        },
        {
          name: "Pistachio Latte",
          price: 5.7,
          desc: [],
        },
        {
          name: "Banana Bread Latte",
          price: 5.5,
          desc: [],
        },
      ],
    },
    {
      id: "matcha",
      label: "Matcha",
      title: "Matcha",
      kicker: "Hot / Iced",
      intro:
        "Classic, fruity oder creamy. Mit Milch deiner Wahl. Heiß oder auf Eis.",
      items: [
        {
          name: "Matcha Classic",
          price: 5.2,
          desc: [],
        },
        {
          name: "Strawberry Matcha",
          price: 5.5,
          badge: "Hype",
          desc: ["Erdbeerpüree"],
        },
        {
          name: "Mango Matcha",
          price: 5.5,
          desc: ["Mangopüree"],
        },
        {
          name: "Blueberry Coconut Matcha",
          price: 5.7,
          desc: [],
        },
        {
          name: "White Chocolate Raspberry Matcha",
          price: 5.7,
          desc: [],
        },
        {
          name: "White Chocolate Pistachio Matcha",
          price: 5.7,
          desc: [],
        },
      ],
    },
    {
      id: "smoothies",
      label: "Smoothies",
      title: "Smoothies",
      kicker: "Frisch gemixt",
      intro: "Pure fruit. Easy mood.",
      items: [
        {
          name: "Berry Smoothie",
          price: 5.5,
          desc: ["Erdbeere", "Himbeere", "Heidelbeere", "Banane", "Haferdrink"],
        },
        {
          name: "Tropical",
          price: 5.5,
          desc: ["Mango", "Maracuja", "Banane", "Haferdrink"],
        },
        {
          name: "Green Goddess",
          price: 5.7,
          badge: "Glow",
          desc: ["Avocado", "Banane", "Mango", "Spinat", "Honig", "Haferdrink"],
        },
      ],
    },
    {
      id: "softdrinks",
      label: "Softdrinks",
      title: "Softdrinks",
      kicker: "Eiskalt",
      intro: "",
      items: [
        {
          name: "Wasser",
          price: 3.2,
          desc: ["still / sprudel · 0,25 l"],
        },
        {
          name: "Fritz Kola",
          price: 3.9,
          desc: ["classic / zero · 0,33 l"],
        },
        {
          name: "Red Bull",
          price: 3.9,
          desc: ["Classic / Zero · White · Heidelbeere · Kaktusfeige"],
        },
        {
          name: "Eistee Elephant Bay",
          price: 3.9,
          desc: [
            "Peach (classic / zero) · Watermelon · Cherry · Lemon · Granatapfel",
          ],
        },
      ],
    },
    {
      id: "croffel",
      label: "Croffel",
      title: "Croffel",
      kicker: "Croissant × Waffel",
      intro: "Außen knusprig, innen soft. Frisch aus dem Waffeleisen.",
      items: [
        {
          name: "Pistachio Dream",
          image: "pistachio-dream.jpg",
          price: 6.9,
          badge: "Hype",
          desc: [
            "Pistaziencreme",
            "gehackte Pistazien",
            "Puderzucker",
            "White Chocolate Drizzle",
          ],
        },
        {
          name: "Chocolate Lover",
          price: 6.7,
          desc: [
            "Nutella",
            "Erdbeeren",
            "Bananen",
            "Puderzucker",
            "Chocolate Drops",
          ],
        },
        {
          name: "Lotus Crunch",
          price: 6.7,
          desc: ["Lotuscreme", "Lotus Crumble", "White Chocolate Drizzle"],
        },
      ],
    },
    {
      id: "pancakes",
      label: "Pancakes",
      title: "Pancakes",
      kicker: "10 Stück",
      intro: "Fluffig, warm und großzügig getoppt.",
      items: [
        {
          name: "Berry Cloud",
          price: 6.7,
          desc: ["Erdbeeren", "Heidelbeeren", "weiße & Vollmilchschokolade"],
        },
        {
          name: "Bueno Bites",
          price: 6.9,
          badge: "Fan Favorite",
          desc: ["Haselnusscreme", "Bananen", "Bueno Crunch", "Schoko Drops"],
        },
        {
          name: "Cookies & Cream",
          price: 6.9,
          desc: ["Oreo Crumble", "weiße & Vollmilchschokolade"],
        },
      ],
    },
    {
      id: "food",
      label: "Bread & Breakfast",
      title: "Bread & Breakfast",
      kicker: "Herzhaft",
      intro: "Für alle, die es lieber herzhaft mögen.",
      items: [
        {
          name: "Avo Feta",
          image: "avo-feta.jpg",
          price: 8.9,
          badge: "Signature",
          tagline: "Happiness served on toast.",
          desc: [
            "cremige Avocado",
            "Feta",
            "Cherrytomaten",
            "Rucola",
            "Kürbiskerne",
            "Olivenöl",
          ],
        },
        {
          name: "Chicken Pesto",
          price: 9.5,
          desc: [
            "Hähnchenbrust",
            "Frischkäse",
            "Pesto",
            "Cherrytomaten",
            "Rucola",
          ],
        },
        {
          name: "Smoked Salmon",
          price: 10.5,
          desc: ["Frischkäse", "Räucherlachs", "Gurke", "Sesam", "Avocado"],
        },
        {
          name: "Burrata Tomato",
          price: 9.5,
          desc: ["Burrata", "Tomaten", "Pesto", "Rucola", "Balsamico"],
        },
      ],
    },
    {
      id: "kuchen",
      label: "Kuchen",
      title: "Kuchen",
      kicker: "Pro Stück",
      intro: "",
      items: [
        {
          name: "San Sebastian Cheesecake",
          price: 4.9,
          badge: "Must-Try",
          desc: [
            "Topping nach Wahl +1,00 €: Pistachio · Lotus · White Chocolate · Hazelnut · Erdbeersauce",
          ],
        },
        {
          name: "Carrot Cake",
          price: 4.5,
          desc: [],
        },
        {
          name: "Brownie",
          price: 3.7,
          desc: [],
        },
        {
          name: "Kuchen der Woche",
          price: 4.5,
          desc: ["Frag uns an der Theke"],
        },
      ],
    },
  ],
};
