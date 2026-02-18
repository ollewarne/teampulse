import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useDayStats } from "../hooks/useDayStats";
import { useCheckins } from "../hooks/useCheckins";
import type { checkIn } from "../types";

interface CheckinContext {
    checkins: checkIn[];
    addCheckin: () => void;
    removeCheckin: () => void;
    clearDay: () => void;
    stats: object;
    todaysCheckins: checkIn[]
}

const checkInContext = createContext<CheckinContext | null>(null);

export function CheckInProvider({children}: {children: ReactNode}) {
    const {checkins, addCheckin, removeCheckin, clearDay} = useCheckins()
    const stats = useDayStats(checkins)

    const todaysCheckins = checkins.filter(check => check.timestamp.toDateString() === new Date().toDateString())

    const value = useMemo(() => ({
        checkins, addCheckin, removeCheckin, clearDay, stats, todaysCheckins
    }),[checkins])


    return (
    //@ts-ignore
        <checkInContext.Provider value={value}>
            {children}
        </checkInContext.Provider>
    )

}

export function useCheckInContext() {
    const context = useContext(checkInContext);

    if (!context) throw new Error("fuck off idiot, use it right! blyet")

    return context
}
