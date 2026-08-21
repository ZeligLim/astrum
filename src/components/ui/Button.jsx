/** Shadcn-inspired button primitive using native button semantics. */
export function Button({ children, variant = "default", className = "", ...props }) {
  return <button className={`button button-${variant} ${className}`} {...props}>{children}</button>;
}
