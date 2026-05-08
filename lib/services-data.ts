import { Service } from "./types";

export const services: Service[] = [
  {
    id: "antenatal",
    slug: "antenatal-care",
    title: "Antenatal Care",
    description:
      "Comprehensive pregnancy care from conception through delivery, including regular check-ups, ultrasounds, and health education to ensure a healthy pregnancy.",
    icon: "Baby",
    image: "/blog/antenatal.jpg",
    features: [
      "Routine pregnancy monitoring",
      "Blood pressure & glucose testing",
      "Nutritional counselling",
      "Foetal growth assessment",
      "Birth preparation classes",
    ],
  },
  {
    id: "postnatal",
    slug: "postnatal-care",
    title: "Postnatal Care",
    description:
      "Expert care for mothers and newborns after delivery, supporting recovery, breastfeeding, and infant health in the critical weeks following birth.",
    icon: "Heart",
    image: "/blog/postpartum.jpg",
    features: [
      "Postpartum health checks",
      "Breastfeeding support",
      "Newborn assessment",
      "Mental health screening",
      "Wound care & recovery",
    ],
  },
  {
    id: "family-planning",
    slug: "family-planning",
    title: "Family Planning",
    description:
      "Personalised family planning services helping couples make informed decisions about contraception and reproductive health.",
    icon: "Users",
    image: "/blog/family-planning.jpg",
    features: [
      "Contraceptive counselling",
      "IUD insertion & removal",
      "Hormonal options",
      "Natural family planning",
      "Pre-conception advice",
    ],
  },
  {
    id: "general-consultation",
    slug: "general-consultation",
    title: "General Consultation",
    description:
      "Holistic primary healthcare for all ages — from diagnosis and treatment of common illnesses to management of chronic conditions.",
    icon: "Stethoscope",
    image: "/clinic_image.jpg",
    features: [
      "Diagnosis & treatment",
      "Prescription & medication",
      "Referral services",
      "Chronic disease management",
      "Preventive health advice",
    ],
  },
  {
    id: "child-healthcare",
    slug: "child-healthcare",
    title: "Child Healthcare",
    description:
      "Dedicated paediatric care covering routine wellness visits, growth monitoring, illness management, and developmental assessments.",
    icon: "SmilePlus",
    image: "/blog/fever.jpg",
    features: [
      "Well-baby check-ups",
      "Growth & development tracking",
      "Illness management",
      "Nutritional guidance",
      "School health checks",
    ],
  },
  {
    id: "immunization",
    slug: "immunization",
    title: "Immunization",
    description:
      "Full vaccination services for children and adults, following Nigeria's National Programme on Immunization schedule and international guidelines.",
    icon: "ShieldCheck",
    image: "/blog/immunization.jpg",
    features: [
      "Childhood vaccination schedule",
      "Travel vaccinations",
      "Adult booster doses",
      "Vaccination records",
      "Immunization counselling",
    ],
  },
  {
    id: "laboratory",
    slug: "laboratory-services",
    title: "Laboratory Services",
    description:
      "On-site diagnostic laboratory offering a wide range of blood tests, urinalysis, and pathology services with prompt, accurate results.",
    icon: "FlaskConical",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=70",
    features: [
      "Full blood count & chemistry",
      "Malaria & typhoid testing",
      "Pregnancy tests",
      "HIV & hepatitis screening",
      "Urinalysis & stool analysis",
    ],
  },
  {
    id: "ultrasound",
    slug: "ultrasound-scan",
    title: "Ultrasound Scan",
    description:
      "State-of-the-art ultrasound imaging for obstetric and gynaecological assessments, providing clear diagnostic results.",
    icon: "ScanLine",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=70",
    features: [
      "Dating & viability scans",
      "Anomaly screening",
      "Pelvic ultrasound",
      "Foetal wellbeing",
      "Abdominal imaging",
    ],
  },
  {
    id: "maternity",
    slug: "maternity-services",
    title: "Maternity Services",
    description:
      "Full-spectrum maternity care providing a safe, comfortable environment for labour, delivery, and immediate postpartum support.",
    icon: "HeartHandshake",
    image: "/blog/labour.jpg",
    features: [
      "Normal & assisted deliveries",
      "Labour ward monitoring",
      "Skilled birth attendance",
      "Emergency obstetric care",
      "Mother-baby bonding support",
    ],
  },
  {
    id: "womens-health",
    slug: "womens-health",
    title: "Women's Health",
    description:
      "Comprehensive gynaecological services addressing every stage of a woman's life — from adolescence to menopause.",
    icon: "Ribbon",
    image: "/blog/womens-health.jpg",
    features: [
      "Gynaecological examinations",
      "Cervical cancer screening",
      "Menstrual disorder treatment",
      "Menopause management",
      "STI screening & treatment",
    ],
  },
  {
    id: "emergency",
    slug: "minor-emergency-care",
    title: "Minor Emergency Care",
    description:
      "Prompt, round-the-clock care for minor injuries, acute illnesses, and urgent medical conditions that need immediate attention.",
    icon: "Ambulance",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=70",
    features: [
      "Wound dressing & suturing",
      "Fracture first aid",
      "Acute fever management",
      "IV fluid therapy",
      "Stabilisation & referral",
    ],
  },
  {
    id: "health-checkups",
    slug: "health-checkups",
    title: "Health Checkups",
    description:
      "Comprehensive preventive health screenings designed to detect risk factors early and keep you in optimal health.",
    icon: "ClipboardList",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=70",
    features: [
      "Executive health screening",
      "Cardiovascular risk assessment",
      "Diabetes screening",
      "Pre-employment medicals",
      "Comprehensive blood panels",
    ],
  },
];
