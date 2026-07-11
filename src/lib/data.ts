export type PackageCategory =
  | "gujarat"
  | "pan-india"
  | "international"
  | "pilgrimage";

export interface TravelPackage {
  slug: string;
  title: string;
  location: string;
  category: PackageCategory;
  duration: string;
  priceFrom: number;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export const categoryLabels: Record<PackageCategory, string> = {
  gujarat: "Gujarat & Kutch",
  "pan-india": "Pan-India",
  international: "International",
  pilgrimage: "Pilgrimage & Yatra",
};

export const packages: TravelPackage[] = [
  {
    slug: "rann-of-kutch-white-desert",
    title: "Rann of Kutch: White Desert Escape",
    location: "Kutch, Gujarat",
    category: "gujarat",
    duration: "4 Days / 3 Nights",
    priceFrom: 18500,
    image:
      "https://images.unsplash.com/photo-1628265512314-a9464859fe0c?auto=format&fit=crop&w=1600&q=80",
    tagline: "Moonlit salt flats, folk music, and desert luxury under the stars.",
    description:
      "Experience the surreal white expanse of the Great Rann during Rann Utsav, stay in a premium tent resort, and explore Bhuj's handicraft villages with a private guide.",
    highlights: [
      "Full moon night at the White Rann",
      "Luxury Swiss tent stay with private bonfire",
      "Kutch handicraft village tour (Bhujodi, Nirona)",
      "Traditional Kutchi thali dinner with folk performance",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Bhuj", description: "Airport pickup, check-in at desert resort, evening cultural welcome." },
      { day: "Day 2", title: "White Rann & Kalo Dungar", description: "Sunset at the salt desert, visit Black Hill viewpoint and India Bridge." },
      { day: "Day 3", title: "Craft Villages", description: "Explore Nirona (Rogan art), Bhujodi weaving, and local markets." },
      { day: "Day 4", title: "Departure", description: "Leisure morning, transfer to Bhuj airport/railway station." },
    ],
    inclusions: ["3 nights tent/resort stay", "All meals (breakfast, lunch, dinner)", "AC vehicle for sightseeing", "English/Hindi/Gujarati speaking guide"],
    exclusions: ["Airfare / train fare", "Camel & jeep safari (optional add-on)", "Personal expenses and tips"],
    featured: true,
  },
  {
    slug: "statue-of-unity-heritage-trail",
    title: "Statue of Unity & Heritage Trail",
    location: "Kevadia & Vadodara, Gujarat",
    category: "gujarat",
    duration: "3 Days / 2 Nights",
    priceFrom: 12500,
    image:
      "https://images.unsplash.com/photo-1678038737507-91ac7e9f7843?auto=format&fit=crop&w=1600&q=80",
    tagline: "The world's tallest statue, riverside gardens, and royal Vadodara.",
    description:
      "A comfortable family-friendly circuit covering the Statue of Unity, Sardar Sarovar Dam viewpoint, jungle safari at Kevadia, and Vadodara's Laxmi Vilas Palace.",
    highlights: [
      "Statue of Unity viewing gallery entry",
      "Valley of Flowers & Cactus Garden",
      "Kevadia jungle safari",
      "Laxmi Vilas Palace, Vadodara",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Kevadia", description: "Check-in, evening Sardar Sarovar Dam light show." },
      { day: "Day 2", title: "Statue of Unity", description: "Full day at Statue of Unity complex, viewing gallery, gardens, safari." },
      { day: "Day 3", title: "Vadodara & Departure", description: "Laxmi Vilas Palace visit, transfer to Vadodara airport/station." },
    ],
    inclusions: ["2 nights hotel stay", "Breakfast & dinner", "Statue of Unity entry tickets", "AC vehicle throughout"],
    exclusions: ["Lunch", "Jungle safari jeep charges", "Anything not mentioned in inclusions"],
    featured: true,
  },
  {
    slug: "gir-forest-wildlife-safari",
    title: "Gir Forest Lion Safari",
    location: "Sasan Gir, Gujarat",
    category: "gujarat",
    duration: "3 Days / 2 Nights",
    priceFrom: 15900,
    image:
      "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=1600&q=80",
    tagline: "Track the last wild Asiatic lions in their native forest home.",
    description:
      "Two guided jeep safaris through Gir National Park, a jungle-facing resort stay, and a visit to the Maldharis' traditional settlements.",
    highlights: [
      "2 jungle safaris with naturalist guide",
      "Jungle-view resort accommodation",
      "Devalia Safari Park (interpretation zone)",
      "Somnath day-trip add-on available",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Sasan Gir", description: "Check-in, evening nature walk and briefing." },
      { day: "Day 2", title: "Safari Day", description: "Early morning and evening jeep safaris inside the core zone." },
      { day: "Day 3", title: "Departure", description: "Morning safari (optional), transfer to Rajkot/Diu." },
    ],
    inclusions: ["2 nights resort stay", "All meals", "2 safari permits & jeep", "Naturalist guide"],
    exclusions: ["Camera fees", "Safari permits beyond itinerary", "Personal expenses"],
  },
  {
    slug: "char-dham-yatra-gujarat",
    title: "Dwarka - Somnath Jyotirlinga Yatra",
    location: "Dwarka & Somnath, Gujarat",
    category: "pilgrimage",
    duration: "5 Days / 4 Nights",
    priceFrom: 21500,
    image:
      "https://images.unsplash.com/photo-1717326630799-703fe906e283?auto=format&fit=crop&w=1600&q=80",
    tagline: "A soul-stirring circuit across two of India's holiest Jyotirlingas.",
    description:
      "Comfortable, well-paced darshan yatra covering Dwarkadhish Temple, Somnath Jyotirlinga, Bet Dwarka, and Nageshwar, with sattvic meals and dharamshala or hotel stays.",
    highlights: [
      "Dwarkadhish Temple darshan with priest assistance",
      "Boat ride to Bet Dwarka",
      "Somnath evening aarti & light show",
      "Nageshwar Jyotirlinga & Triveni Sangam",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Dwarka", description: "Check-in, evening Dwarkadhish Temple darshan." },
      { day: "Day 2", title: "Bet Dwarka", description: "Boat ride and darshan at Bet Dwarka, Nageshwar Jyotirlinga." },
      { day: "Day 3", title: "Travel to Somnath", description: "Scenic drive along the coast, evening Sound & Light show." },
      { day: "Day 4", title: "Somnath Darshan", description: "Early temple darshan, visit Triveni Sangam and Bhalka Tirth." },
      { day: "Day 5", title: "Departure", description: "Transfer to Diu/Rajkot for onward journey." },
    ],
    inclusions: ["4 nights stay (hotel/dharamshala)", "Sattvic meals", "AC vehicle for the full circuit", "Temple assistance & guide"],
    exclusions: ["Airfare/train fare", "VIP darshan tickets (optional)", "Personal expenses"],
    featured: true,
  },
  {
    slug: "ambaji-pavagadh-devotion-circuit",
    title: "Ambaji - Pavagadh Devotion Circuit",
    location: "Banaskantha & Panchmahal, Gujarat",
    category: "pilgrimage",
    duration: "3 Days / 2 Nights",
    priceFrom: 10900,
    image:
      "https://images.unsplash.com/photo-1673157130879-0be6e4d1acd5?auto=format&fit=crop&w=1600&q=80",
    tagline: "Two Shakti Peethas, ropeway views, and Champaner's ruins.",
    description:
      "Covers Ambaji Temple, the Kalika Mata Temple ropeway at Pavagadh, and the UNESCO World Heritage ruins of Champaner en route.",
    highlights: [
      "Ambaji Temple darshan",
      "Pavagadh ropeway to Kalika Mata Temple",
      "Champaner-Pavagadh Archaeological Park (UNESCO site)",
      "Comfortable AC coach travel",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Ambaji", description: "Check-in, evening aarti at Ambaji Temple." },
      { day: "Day 2", title: "Pavagadh", description: "Drive to Pavagadh, ropeway darshan, Champaner ruins." },
      { day: "Day 3", title: "Departure", description: "Morning at leisure, transfer to Vadodara/Ahmedabad." },
    ],
    inclusions: ["2 nights hotel stay", "Breakfast & dinner", "Ropeway tickets", "AC vehicle throughout"],
    exclusions: ["Lunch", "VIP darshan (optional)", "Personal expenses"],
  },
  {
    slug: "golden-triangle-classic",
    title: "Golden Triangle Classic",
    location: "Delhi - Agra - Jaipur",
    category: "pan-india",
    duration: "6 Days / 5 Nights",
    priceFrom: 32500,
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    tagline: "India's most iconic circuit — Mughal grandeur meets royal Rajasthan.",
    description:
      "A well-paced first-timer's itinerary through Delhi's monuments, the Taj Mahal at sunrise, and Jaipur's forts and palaces, with heritage hotel stays.",
    highlights: [
      "Sunrise visit to the Taj Mahal",
      "Amber Fort with elephant/jeep ride",
      "Old & New Delhi guided city tour",
      "Heritage haveli-style hotel stays",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Delhi", description: "City tour covering Red Fort, Qutub Minar, India Gate, Humayun's Tomb." },
      { day: "Day 3", title: "Agra", description: "Sunrise Taj Mahal, Agra Fort, drive to Jaipur via Fatehpur Sikri." },
      { day: "Day 4-5", title: "Jaipur", description: "Amber Fort, City Palace, Hawa Mahal, local bazaars." },
      { day: "Day 6", title: "Departure", description: "Transfer to Jaipur airport/railway station." },
    ],
    inclusions: ["5 nights heritage-category hotels", "Daily breakfast", "AC vehicle with driver", "Monument entry & guide"],
    exclusions: ["Airfare/train fare", "Lunch & dinner", "Elephant/jeep ride charges"],
    featured: true,
  },
  {
    slug: "kerala-backwaters-retreat",
    title: "Kerala Backwaters Retreat",
    location: "Munnar - Alleppey - Kochi",
    category: "pan-india",
    duration: "5 Days / 4 Nights",
    priceFrom: 27900,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    tagline: "Misty tea hills, a private houseboat, and Kochi's colonial charm.",
    description:
      "Tea-estate mornings in Munnar, a private houseboat overnight on the Alleppey backwaters, and a stroll through Fort Kochi's spice markets and Chinese fishing nets.",
    highlights: [
      "Private houseboat overnight stay",
      "Munnar tea plantation & viewpoint tour",
      "Fort Kochi heritage walk",
      "Ayurvedic spa session (optional)",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Munnar", description: "Tea gardens, Eravikulam National Park, Attukad Waterfalls." },
      { day: "Day 3", title: "Alleppey", description: "Drive to Alleppey, board private houseboat for an overnight cruise." },
      { day: "Day 4", title: "Kochi", description: "Disembark, transfer to Kochi, Fort Kochi heritage walk." },
      { day: "Day 5", title: "Departure", description: "Transfer to Kochi airport." },
    ],
    inclusions: ["4 nights (hotel + houseboat)", "All meals on houseboat, breakfast elsewhere", "AC vehicle throughout", "Sightseeing as per itinerary"],
    exclusions: ["Airfare", "Spa treatments", "Personal expenses"],
  },
  {
    slug: "dubai-city-desert-experience",
    title: "Dubai: City & Desert Experience",
    location: "Dubai, UAE",
    category: "international",
    duration: "5 Days / 4 Nights",
    priceFrom: 68500,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
    tagline: "Skyscraper views, desert safaris, and duty-free shopping.",
    description:
      "A balanced Dubai itinerary with Burj Khalifa access, a dhow cruise dinner, desert safari with BBQ, and free time for shopping at the Dubai Mall.",
    highlights: [
      "Burj Khalifa 124th floor entry",
      "Desert safari with BBQ dinner & live shows",
      "Marina dhow cruise with dinner",
      "Visa assistance included",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Dubai", description: "Airport pickup, evening at leisure." },
      { day: "Day 2", title: "City Tour", description: "Burj Khalifa, Dubai Mall, Museum of the Future (exterior)." },
      { day: "Day 3", title: "Desert Safari", description: "Dune bashing, camel ride, BBQ dinner with live entertainment." },
      { day: "Day 4", title: "Marina & Free Time", description: "Dhow cruise dinner, leisure time for shopping." },
      { day: "Day 5", title: "Departure", description: "Transfer to Dubai International Airport." },
    ],
    inclusions: ["4 nights 4-star hotel", "Daily breakfast", "UAE visa processing", "Airport transfers & tours as listed"],
    exclusions: ["International airfare", "Lunch & dinner (except listed)", "Travel insurance"],
    featured: true,
  },
  {
    slug: "bali-island-honeymoon",
    title: "Bali Island Honeymoon",
    location: "Ubud & Seminyak, Bali",
    category: "international",
    duration: "6 Days / 5 Nights",
    priceFrom: 89900,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
    tagline: "Rice terraces, private villas, and sunset beach dinners.",
    description:
      "A romantic Bali circuit with private pool villa stays, a Ubud rice-terrace and temple tour, and a candlelight dinner on Seminyak beach.",
    highlights: [
      "Private pool villa accommodation",
      "Tegalalang Rice Terrace & Ubud temples",
      "Candlelight dinner on the beach",
      "Couple spa session included",
    ],
    itinerary: [
      { day: "Day 1-3", title: "Ubud", description: "Rice terraces, Tegenungan Waterfall, Monkey Forest, couple spa." },
      { day: "Day 4-5", title: "Seminyak", description: "Beach clubs, sunset dinner, optional water sports." },
      { day: "Day 6", title: "Departure", description: "Transfer to Ngurah Rai International Airport." },
    ],
    inclusions: ["5 nights villa stay", "Daily breakfast", "Airport transfers", "1 candlelight dinner, 1 couple spa"],
    exclusions: ["International airfare", "Visa on arrival fee", "Lunch & dinner (except listed)"],
  },
  {
    slug: "switzerland-alpine-explorer",
    title: "Switzerland Alpine Explorer",
    location: "Zurich - Interlaken - Lucerne",
    category: "international",
    duration: "7 Days / 6 Nights",
    priceFrom: 165000,
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=80",
    tagline: "Snow-capped peaks, scenic trains, and lakeside towns.",
    description:
      "A guided Swiss tour with a Jungfraujoch excursion, scenic rail journeys, and a lake cruise in Lucerne, designed for Indian palates with vegetarian dining options.",
    highlights: [
      "Jungfraujoch - Top of Europe excursion",
      "Golden Pass scenic train journey",
      "Lake Lucerne cruise",
      "Indian vegetarian meal options",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Zurich", description: "City orientation, Rhine Falls day trip." },
      { day: "Day 3-4", title: "Interlaken", description: "Jungfraujoch excursion, Grindelwald village." },
      { day: "Day 5-6", title: "Lucerne", description: "Lake cruise, Mount Titlis cable car, old town walk." },
      { day: "Day 7", title: "Departure", description: "Transfer to Zurich Airport." },
    ],
    inclusions: ["6 nights 4-star hotels", "Daily breakfast & select dinners", "Swiss Travel Pass", "Visa documentation support"],
    exclusions: ["International airfare", "Schengen visa fee", "Travel insurance"],
  },
];

export const featuredPackages = packages.filter((p) => p.featured);

export interface CorporateService {
  title: string;
  description: string;
  icon: "briefcase" | "users" | "calendar" | "airplane" | "presentation" | "handshake";
}

export const corporateServices: CorporateService[] = [
  {
    title: "Corporate Retreats & Offsites",
    description:
      "End-to-end planning for team offsites — venue sourcing, activities, and logistics across Gujarat, Goa, or international locations.",
    icon: "users",
  },
  {
    title: "MICE & Conference Travel",
    description:
      "Meetings, incentives, conferences and exhibitions handled with dedicated on-ground coordination and vendor management.",
    icon: "presentation",
  },
  {
    title: "Group Flight & Hotel Booking",
    description:
      "Negotiated corporate rates on bulk airfare and hotel blocks, with a single point of contact for your travel desk.",
    icon: "airplane",
  },
  {
    title: "Incentive & Reward Travel",
    description:
      "Curated reward trips for top performers — from Kutch luxury camps to international incentive destinations.",
    icon: "calendar",
  },
  {
    title: "Dedicated Account Manager",
    description:
      "A single travel consultant who understands your company's policy, budget bands, and approval workflow.",
    icon: "handshake",
  },
  {
    title: "Business Travel Management",
    description:
      "Ongoing support for recurring business trips — visa processing, forex, insurance, and 24x7 traveler assistance.",
    icon: "briefcase",
  },
];

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  trip: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Devansh & Riya Shah",
    location: "Ahmedabad",
    quote:
      "Our Kutch trip during Rann Utsav was flawless — the tent resort, the guide, even the folk dinner felt handpicked. Prateek Holidayz clearly knows Gujarat inside out.",
    rating: 5,
    trip: "Rann of Kutch: White Desert Escape",
  },
  {
    name: "Nilesh Patel",
    location: "Surat",
    quote:
      "Booked our company's annual offsite through their corporate desk. Twenty-two people, zero hiccups, and the account manager was reachable on WhatsApp at all hours.",
    rating: 5,
    trip: "Corporate Offsite, Goa",
  },
  {
    name: "Kavita & family",
    location: "Vadodara",
    quote:
      "The Dwarka-Somnath yatra was paced perfectly for my parents — comfortable stays, sattvic food, and someone always around to help with darshan queues.",
    rating: 5,
    trip: "Dwarka - Somnath Jyotirlinga Yatra",
  },
  {
    name: "Aakash Mehta",
    location: "Ahmedabad",
    quote:
      "Dubai visa, hotel, desert safari — all sorted within a week of enquiring. Pricing was transparent with no last-minute add-ons.",
    rating: 4,
    trip: "Dubai: City & Desert Experience",
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Corporate Travel", href: "/corporate-travel" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const companyInfo = {
  name: "Prateek Holidayz",
  tagline: "Crafted journeys across India and beyond",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@prateekholidayz.in",
  address: "3rd Floor, Sthapatya Prabhat, C. G. Road, Navrangpura, Ahmedabad, Gujarat 380009",
  hours: "Mon - Sat, 10:00 AM - 7:30 PM IST",
  mapsQuery: "Navrangpura, Ahmedabad, Gujarat",
};
