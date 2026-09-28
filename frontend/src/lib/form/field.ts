import type { FieldValues, Path, RegisterOptions, UseFormRegisterReturn, UseFormReturn } from 'react-hook-form'

/** O que o layout (dumb) precisa pra renderizar um input controlado pelo RHF. */
export interface FormField {
  register: UseFormRegisterReturn
  error?: string
}

export function formField<T extends FieldValues>(
  form: UseFormReturn<T>,
  name: Path<T>,
  options?: RegisterOptions<T, Path<T>>
): FormField {
  const error = form.formState.errors[name]

  return {
    register: form.register(name, options),
    error: typeof error?.message === 'string' ? error.message : undefined,
  }
}
