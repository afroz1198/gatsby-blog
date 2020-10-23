import { Link } from "gatsby"
import React from "react"
import { MdDateRange } from "react-icons/md"
import { AiOutlineClockCircle } from "react-icons/ai"
import { FaRegHandPointRight } from "react-icons/fa"
import styled from "styled-components"
import Tagger from "../Tagger"
import { PostItem } from "./types"

const Post: React.FC<PostItem> = ({ frontmatter }) => {
  const { title, categories, slug, date, excerpt, time_to_read } = frontmatter
  return (
    <Wrapper>
      <div className="post">
        <h3>{title}</h3>
        <Tagger categories={categories} />
        <p className="post__excerpt">{excerpt}</p>
        <div className="post__footer">
          <Link to={`/articles/${slug}`} className="post__footer--link">
            show article <FaRegHandPointRight />
          </Link>

          <span className="post__footer--info">
            <AiOutlineClockCircle></AiOutlineClockCircle>
            {`${time_to_read} read`}
            <MdDateRange />
            {date}
          </span>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  font-size: 1rem;
  margin: 1rem 0;
  padding: 0 1rem;
  position: relative;
  clear: both;

  .post {
    p {
      margin: 0;
    }

    h3 {
      font-weight: 600;
      margin: 0.2rem 0;
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      color: var(--color--dark-purple--bg);
      margin-bottom: 1rem;

      &--link {
        margin-right: 0.5em;
        font-weight: 400;
        svg {
          margin: 0 0.3em -0.1em 0;
          text-decoration: none;
        }
      }

      &--info {
        display: flex;
        align-items: center;
        svg {
          margin: 0 0.5em;
          text-decoration: none;
        }
      }
    }
  }
`

export default Post
