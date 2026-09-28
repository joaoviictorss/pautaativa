import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Toaster } from '@/components/ui/toast'
import { TooltipProvider } from '@/components/ui/tooltip'

function RootLayout() {
  return (
    <TooltipProvider>
      <Toaster>
        <Outlet />
      </Toaster>
      <TanStackRouterDevtools />
    </TooltipProvider>
  )
}

export const Route = createRootRoute({ component: RootLayout })
