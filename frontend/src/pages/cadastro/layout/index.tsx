import { Link } from '@tanstack/react-router'
import { CircleCheckIcon } from 'lucide-react'

import { AuthMessage } from '@/components/auth-message'
import { AuthShell } from '@/components/auth-shell'
import { PasswordInput } from '@/components/password-input'
import { PasswordStrength } from '@/components/password-strength'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Spinner } from '@/components/ui/spinner'

import type { CadastroFormView, CadastroLayoutProps } from '../data'

function CadastroForm({ nome, cpf, cpfValid, email, password, passwordValue, loading, onSubmit }: CadastroFormView) {
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex animate-[word-in_.4s_cubic-bezier(.16,1,.3,1)] flex-col gap-[18px]"
    >
      <div className="flex flex-col gap-2">
        <h1 className="m-0 text-3xl font-bold tracking-tight">Criar conta</h1>
        <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">
          Um cadastro por CPF. Você confirma pelo e-mail e já pode votar.
        </p>
      </div>

      <Field>
        <FieldLabel htmlFor="c-nome">Nome completo</FieldLabel>
        <Input
          id="c-nome"
          autoComplete="name"
          placeholder="Marina Souza"
          aria-invalid={!!nome.error}
          {...nome.register}
        />
        <FieldError>{nome.error}</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor="c-cpf">CPF</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="c-cpf"
            inputMode="numeric"
            placeholder="Insira o seu CPF"
            aria-invalid={!!cpf.error}
            {...cpf.register}
          />
          {cpfValid && (
            <InputGroupAddon align="inline-end">
              <CircleCheckIcon className="size-[18px]" style={{ color: 'oklch(0.55 0.14 150)' }} aria-label="CPF válido" />
            </InputGroupAddon>
          )}
        </InputGroup>
        <FieldError>{cpf.error}</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor="c-email">E-mail</FieldLabel>
        <Input
          id="c-email"
          type="email"
          autoComplete="email"
          placeholder="voce@email.com"
          aria-invalid={!!email.error}
          {...email.register}
        />
        <FieldError>{email.error}</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor="c-pw">Senha</FieldLabel>
        <PasswordInput id="c-pw" field={password} autoComplete="new-password" placeholder="Mínimo de 8 caracteres" />
        <PasswordStrength password={passwordValue} />
        <FieldError>{password.error}</FieldError>
      </Field>

      <Button type="submit" disabled={loading} className="mt-1 h-11 font-semibold">
        {loading && <Spinner />}
        {loading ? 'Criando conta…' : 'Criar conta'}
      </Button>

      <p className="m-0 text-center text-sm text-muted-foreground">
        Já tem conta?{' '}
        <Link to="/entrar" className="font-semibold text-primary hover:underline">
          Entrar
        </Link>
      </p>
    </form>
  )
}

export function Cadastro(props: CadastroLayoutProps) {
  return (
    <AuthShell>{props.view === 'form' ? <CadastroForm {...props} /> : <AuthMessage key={props.message.title} {...props.message} />}</AuthShell>
  )
}
