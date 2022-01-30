import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Comment from './Comment/index';
import UsefullLink from './UsefullLink/index';

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

`
const Text = styled.p`
  text-indent: 40px;
  margin: 10px 0;
  font-size: 17px;
`

const UsefullLinks = styled.ul`

`

const Comments = styled.ul`
  text-align: center;
  margin: 20px 0;
`

const getText = (textList) => {
  return <TextContainer>
      {textList.map( (item, index) => <Text key={'text' + index}>{item}</Text> )}
    </TextContainer>
}

export const Handicraft = ({getHandicraft, getComments, handicraft, comments}) => {
    const { title, sub_title, text, usefullLinks} = handicraft;

    let { id } = useParams(); 
    useEffect(() => {
      getHandicraft(id);
      getComments(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <Container className="container">
      <Title>{title}</Title>
      <SubTitle>{sub_title}</SubTitle>
    
      {text && getText(text)}
      <SubTitle>Полезные ссылки</SubTitle>
      {usefullLinks && 
        <UsefullLinks>
          {usefullLinks.map( (item, index) => <UsefullLink link={item} key={"link" + index} />)}
        </UsefullLinks>
      }
      <SubTitle>Комментарии</SubTitle>
      {comments &&
        <Comments>
          {comments.map( (item, index) => <Comment comment={item} key={'comment' + index} /> )}
          
        </Comments>}
    </Container>
  );
}