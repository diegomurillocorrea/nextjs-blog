import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a young man who is constantly learning. I help to share with others the teaching I have received. I am a leader who positively influences people. I am characterized by seeking order in every way. I like to work in a clean environment, being attentive to my personal presentation. I use constructive opinions of others always maintaining respect and I like to give my point of view to solve problems.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}