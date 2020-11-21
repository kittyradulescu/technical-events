import React from 'react';
import "./ArticlePost.scss";

const ArticlePost = (props) => {

    const {article, item} = props;

    return (
        <div style={item.style}>
            <div className="article-body">
                <div className="article-image"><img src={article.image}></img></div>
                <div className="article-details">
                    <div className="title">{article.title}</div>
                    <div>{article.description}</div>
                    <div className="notes">{article.notes}</div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePost;