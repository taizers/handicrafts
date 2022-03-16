import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import UsefullLink from './UsefullLink/index';
import Comments from './Comments/index';
import SwiftSlider from "react-swift-slider";
import { map, isEmpty } from "lodash";
import Map from './Map/index';
import {API_IMAGE_URL} from "../../constants";

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

const SliderContainer = styled.div`
  margin: 30px 0;
  position: static;
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

const UsefullLinks = styled.ul`

`

const Text = styled.p`
  text-indent: 40px;
  margin: 10px 0;
  font-size: 17px;
`
const getText = (textList) => {
    const text = textList.split('\r\n')
  return <TextContainer>
      {text.map( (item, index) => <Text key={'text' + index}>{item}</Text> )}
    </TextContainer>
}

export const Handicraft = ({getPost, post}) => {
    const { title, subtitle, content, links, images, comments } = post;

    let { id } = useParams(); 

    useEffect(() => {
      getPost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const imagesList = map(images, (item, index)=> ({id: index, src: `${API_IMAGE_URL}${item.image}`}));

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      {content && getText(content)}
      <SubTitle>Полезные ссылки</SubTitle>
      {links &&
        <UsefullLinks>
          {links.map( (item, index) => <UsefullLink link={item.link} key={"link" + index} />)}
        </UsefullLinks>
      }
        {post?.title && <Map marker={post}/>}
        <SliderContainer>
          {images && <SwiftSlider data={imagesList} height={400}/>}
        </SliderContainer>
        <SubTitle>Комментарии</SubTitle>
        <Comments comments={comments} postId={post.id}/>
    </Container>
  );
}
