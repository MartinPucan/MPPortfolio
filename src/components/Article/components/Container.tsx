import React from 'react';
import Tile from "./Tile";

interface IContainer {
  data: Array<any>
}

const Container = ({ data }: IContainer) => {

  return (
    <ul className="article--container">
      {data.map((item, index) => <Tile item={item} key={index}/>)}
    </ul>
  );
};

export default Container;