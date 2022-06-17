import { ReactNode } from "react"
import styles from "./Button.module.scss"
import cn from "classnames"

interface PropTypes {
  children: ReactNode
  testId?: string
  disabled?: boolean
  variation: "primary" | "secondary" | "regular"
}

const Button = ({ variation, children, disabled, testId }: PropTypes) => {
  const isPrimary = variation === "primary"
  const isSecondary = variation === "secondary"
  return (
    <button
      className={cn(
        styles.btn,
        isPrimary
          ? styles.primary
          : isSecondary
          ? styles.secondary
          : styles.regular
      )}
      data-testid={testId}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
