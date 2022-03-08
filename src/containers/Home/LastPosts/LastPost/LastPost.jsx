import styled from "styled-components";
import { generatePath, Link} from "react-router-dom";
import { pathToPost } from "../../../../constants";

const LastPostItem = styled.li`
  margin-bottom: 10px;
`

const LinkItem = styled(Link)`
  display: flex;
  padding-bottom: 10px;
  &:hover {
    background-color: var(--dark-gray);
    color: white;
  }
      
`

const Image = styled.img`
  height: 50px;
  width: 100px;
`

const TextContainer = styled.div`
  margin-left: 5px;
  font-weight: 400;
  max-width: 250px;
`

const Title = styled.h3`
  font-size: 14px;
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