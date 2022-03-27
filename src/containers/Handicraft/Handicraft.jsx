import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import moment from 'moment';
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
  text-indent: 40px;
`

const SliderContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  position: static;
`
const SubTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
  text-indent: 40px;
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
const Image = styled.img`
  margin: 0 auto;
`
const Date = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 15px;
  text-indent: 40px;
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
    const { title, subtitle, content, links, images, comments, date, created_at } = post;

    let { id } = useParams(); 

    useEffect(() => {
      getPost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getImagesList = () => {
      const arr = [];
      map(images, (item, index)=> {
        arr.push({id: index, src: `${API_IMAGE_URL}${item.image}`});
      });
      return arr;
    }
    

  return (
    <Container>
      <Title>{title}</Title>
      {date ? <Date>Состоится {moment(date).format('LL')}</Date> : <Date>Опубликовано {moment(created_at).format('LL')}</Date>}
      {images && <Image src={`${API_IMAGE_URL}${images[0]?.image}`} />}
      {!isEmpty(subtitle) && subtitle !== 'undefined' && <SubTitle>{subtitle}</SubTitle>}
      {content && getText(content)}
      <SubTitle>Полезные ссылки</SubTitle>
      {links &&
        <UsefullLinks>
          {links.map( (item, index) => <UsefullLink link={item.link} key={"link" + index} />)}
        </UsefullLinks>
      }
        {post?.title && <Map marker={post}/>}
        {images?.length > 1 && 
          <SliderContainer>
            <SwiftSlider data={getImagesList()} height={400}/>
          </SliderContainer>}
        <SubTitle>Комментарии</SubTitle>
        <Comments comments={comments} postId={post.id}/>
    </Container>
  );
}
