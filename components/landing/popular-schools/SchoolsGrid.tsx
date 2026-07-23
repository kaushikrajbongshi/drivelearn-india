import SchoolCard from "./SchoolCard";
import { schools } from "./school-data";

export default function SchoolsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {schools.map((school, index) => (
        <SchoolCard
          key={school.id}
          {...school}
          index={index}
        />
      ))}
    </div>
  );
}