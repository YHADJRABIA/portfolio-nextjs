import { SVGProps } from "react"

interface PropTypes extends SVGProps<SVGSVGElement> {
  direction?: "down" | "up"
  isDarkTheme: boolean
}

const SeparatorSVG = ({ direction, isDarkTheme, ...rest }: PropTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundColor: !isDarkTheme ? "" : "var(--secondary-black-color)",
      }}
      viewBox="0 0 1440 320"
      {...rest}
    >
      <path
        fill={
          !isDarkTheme
            ? "var(--primary-gray-color)"
            : "var(--primary-black-color)"
        }
        fillOpacity="1"
        d={
          direction === "down"
            ? "M0,256L60,229.3C120,203,240,149,360,154.7C480,160,600,224,720,240C840,256,960,224,1080,208C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            : "M0,96L40,96C80,96,160,96,240,101.3C320,107,400,117,480,144C560,171,640,213,720,202.7C800,192,880,128,960,101.3C1040,75,1120,85,1200,112C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        }
      ></path>
    </svg>
  )
}

export default SeparatorSVG
