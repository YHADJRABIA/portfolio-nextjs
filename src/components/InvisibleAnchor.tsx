interface PropTypes {
  id: string
}

// Invisible anchor to offset nav height
const InvisibleAnchor = ({ id }: PropTypes) => {
  return (
    <a id={id} href="https://github.com/YHADJRABIA/" className="anchor"></a>
  )
}

export default InvisibleAnchor
