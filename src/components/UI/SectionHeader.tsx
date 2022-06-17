import styles from "./SectionHeader.module.scss"

interface PropTypes {
  title: string
  content: string
}

const SectionHeader = ({ title, content }: PropTypes) => {
  return (
    <div className={styles.sectionHeader}>
      <h2>{title}</h2>
      <p className={styles.content}>{content}</p>
    </div>
  )
}

export default SectionHeader
