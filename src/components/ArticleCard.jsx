import React, { useState } from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const summarize = async () => {
    setLoading(true);
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBjRawvGJf4VEdLb1BU__KXuvRgw9R2XJI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Summarize the following article in 3 bullet points:\n\n${article.description || article.content}` }]
        }]
      })
    });
    const data = await res.json();
    const bullets = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Error generating summary';
    setSummary(bullets);
    setLoading(false);
  };

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
