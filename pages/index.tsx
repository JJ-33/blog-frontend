import { VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      </header>
      <main>
      <VStack>
        <Link href='/blog-00'><a>blog 0</a></Link>
        <Link href='/blog-01'><a>blog 1</a></Link>
      </VStack>
      </main>
    </div>
  )
}

export default Home
