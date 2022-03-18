import styled from "styled-components";
import { map } from "lodash";
import Button from "@atlaskit/button";
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import React from "react";

import LastPost from './LastPost/index';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    background-color: #fff;
    margin: 15px 0;
    max-width: 220px;

    @media (max-width: 768px) {
        display: none;
    }
`

const LastPostsList = styled.ul`
    padding-bottom: 10px;
`

const Title = styled.h3`
    font-size: 20px;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    word-wrap: break-word;
`

export const LastPosts = ({ posts, path, title }) => {
  return (
      <Container>
          <Title><FormattedMessage id={title} /></Title>
          <LastPostsList>
              { map(posts, (post) => <LastPost key={post.id} lastPost={post} />)  }
          </LastPostsList>
            <Button style={{maxWidth: '200px', alignSelf: 'center'}}  appearance="primary"><Link to={path}>{<FormattedMessage id={'button_show_more'}/>}</Link></Button>
      </Container>
  );
}
