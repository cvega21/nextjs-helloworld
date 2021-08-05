import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout'

const FirstPost = (props) => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post!</h1>
      <h2>
        Go Back to{' '}
        <Link href='/'>
          <a>Home Page</a>
        </Link>
      </h2>
    </Layout>
  ) 
  

}

export default FirstPost
