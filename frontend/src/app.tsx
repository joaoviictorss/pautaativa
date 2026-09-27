import { TooltipProvider } from '@/components/ui/tooltip'

function App() {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <h1 className="font-heading text-3xl font-semibold">PautaAtiva</h1>
      </div>
    </TooltipProvider>
  )
}

export default App
