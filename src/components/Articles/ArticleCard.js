// Individual article card UI

function ArticleCard({ date, image, author, description, buttonRedirect }) {
  return (
    <div className="article">
      <img className="article-image" src={image} alt="article" />
      <div className="article-info">
        <p className="article-author">{author}</p>
        <p className="article-date">{date}</p>
        <p className="article-description">{description}</p>
      </div>

      <div className="article-button btn">
        <a href={buttonRedirect} target="_blank" rel="noreferrer">
          <p>Read More</p>
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
