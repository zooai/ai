'use server'
import 'server-only'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { type Chats } from '@/lib/types'

export async function getChats(userId?: string | null) {
  if (!userId) {
    return []
  }
  try {
    const chats = await prisma.chat.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        messages: true,
        sharePath: true,
        createdAt: true,
        userId: true
      }
    })
    return chats as unknown as Chats[]
  } catch (error) {
    console.error('Error fetching chats:', error)
    return []
  }
}

export async function getChat(id: string, userId?: string) {
  try {
    const chat = await prisma.chat.findFirst({
      where: { id, ...(userId ? { userId } : {}) }
    })
    return chat as unknown as Chats | null
  } catch (error) {
    console.error('Error fetching chat:', error)
    return null
  }
}

export async function removeChat({ id, path }: { id: string; path: string }) {
  try {
    await prisma.chat.delete({ where: { id } })
    revalidatePath('/')
    return revalidatePath(path)
  } catch (error) {
    return { error: 'Unauthorized' }
  }
}

export async function clearChats(userId: string) {
  try {
    await prisma.chat.deleteMany({ where: { userId } })
    revalidatePath('/')
    return redirect('/')
  } catch (error) {
    console.log('clear chats error', error)
    return { error: 'Unauthorized' }
  }
}

export async function getSharedChat(id: string) {
  try {
    const chat = await prisma.chat.findFirst({
      where: {
        id,
        sharePath: { not: null }
      }
    })
    return chat as unknown as Chats | null
  } catch (error) {
    console.error('Error fetching shared chat:', error)
    return null
  }
}

export async function shareChat(chat: Chats) {
  const sharePath = `/share/${chat.id}`

  try {
    await prisma.chat.update({
      where: { id: chat.id },
      data: { sharePath }
    })
    return { ...chat, sharePath }
  } catch (error) {
    console.error('Error sharing chat:', error)
    return chat
  }
}

export async function saveChat(chat: Chats) {
  try {
    await prisma.chat.upsert({
      where: { id: chat.id },
      update: {
        title: chat.title,
        messages: chat.messages as any,
        sharePath: chat.sharePath
      },
      create: {
        id: chat.id,
        title: chat.title,
        userId: chat.userId,
        messages: chat.messages as any,
        sharePath: chat.sharePath
      }
    })
  } catch (error) {
    console.error('Error saving chat:', error)
  }
}
