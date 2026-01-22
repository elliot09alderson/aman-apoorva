export interface Ritual {
  id: string;
  title: string;
  hindiTitle: string;
  date: string;
  time: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  icon: string;
  gallery: string[];
}

export const rituals: Ritual[] = [
  {
    id: "mehndi",
    title: "Mehndi",
    hindiTitle: "मेहंदी",
    date: "February 3rd, 2026",
    time: "11:00 AM (Durg)",
    description: "Adorning hands with intricate henna designs, love, and laughter.",
    longDescription: "The Mehndi ceremony is a beautiful pre-wedding ritual where the bride's hands and feet are decorated with intricate henna patterns. This celebration is filled with music, dance, and joy as family and friends come together to bless the bride.",
    image: "/images/events/mehndi.jpg",
    color: "from-green-500 to-emerald-600",
    icon: "🌿",
    gallery: [
      "https://images.unsplash.com/photo-1547407555-5203f56ce242?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600205615915-e1fbe41e6192?q=80&w=2070&auto=format&fit=crop",
    ]
  },
  {
    id: "sangeet",
    title: "Sangeet",
    hindiTitle: "संगीत",
    date: "February 4th, 2026",
    time: "7:00 PM onwards",
    description: "A night of musical melodies, dance, and celebration.",
    longDescription: "The Sangeet night is an evening of music, dance performances, and entertainment. Both families showcase their talent through choreographed dances, and it's a night full of laughter, joy, and unforgettable memories.",
    image: "/images/events/sangeet.jpg",
    color: "from-purple-500 to-pink-600",
    icon: "🎶",
    gallery: [
      "https://images.unsplash.com/photo-1536750325493-4a0e3863412a?q=80&w=2066&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    ]
  },
  {
    id: "haldi",
    title: "Haldi",
    hindiTitle: "हल्दी",
    date: "February 4th, 2026",
    time: "9:00 AM onwards",
    description: "The golden glow of turmeric and sacred blessings.",
    longDescription: "The Haldi ceremony involves applying a paste of turmeric, sandalwood, and rose water to the bride and groom's face, hands, and feet. This ritual is believed to bless the couple with good luck and ward off evil spirits.",
    image: "/images/events/haldi.jpg",
    color: "from-yellow-400 to-amber-500",
    icon: "✨",
    gallery: [
      "https://images.unsplash.com/photo-1627993073723-5e921d129712?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605211913168-98442aeef4ba?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611170488952-9f9b2bc30389?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619451683482-b486cb9e6b46?q=80&w=2069&auto=format&fit=crop",
    ]
  },
  {
    id: "matrika-poojan",
    title: "Matrika Poojan",
    hindiTitle: "मातृका पूजन",
    date: "February 4th, 2026",
    time: "6:00 AM",
    description: "Sacred worship of the divine mother goddesses.",
    longDescription: "Matrika Poojan is a sacred ritual where the divine mother goddesses are worshipped to seek their blessings for the bride and groom. This ceremony invokes the protective energy of the Matrikas to bless the couple's new journey.",
    image: "/images/events/matrika.jpg",
    color: "from-red-500 to-rose-600",
    icon: "🙏",
    gallery: [
      "https://images.unsplash.com/photo-1609619385076-36a873425636?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605211913168-98442aeef4ba?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617789119189-4f28da4c988c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609151162236-ac5e0e0a2e6e?q=80&w=2071&auto=format&fit=crop",
    ]
  },
  {
    id: "barat",
    title: "Barat",
    hindiTitle: "बारात",
    date: "February 5th, 2026",
    time: "3:00 PM",
    description: "The grand royal procession of the groom.",
    longDescription: "The Barat is the groom's wedding procession to the bride's venue. Accompanied by family, friends, a band, and often a decorated horse or car, the groom makes a grand entrance amidst dancing and celebrations.",
    image: "/images/events/barat.jpg",
    color: "from-red-500 to-rose-600",
    icon: "🐴",
    gallery: [
      "https://images.unsplash.com/photo-1605211913168-98442aeef4ba?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617789119189-4f28da4c988c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609151162236-ac5e0e0a2e6e?q=80&w=2071&auto=format&fit=crop",
    ]
  },
  {
    id: "kanyadan",
    title: "Kanyadan",
    hindiTitle: "कन्यादान",
    date: "February 5th, 2026",
    time: "9:00 PM",
    description: "The sacred giving away of the bride.",
    longDescription: "Kanyadan is one of the most significant rituals where the bride's father gives his daughter's hand to the groom. It symbolizes the entrusting of the bride to her new family and is considered one of the greatest gifts a parent can give.",
    image: "/images/events/kanyadan.jpg",
    color: "from-orange-500 to-amber-600",
    icon: "🙌",
    gallery: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600205615915-e1fbe41e6192?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609619385076-36a873425636?q=80&w=2070&auto=format&fit=crop",
    ]
  },
  {
    id: "vidai",
    title: "Vidai",
    hindiTitle: "विदाई",
    date: "February 5th, 2026",
    time: "5:00 AM",
    description: "A tearful yet beautiful farewell.",
    longDescription: "Vidai is the emotional farewell of the bride from her parental home. It's a touching moment where the bride throws rice over her head as a blessing for her family's prosperity, marking the beginning of her new journey.",
    image: "/images/events/bidai.jpg",
    color: "from-pink-500 to-rose-500",
    icon: "💐",
    gallery: [
      "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    ]
  },
  {
    id: "grih-pravesh",
    title: "Grih Pravesh",
    hindiTitle: "गृह प्रवेश",
    date: "February 6th, 2026",
    time: "10:00 AM",
    description: "The bride's first steps into her new home.",
    longDescription: "Grih Pravesh marks the bride's ceremonial entry into her new home. She is welcomed by her mother-in-law and performs rituals like kicking a pot of rice and dipping her feet in kumkum to leave auspicious footprints.",
    image: "/images/events/grih-pravesh.jpg",
    color: "from-teal-500 to-emerald-600",
    icon: "🏠",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609619385076-36a873425636?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600205615915-e1fbe41e6192?q=80&w=2070&auto=format&fit=crop",
    ]
  },
];
