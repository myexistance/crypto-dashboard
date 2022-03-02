import { useEffect, useState } from 'react'
import axios from 'axios'

const NewsFeed = ()  =>  {
  //prtint articles in the NewsFeed section        
  const [articles, setArticles] = useState(null)

  useEffect(() => {
          
      const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
      'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
      'x-rapidapi-key':           '084895d68amshd43646cc4e216f4p1626a4jsn6bf06a1a7aae'
      }
      };          

      axios.request(options).then((response) => {
	console.log(response.data)
          setArticles(response.data)
      }).catch((error) => {
	console.error(error);
      });
  
}, [])

console.log(articles)

const first8articles = articles?.slice(0,8)

  return (
    <div className ="news-feed">
      <h2>News Feed</h2>
      {first8articles?.map(article => (<p>{article.title}</p>))}
    </div>
  )
}

export default NewsFeed
