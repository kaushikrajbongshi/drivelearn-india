"use client";

import FeatureCard from "./FeatureCard";
import { features } from "./feature-data";

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          index={index}
        />
      ))}
    </div>
  );
}