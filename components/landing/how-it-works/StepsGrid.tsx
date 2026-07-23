"use client";

import StepCard from "./StepCard";
import { steps } from "./step-data";

export default function StepsGrid() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <StepCard
          key={step.id}
          title={step.title}
          description={step.description}
          icon={step.icon}
          stepNumber={index + 1}
          index={index}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}