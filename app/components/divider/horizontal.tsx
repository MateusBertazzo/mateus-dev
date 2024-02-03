import { cn } from "../lib/util";

type HorizontalDividerProps = {
    className?: string;
}

export const HorizontalDivider = ({ className }: HorizontalDividerProps) => {
    return (
        <hr className={cn('w-full my-8 border-b border-b-gray-800', className)} />
    )
}