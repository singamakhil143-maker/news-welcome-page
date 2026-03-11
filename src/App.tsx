import { useState } from 'react';

const FLASHDATA = [
  { id: 1, category: "Tech", title: "New AI model surpasses human reasoning" },
  { id: 2, category: "Business", title: "Market hits all-time high amid optimism" },
  { id: 3, category: "Science", title: "Water found on distant exoplanet" },
  { id: 4, category: "Health", title: "New breakthrough in longevity research" },
];

const NEWSDATA = [
  {
    id: 1,
    category: "World News",
    title: "The Future of Global Connectivity",
    summary: "As fiber networks expand to the most remote corners of the globe, the digital divide is finally beginning to shrink.",
    date: "March 11, 2026",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    category: "Innovation",
    title: "Quantum Computing Goes Mainstream",
    summary: "Large-scale quantum processors are now being integrated into cloud computing platforms, changing cryptography forever.",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    category: "Environment",
    title: "Ocean Cleanup Reaches Milestone",
    summary: "Over 500 million pounds of plastic have been successfully removed from the Great Pacific Garbage Patch this year.",
    date: "March 09, 2026",
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&q=80&w=800"
  }
];

const CATEGORIES = ["All", "World News", "Innovation", "Environment"];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = NEWSDATA.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <header>
        <div className="logo">ELITE-NEWS</div>
        <p className="tagline">Your window into the world's most critical updates.</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search news stories..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="category-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="live-indicator">
        <div className="dot"></div>
        LIVE FLASH CARDS
      </div>

      <div className="flash-cards-container">
        {FLASHDATA.map(flash => (
          <div key={flash.id} className="flash-card">
            <span className="category">{flash.category}</span>
            <h3>{flash.title}</h3>
          </div>
        ))}
      </div>

      <header style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Trending Stories</h2>
      </header>

      <div className="news-grid">
        {filteredNews.map(news => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <div className="meta">
                <span>{news.category}</span>
                <span>{news.date}</span>
              </div>
              <h2>{news.title}</h2>
              <p>{news.summary}</p>
              <a href="#" className="read-more">Complete Details</a>
            </div>
          </div>
        ))}
        {filteredNews.length === 0 && (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: 'var(--text-dim)' }}>
            No news found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
