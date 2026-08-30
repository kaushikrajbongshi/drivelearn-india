"use client";

import { CarFront, CheckCircle2 } from "lucide-react";

import type { DrivingSchool } from "../../types/school";

interface SchoolVehiclesProps {
  school: DrivingSchool;
}

export default function SchoolVehicles({
  school,
}: SchoolVehiclesProps) {
  return (
    <section>
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold sm:text-2xl">
          Training Vehicles
        </h2>

        <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
          Choose from the vehicles available for your driving lessons.
        </p>
      </div>

      {/* Vehicle Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {school.vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="
              group rounded-2xl
              border border-zinc-200
              bg-white
              p-5
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-[#E51B23]/30
              hover:shadow-md
              dark:border-zinc-800
              dark:bg-[#151515]
              dark:hover:border-[#E51B23]/30
            "
          >
            {/* Vehicle Icon */}
            <div className="flex items-start justify-between">
              <div
                className="
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  bg-[#E51B23]/10
                  text-[#E51B23]
                "
              >
                <CarFront className="h-6 w-6" />
              </div>

              <CheckCircle2
                className="
                  h-5 w-5
                  text-[#E51B23]
                "
              />
            </div>

            {/* Vehicle Name */}
            <h3 className="mt-5 text-base font-semibold">
              {vehicle.name}
            </h3>

            {/* Transmission */}
            <div className="mt-2 flex items-center gap-2">
              <span
                className="
                  rounded-full
                  bg-zinc-100
                  px-2.5 py-1
                  text-xs font-medium
                  text-zinc-700
                  dark:bg-zinc-800
                  dark:text-zinc-300
                "
              >
                {vehicle.transmission}
              </span>

              <span className="text-xs text-zinc-500 dark:text-zinc-500">
                Transmission
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {school.vehicles.length === 0 && (
        <div
          className="
            mt-6 rounded-2xl
            border border-dashed
            border-zinc-300
            p-10 text-center
            dark:border-zinc-700
          "
        >
          <CarFront className="mx-auto h-8 w-8 text-zinc-400" />

          <p className="mt-3 text-sm font-medium">
            No vehicles available
          </p>

          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
            Vehicle information is currently unavailable.
          </p>
        </div>
      )}
    </section>
  );
}