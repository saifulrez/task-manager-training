import { Skeleton } from "@heroui/react";

export default function Loading() {
    return (
        <>
            <div className="grid w-full max-w-xl grid-cols-3 gap-4 m-4">
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
            </div>
            <div className="grid w-full max-w-xl grid-cols-3 gap-4 m-4">
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
            </div>
            <div className="grid w-full max-w-xl grid-cols-3 gap-4 m-4">
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
            </div>
            <div className="grid w-full max-w-xl grid-cols-3 gap-4 m-4">
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
                <Skeleton className="h-24 rounded-xl" />
            </div>
        </>
    );
}