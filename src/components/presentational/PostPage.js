import React from "react";
import {AutoSizer, List} from "react-virtualized";
import Header from "./Header";
import ArticlePost from "./ArticlePost";
import SimplePost from "./SimplePost";
import {getAllPosts} from "../../util";
import "./PostPage.scss";

const EXPANDED_ROW_SIZE = 250;
const ROW_SIZE = 200;
const allPosts = getAllPosts();

const renderPost = (item: Object) => {
    const {index} = item;
    return allPosts[index].type === "article" ? <ArticlePost article={allPosts[index]} item={item}/> :
        <SimplePost article={allPosts[index]} item={item}></SimplePost>;
};

const rowHeight = (item: Object) => {
    const {index} = item;
    return allPosts[index].type === "article" ? EXPANDED_ROW_SIZE : ROW_SIZE;
};

const PostPage = (props) => {

    return <div className="posts-container">
        <Header {...props}/>
        <div className="posts-grid">
            <AutoSizer>
                {({height, width}) => (
                    <List
                        ref={"List"}
                        className="List"
                        height={height}
                        width={width}
                        itemCount={allPosts.length}
                        rowHeight={rowHeight}
                        rowCount={allPosts.length}
                        rowRenderer={renderPost}
                    >
                    </List>
                )}
            </AutoSizer>
        </div>
    </div>
}

export default PostPage;