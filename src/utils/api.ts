import axios from 'axios'
import type { ArticleInterface } from '../types/Article.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const getArticles = async () => {
  try {
    const params = {
      _start: 0,
      _limit: 20
    }
    const response = await axios.get(API_URL, { params })
    const articles: ArticleInterface[] = response.data.map((article: Partial<ArticleInterface>) => ({
      ...article,
      slug: article.title?.toLocaleLowerCase().replace(/\s+/g, '-')
    }))
    return articles
  } catch (error: unknown) {
    throw new Error(`Failed to fetch data:${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

export const getSingleArticle = async (slug: string) => {
  try {
    const response = await axios.get(`${API_URL}/${slug}`)
    const data: ArticleInterface | null = response.data

    if (!data) throw new Error('Article not found')

    const article: ArticleInterface = {
      ...data,
      slug: data.title?.toLocaleLowerCase().replace(/\s+/g, '-')
    }

    return article
  } catch (error: unknown) {
    throw new Error(`Failed to fetch data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}