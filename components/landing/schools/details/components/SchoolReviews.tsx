"use client";

import { Star } from "lucide-react";

import type { DrivingSchool } from "../../types/school";

interface SchoolReviewsProps {
  school: DrivingSchool;
}

export default function SchoolReviews({
  school,
}: SchoolReviewsProps) {
  return (
    <section>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">
            Learner Reviews
          </h2>

          <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            See what learners say about {school.name}.
          </p>
        </div>

        {/* Overall Rating */}
        <div
          className="
            flex w-fit items-center gap-3
            rounded-xl 
            px-4 py-3 bg-t
          "
        >
          <div className="flex h-10 w-10 items-center bg- justify-center rounded-lg bg-[#E51B23]/10">
            <Star className="h-5 w-5 fill-[#E51B23] text-[#E51B23]" />
          </div>

          <div>
            <p className="text-lg font-bold">
              {school.rating.toFixed(1)}
            </p>

            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {school.reviewCount} reviews
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {school.reviews.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {school.reviews.map((review) => (
            <article
              key={review.id}
              className="
                rounded-2xl
                border border-zinc-200
                bg-white
                p-5
                dark:border-zinc-800
                dark:bg-[#151515]
              "
            >
              {/* Reviewer */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold">
                    {review.learnerName}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                    {review.date}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#E51B23]/10 px-2.5 py-1">
                  <Star className="h-3.5 w-3.5 fill-[#E51B23] text-[#E51B23]" />

                  <span className="text-xs font-semibold text-[#E51B23]">
                    {review.rating}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`
                      h-4 w-4
                      ${
                        index < review.rating
                          ? "fill-[#E51B23] text-[#E51B23]"
                          : "text-zinc-300 dark:text-zinc-700"
                      }
                    `}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {review.comment}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div
          className="
            mt-6 rounded-2xl
            border border-dashed
            border-zinc-300
            p-10 text-center
            dark:border-zinc-700
          "
        >
          <Star className="mx-auto h-8 w-8 text-zinc-400" />

          <p className="mt-3 text-sm font-medium">
            No reviews yet
          </p>

          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
            Be the first learner to review this school.
          </p>
        </div>
      )}
    </section>
  );
}