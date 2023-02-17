let shopItemsData = [
  // Bulgarian
  // Appetizer
  {
    id: "bga",
    name: "Banica",
    price: 3,
    desc: "Pastry dish prepared by whisked eggs, natural yogurt and pieces of white brined cheese.",
    img: "images/bulgarian-food/appetizer_banica.jpg",
  },
  {
    id: "bgb",
    name: "Snejanka",
    price: 3,
    desc: "Traditional Bulgarian salad, which is made of strained yogurt, cucumber, garlic, salt, cooking oil, and dill.",
    img: "images/bulgarian-food/appetizer_snejanka.jpg",
  },
  {
    id: "bgc",
    name: "Shopska Salata",
    price: 4,
    desc: "Typical Bulgarian salad. The main ingredients are tomatoes, cucumbers, onions, peppers, and sirene.",
    img: "images/bulgarian-food/appetizer_shopska.jpg",
  },
  // Main Course
  {
    id: "bgd",
    name: "Palneni Chushki",
    price: 6,
    desc: "Stuffed peppers  filled with kaima, vegetables, cheese, rice and sauce.",
    img: "images/bulgarian-food/main-course_chushki.JPG",
  },
  {
    id: "bge",
    name: "Bob",
    price: 6,
    desc: "Type of Bulgarian soup with beans, paprika, onions and spices.",
    img: "images/bulgarian-food/main-course_bob.jpg",
  },
  {
    id: "bgf",
    name: "Musaka",
    price: 8,
    desc: "This is a Bulgarian variant of moussaka, with potatoes, onion, carrots, meat and eggs.",
    img: "images/bulgarian-food/main-course_musaka.JPG",
  },
  // Dessert
  {
    id: "bgg",
    name: "Kiselo Mlqko",
    price: 4,
    desc: "Traditional Bulgarian yoghurt with sugar and blueberries.",
    img: "images/bulgarian-food/dessert_kiselo.jpg",
  },
  {
    id: "bgh",
    name: "Mekici",
    price: 3,
    desc: "Fried dish, made of kneaded dough with yogurt, eggs, a leavening agent, water, salt, and oil.",
    img: "images/bulgarian-food/dessert_mekici.jpg",
  },
  {
    id: "bgi",
    name: "Biskvitena Torta",
    price: 4,
    desc: "Dessert with a mixture of malted milk, sugar, flour, eggs and biscuits.",
    img: "images/bulgarian-food/dessert_biskvitena.jpg",
  },
  // Drinks
  {
    id: "bgj",
    name: "Tarator",
    price: 3,
    desc: "Balkan drink with yoghurt, salt, garlic, cucumber and sliced walnuts.",
    img: "images/bulgarian-food/drinks_tarator.jpg",
  },
  {
    id: "bgk",
    name: "Boza",
    price: 2,
    desc: "It is is a fermented beverage with wheat or millet.",
    img: "images/bulgarian-food/drinks_boza.jpg",
  },
  {
    id: "bgl",
    name: "Rakia",
    price: 4,
    desc: "Rakia is  the collective term for fruit spirits (or fruit brandy) popular in the Balkans. The alcohol content is normally 40%.",
    img: "images/bulgarian-food/drinks_rakia.jpg",
  },
  // Brazilian
  // Appetizer
  {
    id: "bra",
    name: "Pastel frito",
    price: 4,
    desc: "Pastel is a fast-food dish consisting of a crispy and fried pie, filled with meat, mozzarella, chicken or cream cheese.",
    img: "images/brazilian-food/appetizer_pastel-frito.png",
  },
  {
    id: "brb",
    name: "Pão de queijo",
    price: 4,
    desc: "Pão de queijo is a small and round cheese bread. It is made of manioc starch, milk, eggs and cheese.",
    img: "images/brazilian-food/appetizer_pao-de-queijo.png",
  },
  {
    id: "brc",
    name: "Coxinha",
    price: 4,
    desc: "Coxinha consists of chicken meat, cream cheese and onion. It's then covered in dough, molded into an oval shape, and fried.",
    img: "images/brazilian-food/appetizer_coxinha.png",
  },
  // Main Course
  {
    id: "brd",
    name: "Feijão tropeiro",
    price: 20,
    desc: "It is a popular dish specially in the southeastern part of Brazil. It is made of beans, manioc flour, dried meat, and bacon..",
    img: "images/brazilian-food/main-course_feijao-tropeiro.png",
  },
  {
    id: "bre",
    name: "Arroz de carreteiro",
    price: 20,
    desc: "Arroz carreteiro is a typical southern dish made with beef and white rice.",
    img: "images/brazilian-food/main-course_arroz-de-carreteiro.png",
  },
  {
    id: "brf",
    name: "Baião de dois",
    price: 20,
    desc: "It is made of rice and black-eyed peas, baião de dois is also made of pork, curd cheese, bacon, onions, garlic, and oil.",
    img: "images/brazilian-food/main-course_baiao-de-dois.png",
  },
  // Dessert
  {
    id: "brg",
    name: "Brigadeiro",
    price: 4,
    desc: "Brigadeiro is made of sweetened condensed milk, butter and cocoa powder. The ingredients  rolled in chocolate sprinkles.",
    img: "images/brazilian-food/dessert_brigadeiro.jpg",
  },
  {
    id: "brh",
    name: "Romeo and juliet",
    price: 4,
    desc: "Romeo and Juliet consists of Goiabada (a conserve made of red guavas and sugar) and cheese slices on the top.",
    img: "images/brazilian-food/dessert_romeo-and-juliet.png",
  },
  {
    id: "bri",
    name: "Açaí in the bowl",
    price: 5,
    desc: "It is made with the frozen and mashed fruit of the açaí palm. It is served as a smoothie in a bowl, topped with granola and banana.",
    img: "images/brazilian-food/dessert_acai-in-the-bowl.png",
  },
  // Drinks
  {
    id: "brj",
    name: "Acerola Juice ",
    price: 4,
    desc: "The fruit pulp of acerola is notable for its exceptional content of vitamin C.",
    img: "images/brazilian-food/drinks_acerola-juice.png",
  },
  {
    id: "brk",
    name: "Sugarcane juice ",
    price: 4,
    desc: "This is the liquid extracted from pressed sugarcane.",
    img: "images/brazilian-food/drinks_sugarcane-juice.png",
  },
  {
    id: "brl",
    name: "Caipirinha ",
    price: 4,
    desc: "Caipirinha is the most known Brazilian cocktail. It's made of sucar cane alcohol, pressed limes and sugar.",
    img: "images/brazilian-food/drinks_caipirinha.png",
  },
  // Turkish
  // Appetizer
  {
      id: "kra",
      name: "Sarma",
      price: 6,
      desc: "Grape leaves filled with rice, minced meat (optional), mint, onion and tomato.",
      img: "images/turkish-food/appetizer_sarma.jpg",
    },
    {
      id: "krb",
      name: "Sigara böregi",
      price: 6,
      desc: "Pastry leaves filled with white cheese. Fried in oil.",
      img: "images/turkish-food/appetizer_sigara-boeregi.jpg",
    },
    {
      id: "krc",
      name: "Acili ezme",
      price: 6,
      desc: "Spicy dip consisting of tomato, pointed pepper, parsley, onion, garlic, olive oil and various spices.",
      img: "images/turkish-food/appetizer_acili-ezme.jpg",
    },
    // Main Course
    {
      id: "krd",
      name: "Adana Kebap",
      price: 18,
      desc: "Minced meat skewer made from lamb. Served with bulgur, bread and salad.",
      img: "images/turkish-food/main-course_adana-kebap.jpg",
    },
    {
      id: "kre",
      name: "Manti",
      price: 16,
      desc: "Dumplings filled with minced meat. Served with garlic-yogurt and a melted butter-pepper paste mixture on top.",
      img: "images/turkish-food/main-course_manti.jpg",
    },
    {
      id: "krf",
      name: "İmam bayildi",
      price: 15,
      desc: "Baked Eggplant filled with onion, pepper, tomato, garlic and various spices.",
      img: "images/turkish-food/main-course_imam_bayildi.jpg",
    },
    // Desserts
    {
      id: "krg",
      name: "Künefe",
      price: 5,
      desc: "Pastry Threads with a mozzarella filling. Poured over with sugar syrup and served with pistachio pieces on top.",
      img: "images/turkish-food/dessert_kuenefe.jpg",
    },
    {
      id: "krh",
      name: "Baklava",
      price: 6,
      desc: "Filo pastry filled with chopped pistachio and soaked in honey-sugar syrup.",
      img: "images/turkish-food/dessert_baklava.jpg",
    },
    {
      id: "kri",
      name: "Lokum",
      price: 4,
      desc: "Gummy-like dessert made with cornstarch, sugar, oil and rose water.",
      img: "images/turkish-food/dessert_lokum.jpg",
    },
    // Drinks
    {
      id: "krj",
      name: "Cay",
      price: 2,
      desc: "Black tea served in a traditional turkish tea glass. Tip: Try it with Baklava!",
      img: "images/turkish-food/drinks_cay.jpg",
    },
    {
      id: "krk",
      name: "Ayran",
      price: 4,
      desc: "Yogurt drink mixed with water and salt.",
      img: "images/turkish-food/drinks_ayran.jpg",
    },
    {
      id: "krl",
      name: "Salgam suyu",
      price: 4,
      desc: "Spicy and salty drink made out of violet carrot, turnip, spicy pepperoni and wheat groats.",
      img: "images/turkish-food/drinks_salgam-suyu.jpg",
    },
];
