interface Props {
  learnerName: string;
}

export default function DashboardHeader({ learnerName }: Props) {
  return (
    <header className="flex items-center justify-between px-2 py-2 ">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">
          Good morning, {learnerName} 
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Ready for your next driving lesson?
        </p>
      </div>
    </header>
  );
}