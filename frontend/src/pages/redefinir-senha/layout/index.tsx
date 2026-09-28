import { AuthMessage } from '@/components/auth-message'
import { AuthShell } from '@/components/auth-shell'
import { PasswordInput } from '@/components/password-input'
import { PasswordStrength } from '@/components/password-strength'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Spinner } from '@/components/ui/spinner'

import type { RedefinirSenhaFormView, RedefinirSenhaLayoutProps } from '../data'

function RedefinirSenhaForm({ password, passwordValue, confirmPassword, loading, onSubmit }: RedefinirSenhaFormView) {
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex animate-[word-in_.4s_cubic-bezier(.16,1,.3,1)] flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <h1 className="m-0 text-3xl font-bold tracking-tight">Crie uma nova senha</h1>
        <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">
          Escolha uma senha que você não usa em outros sites. Depois você entra com ela.
        </p>
      </div>

      <Field>
        <FieldLabel htmlFor="n-pw">Nova senha</FieldLabel>
        <PasswordInput id="n-pw" field={password} autoComplete="new-password" placeholder="Mínimo de 8 caracteres" />
        <PasswordStrength password={passwordValue} />
        <FieldError>{password.error}</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor="n-pw2">Confirme a nova senha</FieldLabel>
        <PasswordInput id="n-pw2" field={confirmPassword} autoComplete="new-password" placeholder="Repita a senha" />
        <FieldError>{confirmPassword.error}</FieldError>
      </Field>

      <Button type="submit" disabled={loading} className="h-11 font-semibold">
        {loading && <Spinner />}
        Salvar nova senha
      </Button>
    </form>
  )
}

export function RedefinirSenha(props: RedefinirSenhaLayoutProps) {
  return (
    <AuthShell>
      {props.view === 'form' ? <RedefinirSenhaForm {...props} /> : <AuthMessage key={props.message.title} {...props.message} />}
    </AuthShell>
  )
}
