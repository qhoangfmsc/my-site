export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface WingInfo {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  accentColor: string;
}
