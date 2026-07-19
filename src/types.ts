export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'residential' | 'industrial' | 'commercial' | 'repair';
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}
