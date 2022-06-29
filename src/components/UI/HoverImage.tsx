import { useState } from "react"
import Image, { ImageProps, StaticImageData } from "next/future/image"
import useIsOnMobile from "@/hooks/useIsOnMobile"

interface PropTypes extends ImageProps {
  hoverSrc: StaticImageData // New src for as long as the mouse is hovered over the Image
}

// Next's Image component with 2 srcs depending on mouse hovering state
const HoverImage = ({ src, hoverSrc, alt, ...rest }: PropTypes) => {
  const [isHovered, setIsHovered] = useState(false)
  const isOnMobile = useIsOnMobile()

  return (
    <Image
      src={!isHovered ? src : hoverSrc}
      alt={alt}
      placeholder="blur"
      onMouseEnter={!isOnMobile ? () => setIsHovered(true) : undefined}
      onMouseLeave={!isOnMobile ? () => setIsHovered(false) : undefined}
      onClick={isOnMobile ? () => setIsHovered(!isHovered) : undefined}
      {...rest}
    />
  )
}

export default HoverImage
