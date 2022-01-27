import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Comment from './Comment/index';

const Container = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`
const Title = styled.h2`

`
const SubTitle = styled.h3`

`
const TextContainer = styled.div`

`
const Text = styled.p`

`

const UsefullLinks = styled.ul`

`

const UsefullLinksItem = styled.li`

`

const UsefullLink = styled.a`
  &:hover {
    color: red;
    text-transform: underline;
  }
`

const Comments = styled.ul`

`

const getUsefullLinks = (links) => {
  return <UsefullLinks>
      {links.map( (item, index) => <UsefullLinksItem key={'link' + index}><UsefullLink target='_blank' href={item} key={'handicraftUsefullLink' + index}>{item}</UsefullLink></UsefullLinksItem>)}
    </UsefullLinks>
}

const getText = (textList) => {
  return <TextContainer>
      {textList.map( (item, index) => <Text key={'text' + index}>{item}</Text> )}
    </TextContainer>
}

export const Handicraft = ({getHandicraft, handicraft}) => {
    const { title, sub_title, text, usefullLinks, comments} = handicraft;

    console.log(comments);
    let { id } = useParams(); 
    useEffect(() => {
      getHandicraft(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <Container className="container">
      <Title>{title}</Title>
      <SubTitle>{sub_title}</SubTitle>
      {getText(text)}
      {getUsefullLinks(usefullLinks)}
      {<Comments>
        {comments.map( (item, index) => <Comment comment={item} key={'comment' + index} /> )}
      </Comments>}
      
    </Container>
  );
}