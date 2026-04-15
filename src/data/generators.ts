export type Category =
  | "fantasy"
  | "music"
  | "pets"
  | "business"
  | "personal"
  | "teams";

export interface GeneratorConfig {
  slug: string;
  keyword: string;
  title: string;
  subtitle: string;
  category: Category;
  icon: string; // Material Symbol name
  volume: number;
  kd: number;
  seoTitle: string;
  seoDescription: string;
}

export const categories: Record<
  Category,
  { label: string; icon: string; description: string }
> = {
  fantasy: {
    label: "Fantasy & Gaming",
    icon: "swords",
    description:
      "Elf, Viking, Orc, Dragon names and more for your next campaign.",
  },
  music: {
    label: "Music & Entertainment",
    icon: "mic",
    description:
      "Rap, Rock, Stage, and Podcast names to find your creative voice.",
  },
  pets: {
    label: "Pets & Animals",
    icon: "pets",
    description:
      "Unique names for cats, dogs, birds, and even exotic companions.",
  },
  business: {
    label: "Business & Brand",
    icon: "store",
    description:
      "Launch your restaurant, bakery, startup, or creative agency.",
  },
  personal: {
    label: "Personal",
    icon: "person",
    description:
      "Middle names, sibling combinations, and pen names for writers.",
  },
  teams: {
    label: "Teams & Projects",
    icon: "groups",
    description: "Sports teams, coding projects, and squad names for gamers.",
  },
};

