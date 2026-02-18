import type { checkIn, dayStats, moods } from "../types"
import { useMemo } from "react"

export function useDayStats(checkIns: checkIn[]) {

    const dayStats: dayStats = useMemo(
        () => {
            const numberOfCheckins = checkIns.length;
            const moodDistribution: Record<moods, number> = {
                great: 0,
                good: 0,
                okay: 0,
                tired: 0,
                stressed: 0
            };
            let totalEnergy = 0;

            checkIns.forEach(check => {
                totalEnergy += check.energy;
                moodDistribution[check.mood]++
            })

            return {
                averageEnergy: (totalEnergy / numberOfCheckins),
                moodDistribution: moodDistribution,
                totalCheckins: numberOfCheckins
            }
        }, [checkIns]
    )

    return dayStats;
}
