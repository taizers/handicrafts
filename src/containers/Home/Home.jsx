import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Select from '@atlaskit/select';
import { filter } from 'lodash';

import Map from './Map/index';
import {FormattedMessage} from "react-intl";

const Container = styled.div`
  width: 100%;
`
const ContainerForSelect = styled.div`
  position: relative;
  z-index: 600;
`

const SelectContainer = styled.div`
  margin-bottom: 50px;
`

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 30px;
`

export const Home = ({
                         postsTypes,
                         getPostsTypes,
                         posts,
                         getPosts,

}) => {
  const [markers, setSetMarkers] = useState(posts);

  useEffect(() => {
    getPostsTypes();
    getPosts();
  }, []);

  return (
    <Container>
        <Title>Ремёсла Беларуси</Title>
      <ContainerForSelect>
        <SelectContainer>
          <label htmlFor="selectForMap"><FormattedMessage id="select_categories" /></label>
          <Select
            inputId="selectForMap"
            options={[
              { label: 'Все', value: '' },
              ...postsTypes,
            ]}
            onChange={value => {
              value.value !== '' ?
              setSetMarkers(filter(posts, (post) => {
                  if (value.value === post.type) {
                      return post;
                  }
               })): 
               setSetMarkers(posts);
            }}
            placeholder={<FormattedMessage id="select" />}
          />
        </SelectContainer>
    </ContainerForSelect>
    <Map markers={markers} />
    </Container>
  );
}
