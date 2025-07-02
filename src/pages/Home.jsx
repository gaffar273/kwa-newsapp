import React, { useEffect, useState } from 'react';
import CategoryTabs from '../components/CategoryTabs';
import ArticleCard from '../components/ArticleCard';
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState('general');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY
  useEffect(() => {
    setLoading(true);
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
        setLoading(false);
      }).catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="home">
      <CategoryTabs setCategory={setCategory} />
      {loading ? <p>Loading...</p> :
        error ? <p>Error loading articles</p> :
        articles.length === 0 ? <p>No articles found</p> :
        <div className="article-list">
          {articles.map((a, i) => <ArticleCard key={i} article={a} />)}
        </div>
      }
    </div>
  );
};

export default Home;
