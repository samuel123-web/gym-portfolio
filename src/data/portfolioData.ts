import {
  PersonalInfo,
  BrandPillar,
  SkillCategory,
  SkillItem,
  TrainingProgramItem,
  ExperienceItem,
  EducationItem,
  ServiceItem,
  ProcessStep,
  SocialLink,
  NavItem,
} from '../types';

/**
 * ====================================================================
 * CENTRAL PORTFOLIO CONFIGURATION - EPHREM GETACHEW (GYM TRAINER)
 * ====================================================================
 * Brand Theme: Power Red & Athletic Crimson
 */

// ====================================================================
// 1. PERSONAL INFORMATION (EDIT THIS SECTION)
// ====================================================================
export const personalInfo: PersonalInfo = {
  name: "Ephrem Getachew",
  roleTitle: "Certified Strength & Conditioning Coach / Gym Trainer",
  location: "Addis Ababa, Ethiopia",
  phone: "0912441536",
  phoneRaw: "0912441536",
  headline: "Transforming Lives Through Discipline, Strength & Functional Fitness.",
  subHeadline:
    "I'm Ephrem Getachew, a certified Strength & Conditioning Coach and gym trainer based in Addis Ababa, Ethiopia. I empower individuals to build physical power, athletic endurance, mental resilience, and lifelong health.",
  bioParagraph1:
    "I’m Ephrem Getachew, a certified fitness professional and gym trainer based in Addis Ababa, Ethiopia. Certified in Strength & Conditioning (IUSCA Authorized to Train), I specialize in 1-on-1 personal training, combat boxing conditioning, hypertrophy, and functional movement.",
  bioParagraph2:
    "I believe true physical transformation comes from disciplined daily habits, proper movement mechanics, and mental fortitude. Whether your goal is building lean muscle, shedding fat, or mastering boxing stamina, I provide focused coaching that delivers real, lasting results.",
  brandStatement:
    "“True strength isn’t just built in the gym—it starts with discipline, grows through consistency, and empowers every aspect of life.”",
  avatarUrl: "/assets/ephrem-portrait.jpg",
  gymPhotoUrl: "/assets/ephrem-gym.jpg",
  boxingPhotoUrl: "/assets/ephrem-boxing.jpg",
};

