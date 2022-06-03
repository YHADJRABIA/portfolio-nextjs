import React, { useState } from "react"
import Image, { ImageProps } from "next/image"

interface PropsType extends ImageProps {
  hoverSrc: string // New src for as long as the mouse is hovered over the Image
}

// Next's Image component with 2 srcs depending on mouse hovering state
const HoverImage = ({ src, hoverSrc, alt, ...rest }: PropsType) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Image
      src={!isHovered ? src : hoverSrc}
      alt={alt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    />
  )
}

export default HoverImage
