import type { InstructorAvailability } from "../types/availability";

export const availability: InstructorAvailability = {
    days: [
        {
            day: "monday",
            label: "Monday",
            enabled: true,
            startTime: "07:00",
            endTime: "19:00",
        },
        {
            day: "tuesday",
            label: "Tuesday",
            enabled: true,
            startTime: "07:00",
            endTime: "19:00",
        },
        {
            day: "wednesday",
            label: "Wednesday",
            enabled: true,
            startTime: "07:00",
            endTime: "19:00",
        },
        {
            day: "thursday",
            label: "Thursday",
            enabled: false,
            startTime: "07:00",
            endTime: "19:00",
        },
        {
            day: "friday",
            label: "Friday",
            enabled: true,
            startTime: "07:00",
            endTime: "19:00",
        },
        {
            day: "saturday",
            label: "Saturday",
            enabled: true,
            startTime: "07:00",
            endTime: "19:00",
        },
        {
            day: "sunday",
            label: "Sunday",
            enabled: false,
            startTime: "07:00",
            endTime: "19:00",
        },
    ],
};