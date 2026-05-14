interface Props {
  label: string
  variant?: 'code' | 'creative'
}

export function SkillTag({ label, variant = 'code' }: Props) {
  const base = 'inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide border transition-colors'
  const styles = {
    code: 'border-accent/30 text-accent bg-accent/10 hover:bg-accent/20',
    creative: 'border-text-primary/20 text-text-primary/70 bg-text-primary/5 hover:bg-text-primary/10',
  }
  return <span className={`${base} ${styles[variant]}`}>{label}</span>
}