export const generators: GeneratorConfig[] = [
  // === FANTASY & GAMING ===
  {
    slug: "elf-name-generator",
    keyword: "elf name generator",
    title: "Elf Name Generator",
    subtitle:
      "Generate elegant, ethereal elven names inspired by Tolkien and Norse mythology.",
    category: "fantasy",
    icon: "auto_awesome",
    volume: 14800,
    kd: 29,
    seoTitle: "Elf Name Generator — Free Elven Names for Fantasy",
    seoDescription:
      "Generate beautiful elf names with meanings. Free smart tool for fantasy writing, D&D, and gaming. Try now!",
  },
  {
    slug: "viking-name-generator",
    keyword: "viking name generator",
    title: "Viking Name Generator",
    subtitle:
      "Generate authentic Norse-inspired names rooted in the sagas and history of Scandinavia.",
    category: "fantasy",
    icon: "shield",
    volume: 3600,
    kd: 7,
    seoTitle: "Viking Name Generator — Free Norse & Scandinavian Names",
    seoDescription:
      "Generate authentic Viking names with meanings from Old Norse tradition. Free and instant. No signup required.",
  },
  {
    slug: "norse-name-generator",
    keyword: "norse name generator",
    title: "Norse Name Generator",
    subtitle:
      "Discover powerful names from ancient Norse mythology and Viking heritage.",
    category: "fantasy",
    icon: "shield",
    volume: 2900,
    kd: 12,
    seoTitle: "Norse Name Generator — Free Old Norse Names with Meanings",
    seoDescription:
      "Find authentic Norse names with historical meanings. Perfect for writing, gaming, or exploring your heritage.",
  },
  {
    slug: "nord-name-generator",
    keyword: "nord name generator",
    title: "Nord Name Generator",
    subtitle:
      "Generate names worthy of the hardy Nordic people and their legendary warriors.",
    category: "fantasy",
    icon: "ac_unit",
    volume: 1900,
    kd: 12,
    seoTitle: "Nord Name Generator — Nordic & Scandinavian Names",
    seoDescription:
      "Generate strong Nord names inspired by Scandinavian culture and Elder Scrolls. Free, instant results.",
  },
  {
    slug: "nordic-name-generator",
    keyword: "nordic name generator",
    title: "Nordic Name Generator",
    subtitle:
      "Find beautiful names from the Nordic countries — strong, melodic, and timeless.",
    category: "fantasy",
    icon: "ac_unit",
    volume: 1300,
    kd: 12,
    seoTitle: "Nordic Name Generator — Scandinavian Names for Free",
    seoDescription:
      "Discover Nordic names from Sweden, Norway, Denmark, and Iceland. Free smart name generator.",
  },
  {
    slug: "medieval-name-generator",
    keyword: "medieval name generator",
    title: "Medieval Name Generator",
    subtitle:
      "Step into the Middle Ages with names from knights, nobles, and common folk.",
    category: "fantasy",
    icon: "castle",
    volume: 3600,
    kd: 25,
    seoTitle: "Medieval Name Generator — Free Middle Ages Names",
    seoDescription:
      "Generate authentic medieval names for characters, writing, and RPG campaigns. Free and instant.",
  },
  {
    slug: "warriors-name-generator",
    keyword: "warriors name generator",
    title: "Warriors Name Generator",
    subtitle:
      "Forge legendary names for warriors, gladiators, and battle-hardened fighters.",
    category: "fantasy",
    icon: "swords",
    volume: 3600,
    kd: 28,
    seoTitle: "Warriors Name Generator — Epic Fighter & Battle Names",
    seoDescription:
      "Generate powerful warrior names for gaming, writing, and RPGs. Free smart tool.",
  },
  {
    slug: "elvish-name-generator",
    keyword: "elvish name generator",
    title: "Elvish Name Generator",
    subtitle:
      "Create beautiful Elvish names in the tradition of Tolkien's Quenya and Sindarin.",
    category: "fantasy",
    icon: "nature",
    volume: 2400,
    kd: 29,
    seoTitle: "Elvish Name Generator — Free Tolkien-Style Elf Names",
    seoDescription:
      "Generate stunning Elvish names inspired by Tolkien's languages. Free, instant, no signup.",
  },
  {
    slug: "name-generator-for-elves",
    keyword: "name generator for elves",
    title: "Elf Name Generator",
    subtitle:
      "The definitive elf name generator — from wood elves to high elves to dark elves.",
    category: "fantasy",
    icon: "forest",
    volume: 4400,
    kd: 19,
    seoTitle: "Name Generator for Elves — High, Wood & Dark Elf Names",
    seoDescription:
      "The best elf name generator for D&D, fantasy writing, and gaming. Generate names for all elf types.",
  },
  {
    slug: "graffiti-name-generator",
    keyword: "graffiti name generator",
    title: "Graffiti Name Generator",
    subtitle:
      "Get your street tag — generate bold graffiti-style names and aliases.",
    category: "fantasy",
    icon: "brush",
    volume: 1300,
    kd: 11,
    seoTitle: "Graffiti Name Generator — Free Street Tag & Alias Names",
    seoDescription:
      "Generate unique graffiti names and street tags. Free, instant, no signup. Find your urban identity.",
  },

  // === MUSIC & ENTERTAINMENT ===
  {
    slug: "rap-name-generator",
    keyword: "rap name generator",
    title: "Rap Name Generator",
    subtitle:
      "Find your rap alias — from old school boom-bap to modern trap vibes.",
    category: "music",
    icon: "mic",
    volume: 8100,
    kd: 12,
    seoTitle: "Rap Name Generator — Free Hip-Hop Name Maker",
    seoDescription:
      "Generate your perfect rap name. Free smart tool. 1000s of hip-hop name ideas. Instant results.",
  },
  {
    slug: "rapper-name-generator",
    keyword: "rapper name generator",
    title: "Rapper Name Generator",
    subtitle:
      "Your stage name matters. Generate rapper names that stick in people's heads.",
    category: "music",
    icon: "music_note",
    volume: 3600,
    kd: 11,
    seoTitle: "Rapper Name Generator — Find Your Hip-Hop Stage Name",
    seoDescription:
      "Need a rapper name? Generate unique hip-hop stage names instantly. Free, no signup.",
  },
  {
    slug: "dj-name-generator",
    keyword: "dj name generator",
    title: "DJ Name Generator",
    subtitle:
      "Drop the perfect DJ name — from EDM to hip-hop to underground techno.",
    category: "music",
    icon: "equalizer",
    volume: 1600,
    kd: 18,
    seoTitle: "DJ Name Generator — Free DJ & Producer Name Ideas",
    seoDescription:
      "Generate cool DJ names for your music career. Free, instant, no signup required.",
  },
  {
    slug: "song-name-generator",
    keyword: "song name generator",
    title: "Song Name Generator",
    subtitle:
      "Stuck on a title? Generate song names that capture the mood and hook listeners.",
    category: "music",
    icon: "library_music",
    volume: 4400,
    kd: 25,
    seoTitle: "Song Name Generator — Free Song Title Ideas",
    seoDescription:
      "Generate creative song names and titles for any genre. Free smart tool. Instant results.",
  },
  {
    slug: "podcast-name-generator",
    keyword: "podcast name generator",
    title: "Podcast Name Generator",
    subtitle:
      "Launch with a name people remember — generate podcast titles that stand out.",
    category: "music",
    icon: "podcasts",
    volume: 4400,
    kd: 25,
    seoTitle: "Podcast Name Generator — Free Show Name Ideas",
    seoDescription:
      "Need a podcast name? Generate creative show titles instantly. Free, no signup. Try now!",
  },
  {
    slug: "artist-name-generator",
    keyword: "artist name generator",
    title: "Artist Name Generator",
    subtitle:
      "Your creative identity starts here — generate artist names for any medium.",
    category: "music",
    icon: "palette",
    volume: 1900,
    kd: 19,
    seoTitle: "Artist Name Generator — Free Creative Alias Ideas",
    seoDescription:
      "Find your artist name. Generate unique creative aliases for painters, musicians, and creators. Free.",
  },

  // === PETS & ANIMALS ===
  {
    slug: "cat-name-generator",
    keyword: "cat name generator",
    title: "Cat Name Generator",
    subtitle:
      "Find the purr-fect name for your new feline friend — from cute to regal.",
    category: "pets",
    icon: "pets",
    volume: 2400,
    kd: 16,
    seoTitle: "Cat Name Generator — Free Kitten & Cat Name Ideas",
    seoDescription:
      "Generate cute, funny, and unique cat names instantly. Free smart tool. Find the perfect name for your kitty.",
  },
  {
    slug: "pet-name-generator",
    keyword: "pet name generator",
    title: "Pet Name Generator",
    subtitle:
      "Every pet deserves a great name — generate names for any animal companion.",
    category: "pets",
    icon: "pets",
    volume: 1600,
    kd: 19,
    seoTitle: "Pet Name Generator — Free Names for Any Pet",
    seoDescription:
      "Generate names for dogs, cats, birds, and more. Free smart pet name generator. Instant results.",
  },
  {
    slug: "puppy-name-generator",
    keyword: "puppy name generator",
    title: "Puppy Name Generator",
    subtitle:
      "Welcome home your new pup with a name as adorable as they are.",
    category: "pets",
    icon: "cruelty_free",
    volume: 1300,
    kd: 26,
    seoTitle: "Puppy Name Generator — Free Dog & Puppy Name Ideas",
    seoDescription:
      "Find the perfect puppy name. Generate cute, strong, and unique dog names instantly. Free.",
  },
  {
    slug: "horse-name-generator",
    keyword: "horse name generator",
    title: "Horse Name Generator",
    subtitle:
      "Generate majestic names for your horse — from gentle giants to wild stallions.",
    category: "pets",
    icon: "directions_run",
    volume: 2900,
    kd: 8,
    seoTitle: "Horse Name Generator — Free Equine Name Ideas",
    seoDescription:
      "Generate beautiful horse names with meanings. Free smart tool. Perfect for horses, ponies, and foals.",
  },

  // === BUSINESS & BRAND ===
  {
    slug: "restaurant-name-generator",
    keyword: "restaurant name generator",
    title: "Restaurant Name Generator",
    subtitle:
      "A great restaurant starts with a great name — generate one that draws people in.",
    category: "business",
    icon: "restaurant",
    volume: 3600,
    kd: 27,
    seoTitle: "Restaurant Name Generator — Free Dining Name Ideas",
    seoDescription:
      "Generate creative restaurant names for any cuisine. Free smart tool. Instant results, no signup.",
  },
  {
    slug: "bakery-name-generator",
    keyword: "bakery name generator",
    title: "Bakery Name Generator",
    subtitle:
      "From sourdough to pastries — find a bakery name as warm as fresh bread.",
    category: "business",
    icon: "bakery_dining",
    volume: 1000,
    kd: 10,
    seoTitle: "Bakery Name Generator — Free Bakery & Café Name Ideas",
    seoDescription:
      "Generate sweet bakery names for your business. Free, instant, no signup. Try now!",
  },
  {
    slug: "cafe-name-generator",
    keyword: "cafe name generator",
    title: "Cafe Name Generator",
    subtitle:
      "Brew up the perfect cafe name — cozy, modern, or artisan.",
    category: "business",
    icon: "coffee",
    volume: 1000,
    kd: 21,
    seoTitle: "Cafe Name Generator — Free Coffee Shop Name Ideas",
    seoDescription:
      "Generate creative cafe and coffee shop names instantly. Free smart tool.",
  },
  {
    slug: "diner-name-generator",
    keyword: "diner name generator",
    title: "Diner Name Generator",
    subtitle:
      "Classic American diner vibes — generate names that feel like home cooking.",
    category: "business",
    icon: "dining",
    volume: 1600,
    kd: 18,
    seoTitle: "Diner Name Generator — Free Restaurant & Diner Names",
    seoDescription:
      "Generate retro diner names for your restaurant. Free, instant, no signup.",
  },
  {
    slug: "farm-name-generator",
    keyword: "farm name generator",
    title: "Farm Name Generator",
    subtitle:
      "From homesteads to ranches — generate farm names rooted in the land.",
    category: "business",
    icon: "agriculture",
    volume: 2900,
    kd: 20,
    seoTitle: "Farm Name Generator — Free Homestead & Ranch Names",
    seoDescription:
      "Generate charming farm, ranch, and homestead names. Free smart tool. Instant results.",
  },
  {
    slug: "boat-name-generator",
    keyword: "boat name generator",
    title: "Boat Name Generator",
    subtitle:
      "Every vessel needs a name — from sailboats to yachts to fishing boats.",
    category: "business",
    icon: "sailing",
    volume: 1900,
    kd: 16,
    seoTitle: "Boat Name Generator — Free Nautical & Vessel Names",
    seoDescription:
      "Generate creative boat names for your vessel. Free, instant, no signup. Find the perfect name.",
  },

  // === PERSONAL ===
  {
    slug: "middle-name-generator",
    keyword: "middle name generator",
    title: "Middle Name Generator",
    subtitle:
      "Find the perfect middle name that flows with any first and last name.",
    category: "personal",
    icon: "badge",
    volume: 6600,
    kd: 22,
    seoTitle: "Middle Name Generator — Free Middle Name Ideas",
    seoDescription:
      "Generate beautiful middle names for any first name. Free smart tool. Instant results.",
  },
  {
    slug: "sibling-name-generator",
    keyword: "sibling name generator",
    title: "Sibling Name Generator",
    subtitle:
      "Find names that sound perfect together — for siblings, twins, or characters.",
    category: "personal",
    icon: "family_restroom",
    volume: 1900,
    kd: 28,
    seoTitle: "Sibling Name Generator — Free Matching Sibling Names",
    seoDescription:
      "Generate sibling name pairs that sound great together. Free, instant, no signup.",
  },
  {
    slug: "email-name-generator",
    keyword: "email name generator",
    title: "Email Name Generator",
    subtitle:
      "Get a professional or creative email address that stands out.",
    category: "personal",
    icon: "mail",
    volume: 1300,
    kd: 23,
    seoTitle: "Email Name Generator — Free Professional Email Ideas",
    seoDescription:
      "Generate creative and professional email address names. Free, instant, no signup.",
  },
  {
    slug: "combine-name-generator",
    keyword: "combine name generator",
    title: "Combine Name Generator",
    subtitle:
      "Merge two names into one — perfect for couples, ships, and brand mashups.",
    category: "personal",
    icon: "merge_type",
    volume: 1000,
    kd: 15,
    seoTitle: "Combine Name Generator — Free Name Merger Tool",
    seoDescription:
      "Combine two names into a unique new name. Free smart tool for couples and brands.",
  },

  // === TEAMS & PROJECTS ===
  {
    slug: "team-name-generator",
    keyword: "team name generator",
    title: "Team Name Generator",
    subtitle:
      "Build team spirit with a name that fires everyone up — sports, work, or gaming.",
    category: "teams",
    icon: "groups",
    volume: 8100,
    kd: 28,
    seoTitle: "Team Name Generator — Free Sports & Group Name Ideas",
    seoDescription:
      "Generate creative team names for sports, work, and gaming. Free smart tool. Instant results.",
  },
  {
    slug: "team-name-generator-using-keywords",
    keyword: "team name generator using keywords",
    title: "Team Name Generator Using Keywords",
    subtitle:
      "Enter your keywords and get team names tailored to your group's identity.",
    category: "teams",
    icon: "key",
    volume: 1000,
    kd: 16,
    seoTitle: "Team Name Generator Using Keywords — Custom Team Names",
    seoDescription:
      "Generate custom team names from your own keywords. Free smart tool. Try now!",
  },
  {
    slug: "project-name-generator",
    keyword: "project name generator",
    title: "Project Name Generator",
    subtitle:
      "Give your project a name that inspires — from code names to campaign titles.",
    category: "teams",
    icon: "rocket_launch",
    volume: 1000,
    kd: 16,
    seoTitle: "Project Name Generator — Free Code & Campaign Names",
    seoDescription:
      "Generate creative project names for work, coding, or campaigns. Free, instant, no signup.",
  },
];

export const generatorsByCategory = (cat: Category) =>
  generators.filter((g) => g.category === cat);

export const getGeneratorBySlug = (slug: string) =>
  generators.find((g) => g.slug === slug);

export const getRelatedGenerators = (slug: string, count = 4) => {
  const current = getGeneratorBySlug(slug);
  if (!current) return [];
  const same = generators.filter(
    (g) => g.category === current.category && g.slug !== slug
  );
  const others = generators.filter(
    (g) => g.category !== current.category && g.slug !== slug
  );
  return [...same, ...others].slice(0, count);
};
