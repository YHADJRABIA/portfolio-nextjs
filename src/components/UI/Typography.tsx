import React from "react"

const Typography = ({ as = "p", children, className, ...props }) => {
  return React.createElement(
    as,
    {
      className: `${className}`,
      ...props,
    },
    children
  )
}

export default Typography
