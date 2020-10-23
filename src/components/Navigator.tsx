import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//pageName should be /{name};

type NavigatorProps = {
  className?: string
  currentPage: number
  pageName: string
  numPages: number
}

const Navigator: React.FC<NavigatorProps> = ({
  className,
  currentPage,
  pageName,
  numPages,
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? `${pageName}` : `${pageName}/${currentPage - 1}`
  const nextPage = `${pageName}/${currentPage + 1}`
  return (
    <div className={`${className} navigator`}>
      {!isFirst && (
        <Link to={prevPage} className="navigator__prev">
          Newer
        </Link>
      )}

      {Array.from({ length: numPages }).map((_, index) => {
        return (
          <Link
            key={index}
            to={`${pageName}/${index === 0 ? "" : index + 1}`}
            className={
              index + 1 === currentPage
                ? `navigator__link navigator__active`
                : `navigator__link`
            }
          >
            {index + 1}
          </Link>
        )
      })}
      {!isLast && (
        <Link to={nextPage} className="navigator__next">
          Previous
        </Link>
      )}
    </div>
  )
}

export default styled(Navigator)`
  text-align: center;
  margin-top: 1.5em;

  .navigator {
    &__prev,
    &__next {
      font-weight: 400;
      margin: 0.5rem;
      padding: 1rem 0.7rem;
    }
    &__link {
      margin: 0 0.5rem;
      padding: 1rem 1.5rem;
      border-radius: 6px;
    }
    &__active {
      background-color: #111;
      color: var(--clr-green-light);
    }
  }
`
