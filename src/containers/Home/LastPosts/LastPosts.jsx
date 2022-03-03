import styled from "styled-components";
import { map } from "lodash";
import { useEffect } from "react";
import Button from "@atlaskit/button";
import {generatePath, Link} from 'react-router-dom';

import LastPost from './LastPost/index';
import { pathToPostsTypes } from "../../../constants";

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

export const LastPosts = ({ latestsPosts, getLatestsPosts }) => {
    useEffect(() => {
        getLatestsPosts();
    }, []);

  return (
      <Container>
          <LastPostsList>
              { map(latestsPosts, (post) => <LastPost key={post.id} lastPost={post} />)  }
          </LastPostsList>
            <Button style={{maxWidth: '200px', alignSelf: 'center'}}  appearance="primary"><Link to={pathToPostsTypes}>Посмотреть ещё</Link></Button>
      </Container>
  );
}
