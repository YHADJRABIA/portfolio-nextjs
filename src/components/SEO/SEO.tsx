import { websiteUrl } from "@/utilities/general"
import Head from "next/head"
import { FC, ReactNode } from "react"

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

const SEO: FC<PropTypes> = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  children,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author ?? "Yacine Hadj Rabia"} />

      {/* Open Graph */}

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={
          ogImage ??
          "https://res.cloudinary.com/yhr-mern-app/image/upload/v1633269542/projects/N%C3%A4kten_qg7vym.jpg"
        }
      />
      <meta property="og:url" content={ogUrl ?? websiteUrl} />
      {children}
    </Head>
  )
}

export default SEO
