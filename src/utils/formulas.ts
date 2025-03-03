export const calculate1RM = (weight: number, reps: number, formula?: "adams" | "epley"): number => {
    if (formula == "adams") {
        return adams1RM(weight, reps);
    }
    return epley1RM(weight, reps);
}

const epley1RM = (weight: number, reps: number): number => {
    if (reps === 1) return weight; // 1RM is just the weight lifted
    return weight * (1 + reps * 0.0333); // Epley
};

const adams1RM = (weight: number, reps: number): number => {
    if (reps === 1) return weight; // 1RM is just the weight lifted
    return weight * (1 / (1 - 0.02 * reps)); // Adams
};

