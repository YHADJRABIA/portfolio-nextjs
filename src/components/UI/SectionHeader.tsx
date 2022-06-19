import { ReactNode } from "react"
import styles from "./SectionHeader.module.scss"

interface PropTypes {
  title: string
  content: string | ReactNode
  textAlign?: "left" | "center" | "right"
}

const SectionHeader = ({ title, content, textAlign }: PropTypes) => {
  const styling = {
    textAlign: textAlign || "left",
  }

  return (
    <div className={styles.sectionHeader}>
      <h2>{title}</h2>
      <p className={styles.content} style={styling}>
        {content}
      </p>
    </div>
  )
}

export default SectionHeader
