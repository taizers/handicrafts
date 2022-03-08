import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import UsefullLink from './UsefullLink/index';
import Comments from './Comments/index';
import SwiftSlider from "react-swift-slider";
import {map} from "lodash";
import Map from './Map/index';

const Container = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`
const Title = styled.h2`
  font-size: 30px;
`
const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`
const TextContainer = styled.div`
  text-align: left;
  text-indent: 20px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const Text = styled.p`
  text-indent: 40px;
  margin: 10px 0;
  font-size: 17px;
`

const UsefullLinks = styled.ul`

`


const getText = (textList) => {
    const text = textList.split('\n\n')
  return <TextContainer>
      {text.map( (item, index) => <Text key={'text' + index}>{item}</Text> )}
    </TextContainer>
}

export const Handicraft = ({getPost, getComments, post, comments}) => {
    const { title, subTitle, text, useFullLinks, images } = post;

    let { id } = useParams(); 

    useEffect(() => {
      getPost(id);
      getComments(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const imagesList = map(images, (item, index)=> ({id: index, src: item}));

  return (
    <Container className="container">
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      {text && getText(text)}
      <SubTitle>Полезные ссылки</SubTitle>
      {useFullLinks &&
        <UsefullLinks>
          {useFullLinks.map( (item, index) => <UsefullLink link={item} key={"link" + index} />)}
        </UsefullLinks>
      }
        {post && <Map marker={post}/>}
        <SwiftSlider data={imagesList} height={600} />
        <SubTitle>Комментарии</SubTitle>
      <Comments comments={comments} postId={post.id} />
    </Container>
  );
}