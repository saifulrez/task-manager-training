export const dynamic = "force-dynamic";
import Link from "next/link";

export default function Page() {
    return (
        <div className="max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900">Welcome to Task Manager</h2>
            <p className="mt-2 text-gray-500">
                Manage your tasks — create, view, complete, and delete them from the sidebar.
            </p>
            <div className="mt-6 flex gap-3">
                <Link
                    href="/task-manager/tasks"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    View Tasks
                </Link>
                <Link
                    href="/task-manager/create"
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Create Task
                </Link>
            </div>
        </div>
    );
}