// ====================================================================
// 2. NAVIGATION LINKS
// ====================================================================
export const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Programs", href: "#programs" },
  { label: "Experience", href: "#experience" },
  { label: "Credentials", href: "#credentials" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

// ====================================================================
// 3. COACHING PILLARS & PHILOSOPHY
// ====================================================================
export const brandPillars: BrandPillar[] = [
  {
    number: "01",
    title: "Discipline & Consistency",
    description: "Building sustainable training habits that compound into lifelong physical power and health.",
    iconName: "Flame",
  },
  {
    number: "02",
    title: "Personalized Coaching",
    description: "Customizing workout intensity and exercise selection to fit your unique body structure and goals.",
    iconName: "Target",
  },
  {
    number: "03",
    title: "Functional Strength",
    description: "Developing practical athleticism, core stability, power output, and joint durability.",
    iconName: "Dumbbell",
  },
  {
    number: "04",
    title: "Holistic Health",
    description: "Balancing heavy lifting, cardiovascular conditioning, mobility, and active recovery.",
    iconName: "HeartPulse",
  },
];

// ====================================================================
// 4. FITNESS SKILLS & EXPERTISE (EDIT THIS SECTION)
// ====================================================================
export const skillCategories: SkillCategory[] = [
  { id: "all", label: "All Skills", description: "Comprehensive coaching capabilities" },
  { id: "strength", label: "Strength & Hypertrophy", description: "Muscle building and resistance training" },
  { id: "combat", label: "Boxing & Combat Cardio", description: "Heavy bag drills, stamina, and agility" },
  { id: "mobility", label: "Mobility & Functional", description: "Joint health, posture, and core strength" },
  { id: "coaching", label: "Personal Coaching", description: "Program design, motivation, and form guidance" },
];

export const skillsList: SkillItem[] = [
  // Strength & Hypertrophy
  { name: "Progressive Overload Training", category: "strength", tag: "Strength" },
  { name: "Muscle Hypertrophy & Sculpting", category: "strength", tag: "Hypertrophy" },
  { name: "Free-Weight & Barbell Mastery", category: "strength", tag: "Resistance" },
  { name: "Core Strength & Stability", category: "strength", tag: "Core" },
  { name: "Power & Explosive Movements", category: "strength", tag: "Power" },

  // Combat & Boxing Conditioning
  { name: "Heavy Bag Conditioning", category: "combat", tag: "Boxing" },
  { name: "Footwork & Agility Drills", category: "combat", tag: "Agility" },
  { name: "High-Intensity Combat Cardio", category: "combat", tag: "Endurance" },
  { name: "Hand-Eye Coordination & Reflexes", category: "combat", tag: "Reflexes" },
  { name: "Stamina & Breath Control", category: "combat", tag: "Cardio" },

  // Mobility & Functional
  { name: "Functional Movement Patterns", category: "mobility", tag: "Functional" },
  { name: "Joint Mobility & Dynamic Warmups", category: "mobility", tag: "Mobility" },
  { name: "Posture Correction & Alignment", category: "mobility", tag: "Posture" },
  { name: "Injury Prevention Protocols", category: "mobility", tag: "Safety" },
  { name: "Active Flexibility & Stretching", category: "mobility", tag: "Recovery" },

  // Coaching & Wellness
  { name: "1-on-1 Personalized Coaching", category: "coaching", tag: "Personal" },
  { name: "Custom Workout Program Design", category: "coaching", tag: "Programming" },
  { name: "Body Composition & Progress Tracking", category: "coaching", tag: "Metrics" },
  { name: "Client Motivation & Accountability", category: "coaching", tag: "Mindset" },
];

// ====================================================================
// 5. FEATURED TRAINING PROGRAMS (EDIT THIS SECTION)
// ====================================================================
export const trainingProgramsList: TrainingProgramItem[] = [
  {
    id: "prog-01",
    number: "01",
    title: "1-on-1 Complete Body Transformation",
    tagline: "Comprehensive personalized strength & fat loss blueprint",
    description: "An intensive personal training program tailored to sculpt lean muscle, burn stubborn fat, and elevate overall strength through guided form and structured progression.",
    goal: "Maximum fat loss, lean muscle definition, and full-body conditioning",
    duration: "12 — 16 Weeks Intensive",
    targetFocus: "Full Body (Upper / Lower / Core)",
    features: [
      "Customized 1-on-1 in-person gym coaching in Addis Ababa",
      "Progressive resistance and muscle hypertrophy routines",
      "Bi-weekly body measurements and performance tracking",
      "Form correction for maximum safety and efficiency",
    ],
    tags: ["Personal Training", "Hypertrophy", "Fat Loss"],
    keyExercises: ["Compound Squats", "Deadlifts", "Dumbbell Presses", "Targeted Core Circuits"],
    image: "/assets/ephrem-gym.jpg",
    isFeatured: true,
  },
  {
    id: "prog-02",
    number: "02",
    title: "Combat Boxing & Heavy Bag Stamina",
    tagline: "High-energy boxing drills and cardiovascular conditioning",
    description: "A fast-paced athletic workout fusing authentic boxing footwork, heavy bag combinations, and explosive bodyweight intervals for elite endurance and mental focus.",
    goal: "Peak cardiovascular stamina, upper-body power, and agility",
    duration: "8 — 12 Weeks Conditioning",
    targetFocus: "Shoulders, Back, Core & Aerobic Capacity",
    features: [
      "Dynamic heavy bag strike combinations",
      "High-tempo footwork ladder and jump rope drills",
      "Intense core tightening and rotational strength",
      "Stress relief and cognitive focus enhancement",
    ],
    tags: ["Boxing", "Endurance", "Agility"],
    keyExercises: ["Heavy Bag Rounds", "Speed Footwork", "Medicine Ball Slams", "Plyometrics"],
    image: "/assets/ephrem-boxing.jpg",
  },
  {
    id: "prog-03",
    number: "03",
    title: "Hypertrophy & Strength Mastery",
    tagline: "Dedicated muscle-building regimen for power and aesthetics",
    description: "A structured lifting regime focused on progressive overload, optimal muscle recruitment, and symmetrical muscular development.",
    goal: "Increased pure strength, muscle density, and athletic posture",
    duration: "10 — 14 Weeks Progression",
    targetFocus: "Chest, Back, Arms & Legs",
    features: [
      "Periodized lifting splits (Push / Pull / Legs)",
      "Targeted mind-muscle connection drills",
      "Plateau-breaking intensity techniques (Drop sets, Supersets)",
      "Joint-friendly warmups and post-workout decompression",
    ],
    tags: ["Strength", "Muscle Building", "Lifting"],
    keyExercises: ["Barbell Rows", "Incline Bench Press", "Romanian Deadlifts", "Cable Flyes"],
    image: "/assets/ephrem-boxing.jpg",
  },
  {
    id: "prog-04",
    number: "04",
    title: "Functional Athletic Movement & Mobility",
    tagline: "Enhancing agility, flexibility, and daily movement efficiency",
    description: "Engineered to eliminate movement restrictions, correct sedentary posture, and build athletic resilience that carries over into everyday life.",
    goal: "Joint freedom, pain-free movement, and dynamic athleticism",
    duration: "Ongoing Maintenance / 8 Weeks",
    targetFocus: "Hips, Spine, Shoulders & Ankles",
    features: [
      "Mobility flow sequences and dynamic stretching",
      "Unilateral balance and stability exercises",
      "Rotational and anti-rotational core conditioning",
      "Injury prevention and corrective exercise cues",
    ],
    tags: ["Mobility", "Functional", "Longevity"],
    keyExercises: ["Kettlebell Swings", "Thoracic Spine Openers", "Lunges with Twist", "Plank Variations"],
    image: "/assets/ephrem-gym.jpg",
  },
  {
    id: "prog-05",
    number: "05",
    title: "High-Energy HIIT Metabolic Conditioning",
    tagline: "Rapid fat burning and athletic conditioning circuits",
    description: "High-intensity interval training designed to spike metabolic rate, burn maximum calories in minimum time, and boost cardiovascular health.",
    goal: "Fast-track conditioning and accelerated calorie expenditure",
    duration: "6 — 8 Weeks Rapid Phase",
    targetFocus: "Cardiovascular System & Total Body",
    features: [
      "Tabata-style intervals and circuit stations",
      "Bodyweight conditioning and kettlebell circuits",
      "Metabolic afterburn effect (EPOC) optimization",
      "Scalable for all baseline fitness levels",
    ],
    tags: ["HIIT", "Cardio", "Fat Burn"],
    keyExercises: ["Burpees", "Mountain Climbers", "Kettlebell Cleans", "Battle Rope / Bag Intervals"],
    image: "/assets/ephrem-boxing.jpg",
  },
  {
    id: "prog-06",
    number: "06",
    title: "Customized Workout & Lifestyle Guidance",
    tagline: "Tailor-made routines for busy professionals in Addis Ababa",
    description: "A flexible fitness blueprint designed around your specific schedule, equipment access, and individual lifestyle demands with weekly check-ins.",
    goal: "Sustainable fitness integration into demanding daily schedules",
    duration: "Monthly / Continuous Support",
    targetFocus: "Personalized Selection",
    features: [
      "Custom routine built for your available gym gear",
      "Actionable hydration and recovery guidelines",
      "Weekly progress reviews and exercise adjustments",
      "Direct guidance and technique feedback",
    ],
    tags: ["Custom Plan", "Coaching", "Lifestyle"],
    keyExercises: ["Tailored Exercise Selection", "Guided Home/Gym Splits"],
    image: "/assets/ephrem-portrait.jpg",
  },
];

// ====================================================================
// 6. PROFESSIONAL JOURNEY & TRAINING BACKGROUND
// ====================================================================
export const experienceList: ExperienceItem[] = [
  {
    id: "exp-01",
    role: "Certified Strength & Conditioning Coach / Gym Trainer",
    company: "Gym & Fitness Facilities",
    location: "Addis Ababa, Ethiopia",
    period: "Active Practice",
    description:
      "Leading 1-on-1 personal training sessions, designing customized strength and body transformation programs, and guiding clients toward peak health and endurance.",
    responsibilities: [
      "Instructing clients on proper biomechanics, lifting technique, and safety",
      "Developing periodized workout schedules for muscle gain and fat loss",
      "Motivating clients through intense boxing and strength conditioning",
    ],
  },
  {
    id: "exp-02",
    role: "Combat & Boxing Conditioning Coach",
    company: "Fitness & Training Centers",
    location: "Addis Ababa, Ethiopia",
    period: "Continuous Practice",
    description:
      "Conducting heavy bag conditioning, footwork drills, and high-intensity stamina sessions for clients seeking athletic combat fitness.",
    responsibilities: [
      "Leading heavy bag strike workouts and cardio routines",
      "Training agility, core rotation, and hand speed",
      "Fostering mental toughness and disciplined exercise habits",
    ],
  },
  {
    id: "exp-03",
    role: "Athletic & Physical Fitness Development",
    company: "Self-Discipline & Intensive Training",
    location: "Addis Ababa, Ethiopia",
    period: "Foundational Background",
    description:
      "Dedicated years to rigorous personal physical conditioning, bodybuilding principles, functional training, and occupational fitness readiness.",
    responsibilities: [
      "Mastered progressive resistance techniques and athletic conditioning",
      "Achieved IUSCA Certificate in Strength and Conditioning (Authorized to Train)",
    ],
  },
];

// ====================================================================
// 7. VERIFIED CREDENTIALS & CERTIFICATIONS (UPDATED WITH IUSCA CERTIFICATE)
// ====================================================================
export const educationList: EducationItem[] = [
  {
    id: "edu-01",
    degree: "Certificate in Strength and Conditioning (Authorized to Train)",
    institution: "IUSCA — International Universities Strength & Conditioning Association",
    location: "International / Verified Credential",
    year: "Certified Coach",
    description:
      "Official IUSCA IQF Certificate of Achievement awarded to Efrem Getachew (Ephrem Getachew) authorizing him to train clients in strength and conditioning as a certified Coach/Personal Trainer.",
    certificateImage: "/assets/certificate-strength-conditioning.jpg",
    certificateTitle: "IUSCA Certificate of Achievement — Strength & Conditioning Coach",
    isPlaceholder: false,
  },
  {
    id: "edu-02",
    degree: "Certificate of Fitness & Health Evaluation",
    institution: "Medical & Health Fitness Board",
    location: "Addis Ababa, Ethiopia",
    year: "Verified",
    description:
      "Official certified physical fitness assessment and medical health evaluation confirming active physical endurance, health standards, and wellness.",
    certificateImage: "/assets/certificate-fitness-1.jpg",
    certificateTitle: "Certificate of Fitness — Ephrem Getachew",
    isPlaceholder: false,
  },
  {
    id: "edu-03",
    degree: "Fit To Work & Occupational Readiness Certificate",
    institution: "First Fitness Health Center",
    location: "Addis Ababa, Ethiopia",
    year: "Verified",
    description:
      "Certified occupational medical and physical assessment confirming physical stamina, work readiness, and comprehensive health evaluation.",
    certificateImage: "/assets/certificate-fitness-2.jpg",
    certificateTitle: "Fit To Work Certificate — Ephrem Getachew",
    isPlaceholder: false,
  },
  {
    id: "edu-04",
    degree: "Comprehensive Course in Nutrition, Strength, Hypertrophy, Conditioning, Bodybuilding & Physiology",
    institution: "Sofi's Lifting Club",
    location: "Addis Ababa, Ethiopia",
    year: "Certified",
    description:
      "Successfully completed the Comprehensive Course in Nutrition, Strength Hypertrophy, Conditioning, Bodybuilding and Physiology offered by Sofi's Lifting Club, signed by Engr. Sofonias Nebiyu (CEO).",
    certificateImage: "/assets/certificate-sofis-lifting-club.jpg",
    certificateTitle: "Sofi's Lifting Club — Comprehensive Course Certificate",
    isPlaceholder: false,
  },
];

// ====================================================================
// 8. TRAINING SERVICES & PACKAGES
// ====================================================================
export const servicesList: ServiceItem[] = [
  {
    id: "service-01",
    title: "1-on-1 Personal Training",
    shortDesc: "Dedicated in-person gym coaching tailored to your body.",
    description:
      "Hands-on private coaching sessions focused on proper exercise form, progressive overload, and rapid physical progress.",
    deliverables: [
      "In-person form correction & spotting",
      "Tailored workout structure for your goals",
      "Continuous motivation & intensity control",
    ],
    iconName: "Dumbbell",
  },
  {
    id: "service-02",
    title: "Boxing & Combat Fitness",
    shortDesc: "High-intensity bag drills, footwork, and stamina.",
    description:
      "Dynamic combat workouts combining punch combinations, agility drills, and core conditioning for elite fitness and stress relief.",
    deliverables: [
      "Heavy bag workouts & combination drills",
      "Footwork, agility, and speed training",
      "High-calorie metabolic cardio burn",
    ],
    iconName: "Flame",
  },
  {
    id: "service-03",
    title: "Custom Program Design",
    shortDesc: "Periodized workout plans built for your schedule.",
    description:
      "Structured exercise regimens designed for muscle building, fat loss, or athletic performance that you can follow with confidence.",
    deliverables: [
      "Weekly training split (Push/Pull/Legs etc.)",
      "Exercise sets, reps, and rest guidelines",
      "Progression rules & plateau management",
    ],
    iconName: "Activity",
  },
  {
    id: "service-04",
    title: "Functional & Mobility Coaching",
    shortDesc: "Joint health, posture alignment, and longevity.",
    description:
      "Corrective movements and mobility flows to eliminate stiffness, protect against injury, and build resilient athletic joints.",
    deliverables: [
      "Dynamic warmups & mobility routines",
      "Posture alignment & core strengthening",
      "Injury prevention protocols",
    ],
    iconName: "Trophy",
  },
];

// ====================================================================
// 9. HOW I COACH (4-STEP PROCESS)
// ====================================================================
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Assess",
    subtitle: "Goal & Fitness Baseline",
    description: "Evaluate your current fitness level, body mechanics, schedule, and primary goals (fat loss, strength, boxing fitness).",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Custom Workout Blueprint",
    description: "Craft a tailored workout regimen with specific exercises, sets, reps, and progression tailored for you.",
  },
  {
    step: "03",
    title: "Train",
    subtitle: "High-Energy Execution",
    description: "Execute structured workout sessions with strict focus on technique, safety, intensity, and motivation.",
  },
  {
    step: "04",
    title: "Progress",
    subtitle: "Track & Elevate",
    description: "Monitor physical gains, scale weights and intensity, and celebrate measurable body and endurance breakthroughs.",
  },
];

// ====================================================================
// 10. SOCIAL MEDIA LINKS (EDIT THIS SECTION)
// ====================================================================
export const socialLinks: SocialLink[] = [
  {
    name: "Telegram",
    url: "https://t.me/Barock21",
    icon: "Send",
    isPlaceholder: false,
  },
  {
    name: "Instagram",
    url: "#", // Add Instagram profile
    icon: "Instagram",
    isPlaceholder: true,
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: "Linkedin",
    isPlaceholder: true,
  },
  {
    name: "Twitter / X",
    url: "#",
    icon: "Twitter",
    isPlaceholder: true,
  },
];
