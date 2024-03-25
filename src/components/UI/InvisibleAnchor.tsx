interface PropTypes {
  id: string
}

const DUMMY_HREF = "https://github.com/YHADJRABIA/" // To enforce href on a tag

// Invisible anchor to offset nav height
const InvisibleAnchor = ({ id }: PropTypes) => {
  return <a id={id} href={DUMMY_HREF} className="anchor"></a>
}

export default InvisibleAnchor
