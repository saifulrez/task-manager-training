import Link from "next/link"

const menu = [
    { label: "Home", href: "/task-manager" },
    { label: "All Tasks", href: "/task-manager/tasks" },
    { label: "Create Task", href: "/task-manager/create" },
]

export default function Sidenav() {
    return (
        <aside className="w-52 shrink-0 border-r border-gray-200 bg-white p-4">
            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Menu
            </p>
            <nav className="space-y-1">
                {menu.map(({ label, href }) => (
                    <Link
                        key={href}
                        href={href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}