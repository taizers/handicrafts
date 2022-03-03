import styled from "styled-components";
import { map } from "lodash";
import Button from "@atlaskit/button";
import { Link } from 'react-router-dom';

import LastPost from './LastPost/index';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 370px;
    padding: 5px;
`

const LastPostsList = styled.ul`
    padding-bottom: 10px;
`

const Title = styled.h3`
    font-size: 20px;
    padding: 20px;
  text-align: center;
`

export const LastPosts = ({ posts, path, title }) => {

  return (
      <Container>
          <Title>{title}</Title>
          <LastPostsList>
              { map(posts, (post) => <LastPost key={post.id} lastPost={post} />)  }
          </LastPostsList>
            <Button style={{maxWidth: '200px', alignSelf: 'center'}}  appearance="primary"><Link to={path}>Посмотреть ещё</Link></Button>
      </Container>
  );
}
