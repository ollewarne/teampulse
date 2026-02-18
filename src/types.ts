export type moods = "great" | "good" | "okay" | "tired" | "stressed";

export type energyLevel = 1 | 2 | 3 | 4 | 5;

export interface checkIn {
    id: string;
    name: string;
    mood: moods;
    energy: energyLevel;
    comment?: string;
    timestamp: Date;
}

export interface dayStats {
    averageEnergy: number;
    moodDistribution: Record<moods, number>;
    totalCheckins: number;
}
