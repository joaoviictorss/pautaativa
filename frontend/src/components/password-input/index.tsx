import { useState } from 'react'

import { PasswordInput as Layout } from './layout'
import type { PasswordInputLayoutProps, PasswordInputProps } from './data'

export function PasswordInput(props: PasswordInputProps) {
  const [visible, setVisible] = useState(false)

  const layoutProps: PasswordInputLayoutProps = {
    ...props,
    visible,
    onToggleVisible: () => setVisible((v) => !v),
  }

  return <Layout {...layoutProps} />
}
