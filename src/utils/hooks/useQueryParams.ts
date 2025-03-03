import { useSearchParams } from "react-router-dom";

export function useQueryParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    const getParam = (key: string, defaultValue: string | null = null) =>
        searchParams.get(key) ?? defaultValue;

    const getNumberParam = (key: string, defaultValue: number | null = null) =>
        searchParams.get(key) !== null ? Number(searchParams.get(key)) : defaultValue;

    const updateParam = (key: string, value: string | number | null) => {
        const newParams = new URLSearchParams(searchParams);
        // Preserve valid falsey values
        if (value !== null) newParams.set(key, value.toString());
        else newParams.delete(key);
        setSearchParams(newParams);
    };

    return { getParam, getNumberParam, updateParam };
}
