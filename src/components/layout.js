import Head from 'next/head'

import Footer from '../components/organisms/footer'


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>時序台</title>
      </Head>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}