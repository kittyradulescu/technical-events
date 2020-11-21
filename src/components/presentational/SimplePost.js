import React from 'react';
import "./SimplePost.scss";

const SimplePost = (props) => {

    const {article, item} = props;

    return (
        <div style={item.style}>
            <div className="simple-article-body">
                <div className="article-image"><img src={article.image}></img></div>
                <div className="article-details">
                    <div className="title">{article.title}</div>
                    <div className="notes">{article.description}</div>
                </div>
            </div>
        </div>
    )
}

export default SimplePost;