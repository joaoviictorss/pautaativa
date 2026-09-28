import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'

import type { PasswordInputLayoutProps } from '../data'

export function PasswordInput({ id, field, autoComplete, placeholder, visible, onToggleVisible }: PasswordInputLayoutProps) {
  return (
    <InputGroup>
      <InputGroupInput
        id={id}
        type={visible ? 'text' : 'password'}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!field.error}
        {...field.register}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          type="button"
          size="icon-xs"
          aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
          aria-controls={id}
          onClick={onToggleVisible}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
