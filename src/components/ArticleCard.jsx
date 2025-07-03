import React, { useState } from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);



  return (
    <div className="card" onClick={() => setShowDetail(!showDetail)}>
      <img src={article.urlToImage} alt="thumb" />
      <h3>{article.title}</h3>
      <p>{article.source.name}</p>

      {showDetail && (
        <div className="details">
          <p><strong>Author:</strong> {article.author}</p>
          <p><strong>Published:</strong> {new Date(article.publishedAt).toLocaleString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })}</p>
          <div className="btns">
            <a href={article.url} target="_blank" rel="noreferrer" className='full-at'>Read Full Article</a>
            <button onClick={summarize}>Summarize</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
