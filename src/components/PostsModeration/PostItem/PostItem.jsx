import styled from 'styled-components';
import { map } from 'lodash';


const ListItem = styled.li`
  display: flex;
  background-color: ${props =>
    props.selected
    ? 'var(--dark-gray)' : '#C4D4F9'
  };
  color: ${props =>
    props.selected
    ? 'white': 'black'
  };
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  
  &:hover{
    background-color: var(--dark-gray);
    color: white;
  }
  
`

const Title = styled.h3`
    font-size: 18px;
`

const Image = styled.img`
    width: 100px;
    height: 50px;
`

const Date = styled.p`
    color: gray;
  font-size: 14px;
`

const TextContainer = styled.div`
    margin-left: 10px;
`

export const PostItem = ({ post, selectPost, selectedPost }) => {
    const onPostClick = () => {
        selectPost(post);
    }

    return (
        <ListItem selected={post?.id === selectedPost?.id} onClick={onPostClick}>
            <Image src={post.images[0]} alt={post.title} />
            <TextContainer>
                <Title>{post.title}</Title>
                <Date>{post.createdAt}</Date>
            </TextContainer>

        </ListItem>
    );
};