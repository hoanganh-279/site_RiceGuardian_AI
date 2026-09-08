import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

export function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}) {
  const ref = useRevealOnScroll({ once: true })

  return (
    <Tag
      ref={ref}
      className={`rg-reveal rg-reveal-up ${className}`.trim()}
      style={delay ? { '--rg-reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
