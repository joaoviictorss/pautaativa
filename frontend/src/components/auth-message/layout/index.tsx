import { ArrowLeftIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

import type { AuthMessageLayoutProps } from '../data'

export function AuthMessage({
  title,
  description,
  primary,
  secondary,
  back,
}: AuthMessageLayoutProps) {
  return (
    <div className="flex animate-[word-in_.4s_cubic-bezier(.16,1,.3,1)] flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="m-0 text-3xl font-bold tracking-tight text-balance">{title}</h1>
        <p className="m-0 text-[15px] leading-relaxed text-pretty text-muted-foreground">
          {typeof description === 'string' ? (
            description
          ) : (
            <>
              {description.before}
              <span className="font-semibold break-all text-foreground">{description.highlight}</span>
              {description.after}
            </>
          )}
        </p>
      </div>

      {primary && (
        <Button
          type="button"
          disabled={primary.disabled || primary.loading}
          onClick={primary.onClick}
          className="h-11 font-semibold"
        >
          {primary.loading && <Spinner />}
          {primary.label}
        </Button>
      )}

      {secondary && (
        <Button
          type="button"
          variant="outline"
          disabled={secondary.disabled}
          onClick={secondary.onClick}
          className="h-11 font-semibold"
        >
          {secondary.label}
        </Button>
      )}

      {back && (
        <button
          type="button"
          onClick={back.onClick}
          className="inline-flex items-center gap-1.5 self-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" />
          {back.label}
        </button>
      )}
    </div>
  )
}
