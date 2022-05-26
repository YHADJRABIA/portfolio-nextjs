// To overwrite default any type to more secure typing
declare module "../svgs/*.svg" {
  import React from "react"

  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  export default Component
}
