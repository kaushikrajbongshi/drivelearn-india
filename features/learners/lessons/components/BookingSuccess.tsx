"use client";

import { useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  Clock3,
  UserRound,
} from "lucide-react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface BookingSuccessProps {
  lessonType: string;
  trainingType: string;
  date: string;
  time: string;
  instructor: string;
  autoAssign?: boolean;
  bookingId: string;
  onContinue: () => void;
}

export default function BookingSuccess({
  lessonType,
  trainingType,
  date,
  time,
  instructor,
  autoAssign = false,
  bookingId,
  onContinue,
}: BookingSuccessProps) {
  const router = useRouter();

  const checkRef = useRef<HTMLDivElement>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const [origin, setOrigin] = useState({
    x: 0,
    y: 0,
  });

  function handleGoToDashboard() {
    const rect = checkRef.current?.getBoundingClientRect();

    if (rect) {
      setOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setIsTransitioning(true);
  }

  const maxRadius =
    typeof window !== "undefined"
      ? Math.hypot(
          Math.max(origin.x, window.innerWidth - origin.x),
          Math.max(origin.y, window.innerHeight - origin.y)
        )
      : 0;

  return (
    <>
      <section className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="p-6 text-center sm:p-8">
          {/* Success Icon */}
          <motion.div
            ref={checkRef}
            initial={{
              scale: 0.4,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary"
          >
            <Check
              className="h-8 w-8 text-primary-foreground"
              strokeWidth={3}
            />
          </motion.div>

          {/* Heading */}
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
            Booking Confirmed
          </p>

          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-foreground">
            Your first lesson is scheduled!
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Your lesson has been successfully booked. You can view
            your schedule and training progress from your dashboard.
          </p>

          {/* Booking ID */}
          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
            <span className="text-[11px] text-muted-foreground">
              Booking ID
            </span>

            <span className="text-[11px] font-semibold text-foreground">
              {bookingId}
            </span>
          </div>

          {/* Booking Details */}
          <div className="mx-auto mt-7 max-w-lg overflow-hidden rounded-xl border border-border text-left">
            <DetailRow
              icon={<CalendarDays />}
              label="Date"
              value={date}
            />

            <DetailRow
              icon={<Clock3 />}
              label="Time"
              value={time}
            />

            <DetailRow
              icon={<CarFront />}
              label="Lesson"
              value={`${lessonType} · ${trainingType}`}
            />

            <DetailRow
              icon={<UserRound />}
              label="Instructor"
              value={autoAssign ? "Auto Assigned" : instructor}
              last
            />
          </div>

          {/* CTA */}
          <Button
            type="button"
            onClick={handleGoToDashboard}
            disabled={isTransitioning}
            className="
              mt-6
              h-11
              w-full
              max-w-lg
              gap-2
              rounded-lg
              bg-primary
              text-sm
              font-semibold
              text-primary-foreground
              hover:bg-primary/90
            "
          >
            Go to Dashboard
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Circular Reveal Transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
            initial={{
              clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
            }}
            animate={{
              clipPath: `circle(${maxRadius}px at ${origin.x}px ${origin.y}px)`,
            }}
            transition={{
              duration: 0.6,
              ease: [0.65, 0, 0.35, 1],
            }}
            onAnimationComplete={() => {
              onContinue();
              router.push("/learner/dashboard");
            }}
          >
            {/* Animated Check */}
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 0.3,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20"
            >
              <Check
                className="h-8 w-8 text-primary-foreground"
                strokeWidth={3}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DetailRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3.5
        ${!last ? "border-b border-border" : ""}
      `}
    >
      {/* Icon */}
      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-muted
          text-muted-foreground
          [&>svg]:h-4
          [&>svg]:w-4
        "
      >
        {icon}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-muted-foreground">
          {label}
        </p>

        <p className="mt-0.5 truncate text-sm font-medium text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}