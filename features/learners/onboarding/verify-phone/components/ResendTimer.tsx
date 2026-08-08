"use client";

import { useEffect, useState } from "react";

interface ResendTimerProps {
  initialSeconds?: number;
  onResend?: () => void;
}

export default function ResendTimer({
  initialSeconds = 30,
  onResend,
}: ResendTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  function handleResend() {
    onResend?.();
    // TODO: Call Resend OTP API
    setSeconds(initialSeconds);
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <p className="text-sm text-neutral-500 dark:text-zinc-400">
      Didn't receive a code?{" "}
      {seconds > 0 ? (
        <span className="font-semibold tabular-nums text-neutral-400 dark:text-zinc-500">
          Resend in {String(minutes).padStart(2, "0")}:
          {String(remainingSeconds).padStart(2, "0")}
        </span>
      ) : (
        <button
          type="button"
          onClick={handleResend}
          className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          Resend
        </button>
      )}
    </p>
  );
}