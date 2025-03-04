import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

import Card from "../components/card/Card";
import Input from "../components/input/Input";
import InputWrapper from "../components/input/InputWrapper";
import WeightInput from "../components/input/WeightInput";
import SelectInput from "../components/input/SelectInput";

import { useQueryParams } from "../utils/hooks/useQueryParams";
import { Exercise, Gender, standarts } from "../utils/standarts";
import { dictionary } from "../utils/dictionary";
import { calculate1RM } from "../utils/formulas";

function Standarts() {
    const { getParam, getNumberParam, updateParam } = useQueryParams();

    // Read values from URL (no need to store separately in state)
    const units = getParam("u", "kg") as string;
    const gender = getParam("g", "male") as Gender;
    const exercise = getParam("ex", "squat") as Exercise;

    const bodyweight = getNumberParam("bw");
    const weight = getNumberParam("w");
    const reps = getNumberParam("r");


    const oneRepMax = useMemo(() => calculate1RM(Number(weight), Number(reps)), [weight, reps]);

    return (
        <div className="w-full max-w-3xl mx-auto space-y-4 px-4">
            <Card className="grid grid-cols-4 py-6 px-8 gap-y-2 gap-x-2 sm:gap-x-4">
                <div className="col-span-4 py-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-center rounded-md">
                        Strength Standards
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-500 text-center leading-4">
                        (according to your time spent in the gym)
                    </p>
                </div>

                <InputWrapper label="Gender:" htmlFor="gender">
                    <SelectInput
                        id="gender"
                        value={gender}
                        setValue={(value) => { updateParam("g", value) }}
                        options={dictionary.gender}
                        className="col-span-3 h-8 sm:h-9"
                    />
                </InputWrapper>
                <InputWrapper label="Bodyweight:" htmlFor="bodyweight">
                    <WeightInput
                        id="bodyweight"
                        units={units}
                        weight={bodyweight}
                        setUnits={(value) => { updateParam("u", value) }}
                        setWeight={(value) => { updateParam("bw", value) }}
                        className="col-span-3 h-8 sm:h-9 "
                    />
                </InputWrapper>
            </Card>

            <Card className="grid grid-cols-4 py-6 px-8 gap-y-2 gap-x-2 sm:gap-x-4">
                <InputWrapper label="Exercise:" htmlFor="exercise">
                    <SelectInput
                        id="exercise"
                        value={exercise}
                        setValue={(value) => { updateParam("ex", value) }}
                        options={dictionary.exercise}
                        className="col-span-3 h-8 sm:h-9"
                    />
                </InputWrapper>
                <InputWrapper label="Weight:" htmlFor="weigth">
                    <WeightInput
                        id="weight"
                        units={units}
                        weight={weight}
                        setUnits={(value) => { updateParam("u", value) }}
                        setWeight={(value) => { updateParam("w", value) }}
                        className="col-span-3 h-8 sm:h-9"
                    />
                </InputWrapper>
                <InputWrapper label="Repetitions:" htmlFor="reps">
                    <Input
                        id="reps"
                        type="number"
                        value={reps ? reps : ""}
                        onChange={(e) => updateParam("r", e.target.value)}
                        className="col-span-3 border h-8 sm:h-9 px-2 rounded text-sm sm:text-base"
                    />
                </InputWrapper>
            </Card>

            <BarChart
                oneRepMax={oneRepMax}
                bodyweight={Number(bodyweight)}
                exercise={exercise}
                gender={gender}
                units={units}
            />
        </div>
    );
}

function BarChart({
    oneRepMax,
    bodyweight,
    exercise,
    gender,
    units
}: {
    oneRepMax: number,
    bodyweight: number,
    exercise: Exercise,
    gender: Gender,
    units: string,
}) {
    const ratios = standarts[gender][exercise];
    const level = ratios.reduce((level, ratio) => oneRepMax >= ratio * bodyweight ? level + 1 : level, -1);
    const isHidden = oneRepMax == 0 || bodyweight == 0;

    const bars = useMemo(() => ratios.map((ratio, index) => {
        const levelWeight = bodyweight * ratio; //weight for specific strength level
        const isOpacity = isHidden || oneRepMax * index < levelWeight * index; //if index 0 (beginner) 0 < 0 equal false

        return (
            <div
                key={'bar-' + String(index)}
                style={{ height: `${String(30 + index * 15)}%` }}
                className={twMerge("flex flex-col space-y-1 transition-opacity min-h-20 text-center", isOpacity && "opacity-50 dark:opacity-30")}
            >
                <p className="sm:text-xl font-bold">
                    {levelWeight}
                    <span className="text-sm sm:text-lg">{units}</span>
                </p>

                <div className={
                    twMerge("flex grow text-white bg-zinc-800 dark:bg-zinc-200 dark:text-black  rounded items-center justify-center transition-color",
                        Math.max(level, 0) == index && !isOpacity && "text-black bg-rose-500 dark:bg-rose-500"
                    )}>
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold opacity-30">
                        {ratio.toFixed(2)}{"x"}
                    </p>
                </div>

                <h5 className="text-xs sm:text-base font-bold capitalize truncate">
                    {dictionary.levels[index]}
                </h5>
            </div>
        )
    }), [bodyweight, oneRepMax, ratios])


    return (
        <Card className={twMerge("py-6 px-4 sm:px-8 overflow-hidden transition-all")}>
            <div className="text-center pt-2 sm:pt-4 space-y-0.5">
                <h2 className="text-lg sm:text-2xl font-bold">
                    Your <span className="underline">{exercise}</span> strength level: {' '}
                    {!isHidden && <span className={"underline capitalize"}> {dictionary.levels[Math.max(level, 0)]}</span>}
                </h2>
                <p className="text-xs sm:text-base font-semibold text-zinc-500 transition-all">
                    your estimated one rep max:{' '}
                    {!isHidden && <span>{oneRepMax.toFixed(1)}{' '}{units}</span>}
                </p>
            </div>
            <div className={"grid grid-cols-5 gap-2 sm:gap-x-4 aspect-[1.5] items-end"}>
                {bars}
            </div>
        </Card>
    )
}

export default Standarts;
