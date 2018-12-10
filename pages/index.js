
import Link from 'next/link'

import Header from '../comps/header'
import MainLayout from '../comps/layout'

const PostLink = props => (
  <li>
    <Link
      as={`/p/${props.id}`}
      href={`post?title=${props.title}`}
    >
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = _ => (
  <MainLayout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello, Next.js" />
      <PostLink id="learn-nextjs-the-hard-way" title="Learn Next.js the hard way" />
      <PostLink id="deploy-apps-with-zeit" title="Deploy apps with Zeit" />
    </ul>
  </MainLayout>
)

export default Index
