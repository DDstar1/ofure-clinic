export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  slug: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
