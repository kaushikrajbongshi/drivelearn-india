
import type { IconType } from "react-icons";
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}
