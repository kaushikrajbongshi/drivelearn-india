import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import type { FooterSection, SocialLink } from "./footer-types";

export const footerSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { label: "Browse Schools", href: "/schools" },
      { label: "Pricing", href: "/pricing" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: FaFacebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "#",
    label: "X",
  },
  {
    icon: FaGithub,
    href: "#",
    label: "GitHub",
  },
];
