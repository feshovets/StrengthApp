import { useMemo } from "react";

import WeightInput from "../components/input/WeightInput";
import InputWrapper from "../components/input/InputWrapper";

import { useQueryParams } from "../utils/hooks/useQueryParams";
import { calculate1RM } from "../utils/formulas";

const estimationTable = [
    { percentage: 100, reps: 1 },
    { percentage: 95, reps: 2 },
    { percentage: 90, reps: 4 },
    { percentage: 85, reps: 6 },
    { percentage: 80, reps: 8 },
    { percentage: 75, reps: 10 },
    { percentage: 70, reps: 12 },
    { percentage: 65, reps: 16 },
    { percentage: 60, reps: 20 },
    { percentage: 55, reps: 24 },
    { percentage: 50, reps: 30 },
]

export default function Calculator() {
    const { getParam, getNumberParam, updateParam } = useQueryParams();

    const units = getParam("u", "kg") as string;
    const weight = getNumberParam("w");
    const reps = getNumberParam("r");

    // Calculate table values
    const estimation = useMemo(() => estimationTable.map((e) => ({
        ...e,
        weight: (calculate1RM(Number(weight), Number(reps)) * e.percentage) / 100
    })), [weight, reps])

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-4">
            <div className="grid grid-cols-4 bg-zinc-50 py-6 px-8 rounded-md shadow-sm gap-y-2 gap-x-2 sm:gap-x-4">
                <h2 className="col-span-4 text-xl sm:text-2xl font-bold text-center py-2">
                    One Rep Max Calculator
                </h2>
                <InputWrapper label="Weight:" htmlFor="weight">
                    <WeightInput
                        id="weight"
                        weight={weight}
                        setWeight={(value) => updateParam('w', value)}
                        units={units}
                        setUnits={(value) => updateParam('u', value)}
                        className="col-span-3 h-8 sm:h-9"
                    />
                </InputWrapper>
                <InputWrapper label="Repetitions:" htmlFor="reps">
                    <input
                        id="reps"
                        type="number"
                        value={reps ? reps : ""}
                        onChange={(e) => updateParam("r", e.target.value)}
                        className="col-span-3 border border-zinc-400 h-8 sm:h-9 px-2 rounded focus:outline-zinc-500 text-sm sm:text-base"
                    />
                </InputWrapper>
            </div>


            <div className="bg-zinc-50 py-6 px-8 rounded-md shadow-sm space-y-2">
                <h3 className="text-lg sm:text-2xl font-bold text-center py-2 sm:py-4 rounded-md">
                    Your one rep max is {estimation[0].weight.toFixed(1)} kg
                </h3>
                <table className="w-full text-left text-sm sm:text-base">
                    <thead>
                        <tr>
                            <th className="py-2 px-4">Percentage of 1RM</th>
                            <th className="py-2 px-4">Weight</th>
                            <th className="py-2 px-4">Repetitions of 1RM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estimation.map(({ percentage, weight, reps }) => (
                            <tr key={"p-" + percentage} className="border-t border-zinc-400 hover:bg-zinc-200 text-nowrap">
                                <td className="py-2 px-4">{percentage}%</td>
                                <td className="py-2 px-4">{weight.toFixed(1)} {units}</td>
                                <td className="py-2 px-4">{reps}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ExtraTable key={"exRT"} weight={Number(weight)} reps={Number(reps)} units={units} forReps />
            <ExtraTable key={"exWT"} weight={Number(weight)} reps={Number(reps)} units={units} />
        </div>
    );
}

function ExtraTable({
    weight,
    reps,
    units,
    forReps
}: {
    weight: number,
    reps: number,
    units: string,
    forReps?: boolean
}) {
    const extraWeight = [2.5, 5, 7.5, 10].map(w => ({ weight: weight + w, reps: reps, oneRM: calculate1RM(weight + w, reps) }));
    const extraReps = [1, 2, 3, 4].map(r => ({ weight: weight, reps: reps + r, oneRM: calculate1RM(weight, reps + r) }));

    const tableData = forReps ? extraReps : extraWeight;

    return (
        <div className="relative bg-zinc-50 py-6 px-8 rounded-md shadow-sm space-y-2">
            <h3 className="text-lg sm:text-2xl font-bold text-center py-2 sm:py-4 rounded-md leading-5">
                Estimated 1RM for {" "} <br className="sm:hidden"/>
                <span className="underline">x</span>
                {" "}more{" "}
                <span className="underline">
                    {forReps ? "reps" : "weight"}
                </span>
            </h3>
            <table className="w-full text-left text-sm sm:text-base">
                <thead>
                    <tr>
                        <th className="py-2 px-4">Weight</th>
                        <th className="py-2 px-4">Reps</th>
                        <th className="py-2 px-4">1RM</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(({ weight, reps, oneRM }) => (
                        <tr key={"w" + weight + "r" + reps} className="border-t border-zinc-400 hover:bg-zinc-200 text-nowrap">
                            <td className="py-2 px-4">{weight}</td>
                            <td className="py-2 px-4">{reps}</td>
                            <td className="py-2 px-4">{oneRM.toFixed(1)} {units}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
