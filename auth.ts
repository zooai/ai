import 'server-only'
import { cookies } from 'next/headers'

// Stub auth for now - will be replaced with proper auth system
export const auth = async ({
  cookieStore
}: {
  cookieStore: ReturnType<typeof cookies>
}) => {
  // TODO: Implement proper auth with NextAuth or similar
  return null
}
