import React from 'react';
import './Label.style.scss'

type ILabel = {
  title: string;
  backgroundColor?: string;
}

const Label = ({title, backgroundColor}: ILabel) => {
  return (
    <span className="label">{title}</span>
  );
};

export default Label;