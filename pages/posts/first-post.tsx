import React from 'react';
import Link from 'next/link';

const FirstPost = (props: any) => {
  return (
    <>
      <h1>First Post!</h1>
      <h2>
        Go Back to{' '}
        <Link href='/'>
          <a>Home Page</a>
        </Link>
      </h2>
    </>
  ) 
  

}

export default FirstPost
