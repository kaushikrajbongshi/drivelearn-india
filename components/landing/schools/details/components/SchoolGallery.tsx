"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";

import type { DrivingSchool } from "../../types/school";

interface SchoolGalleryProps {
  school: DrivingSchool;
}

export default function SchoolGallery({
  school,
}: SchoolGalleryProps) {
  const images = [
    {
      src: school.image,
      alt: `${school.name}`,
    },

  ];

  return (
    <section>
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold sm:text-2xl">
          Gallery
        </h2>

        <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
          Take a look at {school.name} and its training facilities.
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`
              group relative overflow-hidden
              rounded-2xl
              border border-zinc-200
              bg-zinc-100
              dark:border-zinc-800
              dark:bg-zinc-900
              ${
                index === 0
                  ? "col-span-2 aspect-[16/9] sm:col-span-2"
                  : "aspect-[4/3]"
              }
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="
                (max-width: 640px) 50vw,
                (max-width: 1024px) 33vw,
                400px
              "
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute inset-0
                bg-black/0
                transition-colors
                duration-300
                group-hover:bg-black/10
              "
            />

            {/* Image number */}
            <div
              className="
                absolute bottom-3 left-3
                flex items-center gap-1.5
                rounded-lg
                bg-black/65
                px-2.5 py-1.5
                text-xs font-medium
                text-white
                opacity-0
                backdrop-blur-sm
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
              <ImageIcon className="h-3.5 w-3.5" />
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* More photos */}
      <div
        className="
          mt-4 flex items-center justify-center
          rounded-xl
          border border-dashed
          border-zinc-300
          px-4 py-3
          text-xs text-zinc-500
          dark:border-zinc-700
          dark:text-zinc-500
        "
      >
        More photos will be available soon.
      </div>
    </section>
  );
}