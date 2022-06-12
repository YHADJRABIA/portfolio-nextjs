import { FC } from "react"

interface IAnimation {
  content?: string
}

const Animation: FC<IAnimation> = ({ content }) => {
  return (
    <i className="fas fa-cog fa-spin"></i>
    // <div className="loading-animation">
    //
    // {content}
    // </div>
  )
}

export default Animation
