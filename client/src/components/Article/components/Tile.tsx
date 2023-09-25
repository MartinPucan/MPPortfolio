import React from 'react';
import '../Article.style.scss';
import {IArticle} from "../types";
interface IArticleItem {
  item: IArticle;
}

const Tile = ({ item }: IArticleItem) => {
  return (
    <li className="article--edge" title={item.author}>
      <div className="article--tile" style={{backgroundImage: `url(${item.image})`}}>
        <div className="article--description">
          <div className="article--tile-header">
            <h4>{item.title}</h4>
          </div>
          <div className="article--tile-description">
            {item.description}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Tile;