type Url = {
  link: string
  name: string
}

export type ProjectItem = {
  frontmatter: {
    urls: Url[]
    image: any
    date: string
    excerpt: string
    title: string
    categories: string[]
  }
}
