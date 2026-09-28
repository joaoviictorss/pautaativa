import { createFileRoute, Outlet } from '@tanstack/react-router'

import { requireGuest } from '@/lib/auth/guards'

export const Route = createFileRoute('/_visitante')({
  beforeLoad: requireGuest,
  component: Outlet,
})
