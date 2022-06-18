import { websiteUrl } from "@/utilities/general"
import Head from "next/head"
import { ReactNode } from "react"

interface PropTypes {
  title: string
  description: string
  keywords?: string
  author?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  children?: ReactNode
}

const SEO = (props: PropTypes) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author ?? "Yacine Hadj Rabia"} />

      {/* Open Graph */}

      <meta property="og:title" content={props.ogTitle} />
      <meta property="og:description" content={props.ogDescription} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={
          props.ogImage ??
          "https://res.cloudinary.com/yhr-mern-app/image/upload/v1633269542/projects/N%C3%A4kten_qg7vym.jpg"
        }
      />
      <meta property="og:url" content={props.ogUrl ?? websiteUrl} />
      {props.children}
    </Head>
  )
}

export default SEO
