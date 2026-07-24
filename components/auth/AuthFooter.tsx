import Link from "next/link";

interface AuthFooterProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthFooter({ text, linkText, href }: AuthFooterProps) {
  return (
    <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
      <span>{text} </span>
      <Link
        href={href}
        className="font-medium text-[#4F46E5] transition-colors hover:underline dark:text-indigo-300"
      >
        {linkText}
      </Link>
    </div>
  );
}