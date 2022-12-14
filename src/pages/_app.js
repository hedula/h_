import { ApolloProvider } from '@apollo/client'

import { useApollo } from '../lib/apolloClient'

import '../styles/globals.css'

//function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />
//}

export default function nextApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

//export default MyApp
