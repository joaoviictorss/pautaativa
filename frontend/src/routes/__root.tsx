import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { TooltipProvider } from '@/components/ui/tooltip'

function RootLayout() {
  return (
    <TooltipProvider>
      <Outlet />
      <TanStackRouterDevtools />
    </TooltipProvider>
  )
}

export const Route = createRootRoute({ component: RootLayout })
