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
  display: block;
  font-weight: 500;
  margin-bottom: 30px;
  margin-top: 10px;
`

export const Home = ({
                         postsTypes,
                         getPostsTypes,
                         posts,
                         getPosts,

}) => {
  const [markers, setSetMarkers] = useState();

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
            {postsTypes && <Select
                inputId="selectForMap"
                options={[
                    {label: <FormattedMessage id='all'/>, value: ''},
                    ...postsTypes,
                ]}
                onChange={value => {
                    value.value !== '' ?
                        setSetMarkers(filter(posts, (post) => {
                            if (value.value === post.type.value) {
                                return post;
                            }
                        })) :
                        setSetMarkers(posts);
                }}
                placeholder={<FormattedMessage id="select"/>}
            />}
        </SelectContainer>
    </ContainerForSelect>
    <Map markers={markers} />
    </Container>
  );
}
