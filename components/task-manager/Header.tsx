export default function Header() {
    return (
        <header className="flex items-center justify-between bg-gray-900 px-6 py-4">
            <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500">
                    <span className="text-sm font-bold text-white">T</span>
                </div>
                <h1 className="text-lg font-bold text-white">Task Manager</h1>
            </div>
            <span className="text-sm text-gray-400">Mini Project</span>
        </header>
    )
}