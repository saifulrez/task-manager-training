export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma"
import TaskCard from "@/components/task-manager/TaskCard"
import Link from "next/link"
import { Skeleton } from "@heroui/react"

export default async function TasksPage() {
    const tasks = await prisma.task.findMany({
        orderBy: { createdAt: "desc" },
    })

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">All Tasks</h2>
                <Link
                    href="/task-manager/create"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    + New Task
                </Link>
            </div>

            {tasks.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
                    <p className="text-gray-500">No tasks yet.</p>
                    <Link
                        href="/task-manager/create"
                        className="mt-3 inline-block text-sm text-blue-600 hover:underline"
                    >
                        Create your first task →
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    )
}
