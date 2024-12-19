import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=816ba614442e469ab83da33fbf1d21c4`
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles))

  }, [category])

  return (
    <>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles && articles.map((news, i) => {
        return (
          <NewsItem key={i} title={news.title} description={news.description} src={news.urlToImage} url={news.url}></NewsItem>
        )
      })}
    </>
  )
}

export default NewsBoard