import Link from "next/link";


export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      

      <div className="flex items-end gap-1">
        <span className="text-2xl font-bold tracking-tight">
          DriveLearn
        </span>

        <span className="text-sm text-muted-foreground">
          India
        </span>
      </div>
    </Link>
  );
}