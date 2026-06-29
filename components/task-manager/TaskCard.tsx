"use client"

import { useTransition } from "react"
import { Button, Card, CardContent, Chip } from "@heroui/react"
import { markTaskDone, deleteTask } from "@/services/task-manager/actions"

type Task = {
    id: string
    title: string
    person: string | null
    description: string | null
    done: boolean
    createdAt: Date
}

export default function TaskCard({ task }: { task: Task }) {
    const [isDonePending, startDoneTransition] = useTransition()
    const [isDeletePending, startDeleteTransition] = useTransition()

    function handleDone() {
        startDoneTransition(async () => {
            await markTaskDone(task.id)
        })
    }

    function handleDelete() {
        startDeleteTransition(async () => {
            await deleteTask(task.id)
        })
    }

    return (
        <Card>
            <Card.Header className="flex items-start justify-between gap-3">
                <div>
                    <Card.Title>{task.title}</Card.Title>
                    {task.description && (
                        <Card.Description>{task.description}</Card.Description>
                    )}
                </div>
                <div className="absolute top-2 right-4">
                    <Chip color={task.done ? "success" : "warning"} variant="soft" size="sm">
                        {task.done ? "Done" : "Pending"}
                    </Chip>
                </div>
            </Card.Header>
            <Card.Content>
                {task.person && (
                    <div className="font-semibold">{task.person}</div>
                )}
            </Card.Content>
            <Card.Footer className="flex items-center justify-between">
                <p className="text-xs text-muted">
                    {new Date(task.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
                <div className="flex gap-2">
                    {!task.done && (
                        <Button
                            variant="primary"
                            size="sm"
                            isPending={isDonePending}
                            onPress={handleDone}
                        >
                            Mark as Done
                        </Button>
                    )}
                    <Button
                        variant="danger"
                        size="sm"
                        isPending={isDeletePending}
                        onPress={handleDelete}
                    >
                        Delete
                    </Button>
                </div>
            </Card.Footer>
        </Card>
    )
}