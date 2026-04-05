export interface NavLink {
  name: string;
  href: string;
}

export interface ProductCardProps {
  category: string;
  title: string;
  description: string;
  coverImage?: string;
  date: string;
  readTime?: string;
  views?: number;
  slug?: string;
  tags?: string[];
}

export interface LatestCard {
  coverImage?: { url: string };
  title: string;
  category?: { name: string };
  tags?: string[];
  shortDescription: string;
  site: string;
  type: string;
  createdAt: string;
  readTime?: string;
  views?: number;
  slug?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}