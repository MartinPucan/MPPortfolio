import React from 'react';
import './Article.style.scss';
import Container from "./components/Container";
import Intro from "./components/Intro";
import jsArrayMethods from '../../assets/images/arrMethods.jpg';
import digitalOcean from '../../assets/images/digitalOceanLogo.png';

const Article = () => {
  const data = [
    {
      id: 1,
      title: 'Javascript Array Methods',
      label: [
        'javascript',
        'typescript'
      ],
      author: 'Martin Pucan',
      readingTime: '9 mins',
      url: '',
      description: 'Arrays provide a lot of methods. To make things easier, in this chapter they are split into groups.',
      createdAt: '',
      updatedAt: '',
      image: jsArrayMethods,
    },
    {
      id: 2,
      title: 'Deploy on DigitalOcean',
      label: [
        'javascript',
        'typescript'
      ],
      author: 'Martin',
      readingTime: '4 mins',
      url: '',
      description: 'This article demonstrate my experiences and practical examples how to manage hosting with DigitalOcean',
      createdAt: '',
      updatedAt: '',
      image: digitalOcean,
    }
  ];

  return (
    <>
      <Intro />
      <Container data={data} />
    </>
  )
};

export default Article;