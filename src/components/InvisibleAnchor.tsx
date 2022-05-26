import React from "react"

interface PropsType {
  id: string
}

// Invisible anchor to offset nav height
const InvisibleAnchor = ({ id }: PropsType) => {
  return (
    <a id={id} href="https://github.com/YHADJRABIA/" className="anchor"></a>
  )
}

export default InvisibleAnchor
