
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import MainLayout from '../comps/layout'

const Post = props => (
  <MainLayout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?\w+>/g, '')}</p>
    <img src={props.show.image.medium}/>
  </MainLayout>
)

Post.getInitialProps = async context => {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`> Fetched show: ${show.name}`)

  return { show }
}

export default Post
