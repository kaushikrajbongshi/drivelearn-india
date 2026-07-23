"use client";

import { motion } from "framer-motion";
import {
    Car,
    MapPin,
    Search,
    Star,
} from "lucide-react";

import FloatingCards from "./FloatingCards";

export default function HeroPreview() {
    return (
        <div className="relative hidden lg:block w-full h-[700px] perspective-1000">

            {/* Main Dashboard */}
            <motion.div
                initial={{
                    opacity: 0,
                    rotateY: -10,
                    rotateX: 5,
                    z: -100,
                }}
                animate={{
                    opacity: 1,
                    rotateY: -5,
                    rotateX: 5,
                    z: 0,
                }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
                className="absolute inset-0 m-auto w-[95%] sm:w-[90%] h-[90%] md:h-[85%] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl rounded-3xl border border-white/40 dark:border-white/10 shadow-2xl shadow-indigo-500/10 overflow-hidden flex flex-col"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >

                {/* Header */}

                <div className="h-12 md:h-16 border-b border-white/20 dark:border-white/5 flex items-center px-4 md:px-6 gap-2 md:gap-4 bg-white/20 dark:bg-black/20">

                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>

                    <div className="flex-1 flex justify-center">

                        <div className="w-64 h-8 rounded-full bg-white/30 dark:bg-zinc-800/50 flex items-center px-3 gap-2 border border-white/20 dark:border-white/5">

                            <Search className="w-4 h-4 text-zinc-500" />

                            <div className="w-32 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />

                        </div>

                    </div>

                </div>

                {/* Body */}

                <div className="flex-1 flex flex-col sm:flex-row relative bg-zinc-50/30 dark:bg-black/10">

                    {/* Sidebar */}

                    <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-white/20 dark:border-white/5 p-4 space-y-4 flex flex-row sm:flex-col overflow-x-auto sm:overflow-visible">

                        <div className="hidden sm:block w-24 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 mb-2 shrink-0" />

                        {/* Card */}

                        <div className="min-w-[200px] sm:min-w-0 p-3 rounded-xl bg-white/60 dark:bg-zinc-800/60 border border-white/30 dark:border-white/5 shadow-sm space-y-2 relative overflow-hidden shrink-0">

                            <div className="absolute top-2 right-2">
                                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            </div>

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">

                                    <Car className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />

                                </div>

                                <div>

                                    <div className="w-20 h-2.5 rounded-full bg-zinc-800 dark:bg-zinc-200 mb-1" />

                                    <div className="w-16 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500" />

                                </div>

                            </div>

                            <div className="flex gap-2 pt-2 mt-2 border-t border-white/20 dark:border-white/5">

                                <div className="w-full h-6 rounded-md bg-indigo-600/10 dark:bg-indigo-500/20" />

                            </div>

                        </div>

                        {/* Card */}

                        <div className="min-w-[200px] sm:min-w-0 p-3 rounded-xl bg-white/30 dark:bg-zinc-800/30 border border-transparent space-y-2 opacity-70 shrink-0">

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-700/50" />

                                <div>

                                    <div className="w-24 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mb-1" />

                                    <div className="w-12 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Map */}

                    <div className="flex-1 relative overflow-hidden bg-sky-50/30 dark:bg-sky-900/5">

                        <div
                            className="absolute inset-0 opacity-20 dark:opacity-10"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 2px 2px,#6366f1 1px,transparent 0)",
                                backgroundSize: "24px 24px",
                            }}
                        />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">

                            <motion.div
                                animate={{
                                    y: [0, -6, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center backdrop-blur-md border border-indigo-500/30 shadow-lg"
                            >

                                <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />

                            </motion.div>

                            <div className="w-8 h-2 mt-2 bg-indigo-500/20 blur-sm rounded-full" />

                        </div>

                    </div>

                </div>

            </motion.div>

            {/* Floating Cards */}

            <FloatingCards />

        </div>
    );
}