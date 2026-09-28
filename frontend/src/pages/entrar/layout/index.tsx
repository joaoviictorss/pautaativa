import { Link } from '@tanstack/react-router'

import { AuthMessage } from '@/components/auth-message'
import { AuthShell } from '@/components/auth-shell'
import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'

import type { EntrarFormView, EntrarLayoutProps } from '../data'

function EntrarForm({ email, password, attemptsHint, loading, onSubmit }: EntrarFormView) {
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex animate-[word-in_.4s_cubic-bezier(.16,1,.3,1)] flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <h1 className="m-0 text-3xl font-bold tracking-tight">Entrar</h1>
        <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">Acesse as pautas da sua comunidade.</p>
      </div>

      <Field>
        <FieldLabel htmlFor="l-email">E-mail</FieldLabel>
        <Input
          id="l-email"
          type="email"
          autoComplete="email"
          placeholder="voce@email.com"
          aria-invalid={!!email.error}
          {...email.register}
        />
        <FieldError>{email.error}</FieldError>
      </Field>

      <Field>
        <div className="flex items-baseline justify-between gap-2">
          <FieldLabel htmlFor="l-pw">Senha</FieldLabel>
          <Link to="/esqueci-senha" className="text-[13px] font-medium text-primary hover:underline">
            Esqueci minha senha
          </Link>
        </div>
        <PasswordInput id="l-pw" field={password} autoComplete="current-password" placeholder="Sua senha" />
        <FieldError>{password.error}</FieldError>
        {attemptsHint && (
          <p className="m-0 text-[13px]" style={{ color: 'oklch(0.45 0.09 70)' }} role="status">
            {attemptsHint}
          </p>
        )}
      </Field>

      <Button type="submit" disabled={loading} className="h-11 font-semibold">
        {loading && <Spinner />}
        {loading ? 'Entrando…' : 'Entrar'}
      </Button>

      <p className="m-0 text-center text-sm text-muted-foreground">
        Ainda não tem conta?{' '}
        <Link to="/cadastro" className="font-semibold text-primary hover:underline">
          Criar conta
        </Link>
      </p>
    </form>
  )
}

export function Entrar(props: EntrarLayoutProps) {
  return (
    <AuthShell>
      {props.view === 'form' && <EntrarForm {...props} />}
      {props.view === 'sent' && <AuthMessage key={props.message.title} {...props.message} />}
    </AuthShell>
  )
}
