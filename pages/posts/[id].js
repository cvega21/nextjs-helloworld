import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
<<<<<<< HEAD
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
=======
>>>>>>> bc18bb52480b0e8422e6159993eb41a1b25e5835

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

<<<<<<< HEAD
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
=======
export default function Post ({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br/>
      {postData.id}
      <br/>
      {postData.date}
      <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
    </Layout>
  )
}

>>>>>>> bc18bb52480b0e8422e6159993eb41a1b25e5835
