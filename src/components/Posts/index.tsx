import React from "react"
import { Link } from "gatsby"

import Post from "./Post"
import styled from "styled-components"
import { PostItem } from "./types"

interface PostsProps {
  className?: string
  posts: PostItem[]
  title: string
}

const Posts: React.FC<PostsProps> = ({ className, posts, title }) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      <div className="articles">
        {posts.map((post, index) => {
          return <Post key={index} {...post} />
        })}
        <div className="articles__more">
          Check out{" "}
          <Link to="/articles">
            <em>Articles</em>
          </Link>{" "}
          for more...
        </div>
      </div>
    </section>
  )
}

export default styled(Posts)`
  margin: 1rem 0;
  display: grid;
  grid-column: 1/13;
  text-align: center;

  .articles {
    text-align: left;
    max-width: 100%;
    margin: 0 auto;

    @media all and (min-width: 1024px) {
      max-width: 80%;
    }
    > :not(:last-of-type) {
      border-bottom: 1px solid var(--clr-grey);
    }
    &__more {
      padding: 2rem 0 0 0;
      text-align: left;
      em {
        font-weight: 400;
      }
    }
  }
`
