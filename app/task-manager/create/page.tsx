import CreateTaskForm from "@/components/task-manager/CreateTaskForm";

export default function Page() {
    return (
        <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Create New Task</h2>
            <CreateTaskForm />
        </div>
    );
}