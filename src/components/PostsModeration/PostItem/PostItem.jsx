import styled from 'styled-components';

const ListItem = styled.li`
  max-width: 300px;
  display: flex;
  padding: 10px;
  
  &:hover{
    background-color: var(--dark-gray);
    color: white;
  }
`

const Title = styled.h3`
    
`

const Image = styled.img`
    width: 100px;
    height: 50px;
`

const Date = styled.p`
    
`

const TextContainer = styled.div`
    
`

export const PostItem = ({post, selectPost}) => {
    const onPostClick = () => {
        selectPost(post);
    }

    return (
        <ListItem onClick={onPostClick}>
            <Image src={post.icon} alt={post.title} />
            <TextContainer>
                <Title>{post.title}</Title>
                <Date>{post.date}</Date>
            </TextContainer>
        </ListItem>
    );
};