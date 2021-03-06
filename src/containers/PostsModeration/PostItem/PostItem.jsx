import styled from 'styled-components';
import { API_IMAGE_URL } from "../../../constants";
import moment from 'moment';


const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  
  &:hover{
    background-color: var(--dark-gray);
    color: white;
  }
  
`

const Title = styled.h3`
    font-size: 18px;
`

const Image = styled.img`
    width: 100%;
    height: 150px;
`

const Date = styled.p`
    color: gray;
    font-size: 14px;
    margin-top: 10px
`

const TextContainer = styled.div`
    margin: 5px;
`

export const PostItem = ({ post, selectPost, selectedPost, language }) => {
    const onPostClick = () => {
        selectPost(post);
    }

    return (
        <ListItem selected={post?.id === selectedPost?.id} onClick={onPostClick}>
            <Image src={`${API_IMAGE_URL}${post?.images[0]?.image}`}  alt={post?.title} />
            <TextContainer>
                <Title>{post?.title}</Title>
                <Date>{moment(post?.created_at).locale(language).format('LL')}</Date>
            </TextContainer>    

        </ListItem>
    );
};