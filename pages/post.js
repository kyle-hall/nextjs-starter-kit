
import { withRouter } from 'next/router'
import MainLayout from '../comps/layout'

const Content = props => (
  <div>
    <h1>{props.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

const Page = withRouter(props => (
  <MainLayout>
    <Content title={props.router.query.title}/>
  </MainLayout>
))

export default Page
