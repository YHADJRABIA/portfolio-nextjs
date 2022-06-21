import type { NextPage } from "next"
import Head from "next/head"
import styles from "./500.module.scss"

const InternalServerError: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yacine Hadj Rabia | 500</title>
      </Head>

      <h3>(TO BE IMPLEMENTED)</h3>
    </>
  )
}

// To avoid build's minified name not matching development's Component.name
InternalServerError.displayName = "InternalServerError"

export default InternalServerError
