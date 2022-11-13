import React from 'react'
import Head from 'next/head'

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Flora Islandicus</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
