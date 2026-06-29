"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createTask(formData: FormData) {
    const title = (formData.get("title") as string).trim()
    const description = (formData.get("description") as string | null)?.trim() || null
    const person = (formData.get("person") as string).trim()

    if (!title) return

    await prisma.task.create({
        data: { title, description, person },
    })

    revalidatePath("/task-manager/tasks")
}

export async function markTaskDone(id: string) {
    await prisma.task.update({
        where: { id },
        data: { done: true },
    })
    revalidatePath("/task-manager/tasks")
}

export async function deleteTask(id: string) {
    await prisma.task.delete({
        where: { id },
    })
    revalidatePath("/task-manager/tasks")
}
