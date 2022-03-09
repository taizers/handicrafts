import styled from "styled-components";
import { generatePath, Link} from "react-router-dom";
import { pathToPost } from "../../../../constants";

const LastPostItem = styled.li`
  margin-bottom: 10px;
`

const LinkItem = styled(Link)`
  display: flex;
  padding-bottom: 10px;
  overflow: hidden;
  flex-direction: column;
  
  &:hover {
    background-color: var(--dark-gray);
    color: white;
  }
      
`

const Image = styled.img`
  height: 100px;
  width: 100%;
`

const TextContainer = styled.div`
  font-weight: 400;
  margin: 8px;
`

const Title = styled.h3`
  font-size: 14px;
  word-wrap: break-word;
`
const Date = styled.p`
  color: gray;
  font-size: 12px;
  margin-top: 5px;
`

export const LastPost = ({ lastPost }) => {
  return (
      <LastPostItem>
          <LinkItem to={generatePath(pathToPost, {id: lastPost.id})}>
              <Image src={lastPost.images[0]} />
              <TextContainer>
                  <Title>{lastPost.title}</Title>
                  <Date>{lastPost.createdAt}</Date>
              </TextContainer>
          </LinkItem>
      </LastPostItem>
  );
}