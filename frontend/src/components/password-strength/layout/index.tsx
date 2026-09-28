import type { PasswordStrengthLayoutProps } from '../data'

export function PasswordStrength({ strength }: PasswordStrengthLayoutProps) {
  return (
    <>
      <div className="grid grid-cols-4 gap-1" aria-hidden="true">
        {strength.bars.map((color, i) => (
          <span key={i} className="h-1 rounded-full transition-colors" style={{ background: color }} />
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Use letras, números e um símbolo.</span>
        <span className="font-semibold" style={{ color: strength.color }} aria-live="polite">
          {strength.label}
        </span>
      </div>
    </>
  )
}
