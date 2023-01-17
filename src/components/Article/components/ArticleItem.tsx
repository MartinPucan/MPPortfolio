import React from 'react';
import {IArticle} from "../types";

interface IArticleItem {
  item: IArticle;
}

const ArticleItem = ({ item }: IArticleItem) => {
  return (
    <article>
      <h2>
        {item.title}
      </h2>
    </article>
  );
};

export default ArticleItem;