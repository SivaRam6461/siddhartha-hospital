import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Baby,
  Scissors,
  Bone,
  PersonStanding,
  Ambulance,
  Activity,
  HeartPulse,
  Syringe,
  Wind,
  Users,
  Thermometer
} from "lucide-react";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/siddhartha-hospital";

export const siteConfig = {
  name: "Siddhartha Multi Speciality Hospital",
  nameTe: "సిద్ధార్థ మల్టీ స్పెషాలిటీ హాస్పిటల్",
  shortName: "Siddhartha Hospitals",
  tagline: "Your Health, Our Highest Priority",
  description:
    "Siddhartha Multi Speciality Hospital in Rajamahendravaram delivers trusted, compassionate healthcare with advanced treatments, experienced doctors, and patient-centered care for every family.",
  phone: "+91 884 247 0000",
  phoneDisplay: "+91 884 247 0000",
  emergencyPhone: "+91 884 247 1111",
  email: "care@siddharthahospital.com",
  address: {
    line1: "VL Puram Bypass Road, VL Puram, Rehmath Nagar Colony",
    city: "Rajamahendravaram",
    state: "Andhra Pradesh",
    pincode: "533103",
    country: "India",
    geo: { lat: 16.9964, lng: 81.777 }
  },
  mapsQuery:
    "Siddhartha+Multi+Speciality+Hospital+V+L+Puram+Rajamahendravaram+Andhra+Pradesh+533103",
  url: "https://SivaRam6461.github.io/siddhartha-hospital",
  established: 2008,
  workingHours: "24/7 Emergency & Critical Care"
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
] as const;

export const stats = [
  { value: 17, suffix: "+", label: "Years of Healing" },
  { value: 50, suffix: "+", label: "Expert Doctors" },
  { value: 25, suffix: "+", label: "Specialities" },
  { value: 200000, suffix: "+", label: "Patients Treated" }
] as const;

export type Department = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
};

export const departments: Department[] = [
  {
    slug: "general-medicine",
    title: "General Medicine",
    icon: Stethoscope,
    description:
      "Comprehensive primary care, preventive health, and management of chronic conditions by experienced physicians.",
    highlights: ["Preventive Care", "Chronic Disease", "Health Screening"]
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    icon: Baby,
    description:
      "Gentle, specialized care for newborns, children, and adolescents with a child-friendly environment.",
    highlights: ["Newborn Care", "Growth Tracking", "Child Wellness"]
  },
  {
    slug: "general-surgery",
    title: "General Surgery",
    icon: Scissors,
    description:
      "Advanced surgical procedures with modern operation theatres and minimally invasive techniques.",
    highlights: ["Laparoscopy", "Day Care Surgery", "Post-Op Care"]
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    icon: Bone,
    description:
      "Expert care for bones, joints, and sports injuries with advanced physiotherapy support.",
    highlights: ["Joint Replacement", "Fracture Care", "Spine Health"]
  },
  {
    slug: "gynecology",
    title: "Gynecology",
    icon: PersonStanding,
    description:
      "Compassionate women's healthcare from adolescence through motherhood and beyond.",
    highlights: ["Maternity", "Wellness", "Advanced Care"]
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    icon: Ambulance,
    description:
      "24/7 emergency and trauma services with a rapid response team and fully equipped ambulances.",
    highlights: ["24/7 Response", "Trauma Unit", "ICU Support"]
  },
  {
    slug: "diabetology",
    title: "Diabetology",
    icon: Activity,
    description:
      "End-to-end diabetes management, education, and complication prevention programs.",
    highlights: ["Sugar Control", "Foot Care", "Counseling"]
  },
  {
    slug: "health-checkups",
    title: "Health Checkups",
    icon: HeartPulse,
    description:
      "Comprehensive, affordable master health checkup packages for early detection.",
    highlights: ["Master Checkup", "Cardiac Panel", "Reports"]
  },
  {
    slug: "vaccination",
    title: "Vaccination",
    icon: Syringe,
    description:
      "Safe, timely immunizations for children and adults following national guidelines.",
    highlights: ["Child Immunization", "Travel Vaccines", "Flu Shots"]
  },
  {
    slug: "respiratory-care",
    title: "Respiratory Care",
    icon: Wind,
    description:
      "Diagnosis and treatment of asthma, COPD, and other respiratory conditions with modern support.",
    highlights: ["Asthma Clinic", "PFT", "Oxygen Therapy"]
  },
  {
    slug: "family-medicine",
    title: "Family Medicine",
    icon: Users,
    description:
      "Continuity of care for the whole family, coordinating treatment across every stage of life.",
    highlights: ["All Ages", "Coordinated Care", "Wellness"]
  },
  {
    slug: "fever-clinic",
    title: "Fever Clinic",
    icon: Thermometer,
    description:
      "Dedicated evaluation and management of fever, infections, and seasonal illnesses.",
    highlights: ["Rapid Testing", "Infection Care", "Follow-up"]
  }
];

