import { useEffect, useState } from 'react'
import { getArticles } from '../../utils/api'
import { type ArticleInterface } from '../../types/Article.interface'
import { Link } from 'react-router'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      try {
        setError(null)
        const data = await getArticles()
        setArticles(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      {isLoading && <div className="loading">loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {!isLoading && !error && articles.length > 0 && (
        articles.map(({ id, title, slug }) => (
          <h2 key={id}>
            <Link to={`${slug}/${id}`} state={{ id }}>
              {title}</Link>
          </h2>
        ))
      )}
    </div>
  )
}

export default Articles