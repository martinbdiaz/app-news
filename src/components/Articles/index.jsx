const Articles = ({articles}) => {

    console.log('articles', articles)

    return (articles.length>0) ? (
        articles?.map((article, idx) =>{
            return <div className="article" key={idx}>
                {article.urlToImage&&<div className="image">
                    <img src={article.urlToImage} alt=""/>
                </div>}
                <div className="description">                            
                    <h2 className="title"><b>{article.title}</b></h2>
                    <p className="content-description">{article.description}</p>
                    <span className="author"><b>Author:</b> {article.author}</span>
                </div>
                <div className="btn">
                    <a href={article.url} target="_blank" rel="noreferrer">Show more</a>
                </div>
            </div>
        })        
    ) : null
}

export default Articles;