export type Doctor = {
  name: string;
  qualification: string;
  experience: string;
  specialization: string;
  languages: string[];
  image: string;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Siddhartha Rao",
    qualification: "MBBS, MD (General Medicine)",
    experience: "20+ Years",
    specialization: "Internal Medicine & Critical Care",
    languages: ["English", "Telugu", "Hindi"],
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Lakshmi Priya",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "15+ Years",
    specialization: "Pediatric Care & Neonatology",
    languages: ["English", "Telugu"],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Arun Kumar",
    qualification: "MBBS, MS (Orthopedics)",
    experience: "18+ Years",
    specialization: "Joint Replacement & Trauma",
    languages: ["English", "Telugu", "Hindi"],
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Sunitha Reddy",
    qualification: "MBBS, DGO, DNB (OBG)",
    experience: "16+ Years",
    specialization: "Maternity & Gynecology",
    languages: ["English", "Telugu"],
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Vikram Raj",
    qualification: "MBBS, MS (General Surgery)",
    experience: "14+ Years",
    specialization: "Laparoscopic & General Surgery",
    languages: ["English", "Telugu", "Hindi"],
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Meena Nair",
    qualification: "MBBS, MD (Diabetology)",
    experience: "12+ Years",
    specialization: "Diabetes & Endocrinology",
    languages: ["English", "Malayalam", "Telugu"],
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop"
  }
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "24/7 Emergency & ICU",
    description:
      "Round-the-clock emergency response, fully equipped ICU, and critical care specialists.",
    icon: Ambulance
  },
  {
    title: "Diagnostic Laboratory",
    description:
      "NABL-aligned pathology, radiology, and imaging for accurate, fast diagnosis.",
    icon: Activity
  },
  {
    title: "Mother & Child Care",
    description:
      "Dedicated maternity, neonatal, and pediatric services in a soothing environment.",
    icon: Baby
  },
  {
    title: "Advanced Surgery",
    description:
      "Modern operation theatres supporting minimally invasive and complex procedures.",
    icon: Scissors
  },
  {
    title: "Cardiac Care",
    description:
      "ECG, echo, and cardiac monitoring with expert evaluation and follow-up.",
    icon: HeartPulse
  },
  {
    title: "Preventive Health",
    description:
      "Tailored master health checkups and wellness programs for every age group.",
    icon: Stethoscope
  }
];

export type Facility = {
  title: string;
  description: string;
  image: string;
};

export const facilities: Facility[] = [
  {
    title: "Modern Operation Theatres",
    description:
      "State-of-the-art OTs with laminar airflow and advanced surgical systems.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "Intensive Care Unit",
    description:
      "24/7 monitored ICU with ventilator support and critical care expertise.",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "Diagnostic Imaging",
    description:
      "Digital X-ray, ultrasound, and modern imaging for precise diagnostics.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=900&auto=format&fit=crop"
  },
  {
    title: "Comfortable Patient Rooms",
    description:
      "Spacious, hygienic rooms designed for comfort, privacy, and recovery.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=900&auto=format&fit=crop"
  }
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ramesh Varma",
    role: "Patient, Orthopedics",
    quote:
      "The care I received after my knee surgery was exceptional. The doctors and staff treated me like family and guided me through every step of recovery.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Saritha Devi",
    role: "Mother, Pediatrics",
    quote:
      "From the moment we arrived, the pediatric team made my daughter feel safe. Compassionate, patient, and truly professional.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Krishna Mohan",
    role: "Family Member",
    quote:
      "My father's emergency care was handled with incredible speed and sensitivity. Siddhartha Hospital is a blessing for our city.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Anitha Rao",
    role: "Patient, Gynecology",
    quote:
      "The maternity team gave me confidence and comfort throughout. Clean facilities and caring doctors — I recommend them to everyone.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop"
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How do I book an appointment at Siddhartha Hospital?",
    answer:
      "You can book instantly through our online appointment form, call our reception at +91 884 247 0000, or walk in during working hours. For emergencies, please use the 24/7 emergency line."
  },
  {
    question: "Do you provide 24/7 emergency services?",
    answer:
      "Yes. Our emergency department and ICU operate around the clock with a dedicated trauma team and fully equipped ambulances for rapid response."
  },
  {
    question: "Which health insurance plans are accepted?",
    answer:
      "We work with most major national and regional health insurance providers and government schemes. Our billing desk assists with cashless approvals and documentation."
  },
  {
    question: "What are your visiting hours for patients?",
    answer:
      "General visiting hours are from 10:00 AM to 1:00 PM and 4:00 PM to 7:00 PM. ICU and critical care visitation follows separate, staff-guided guidelines."
  },
  {
    question: "Do you offer master health checkup packages?",
    answer:
      "Yes. We provide comprehensive and affordable master health checkup packages for men, women, and senior citizens, with same-day reporting and physician consultation."
  },
  {
    question: "Is the hospital accessible for senior citizens and wheelchairs?",
    answer:
      "Absolutely. Our facility includes wheelchair access, ramps, priority assistance, and dedicated support staff to help senior citizens and patients with mobility needs."
  }
];

export const whyChooseUs = [
  {
    title: "Experienced Specialists",
    description:
      "A multidisciplinary team of senior doctors with decades of combined clinical expertise.",
    icon: Stethoscope
  },
  {
    title: "24/7 Emergency Care",
    description:
      "Rapid emergency response and critical care available every hour of every day.",
    icon: Ambulance
  },
  {
    title: "Patient-Centered Approach",
    description:
      "Compassionate, transparent care plans tailored to each patient and family.",
    icon: HeartPulse
  },
  {
    title: "Advanced Technology",
    description:
      "Modern diagnostics, operation theatres, and monitoring for accurate treatment.",
    icon: Activity
  },
  {
    title: "Affordable Excellence",
    description:
      "Premium-quality healthcare delivered with transparent, fair pricing.",
    icon: Users
  },
  {
    title: "Trusted in the Community",
    description:
      "Over 17 years of trusted healing for families across Rajamahendravaram.",
    icon: Thermometer
  }
];

export const values = [
  { title: "Compassion", description: "We treat every patient with empathy, dignity, and warmth." },
  { title: "Trust", description: "Transparent communication and ethical care build lasting trust." },
  { title: "Excellence", description: "We pursue the highest standards in clinical outcomes." },
  { title: "Innovation", description: "We embrace modern medicine and technology for better care." }
];
