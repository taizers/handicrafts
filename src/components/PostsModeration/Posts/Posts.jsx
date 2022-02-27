import styled from 'styled-components';
import moment from "moment";
import 'moment/locale/ru';
import SwiftSlider from 'react-swift-slider'

import Button from '@atlaskit/button';
import SelectClearIcon from '@atlaskit/icon/glyph/select-clear'
import {map} from "lodash";
import React from "react";
import GetFile from "../GetFile/index";

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
      padding-bottom: 100px;
      display: flex;
      flex-direction: column;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    word-break: break-word;
    height: 100%;
    width: 100%;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: bold;
`

const SubTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`
const Date = styled.p`
    font-size: 14px;
    padding: 5px;
    color: gray;
  margin-bottom: 30px;
`

const Image = styled.img`
    width: 200px;
    height: 100px;
`

const Text = styled.p`
  text-align: left;
  text-indent: 20px;
  margin-bottom: 20px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const getText = (text) => {
    const textList = text.split('/*Enter*/');
    return textList.map((elem, index) => <Text key={elem+index}>{elem}</Text>)
}

export const Posts = ({post, deletePost}) => {
    const { images, subTitle, title, created_at, id } = post;

    const onDeletePost = () => {
        deletePost(id);
    }

    const imagesList = map(images, (item, index)=> ({id: index, src: item}));

    return (
        <Container>
            <TextContainer>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <Date>{moment(created_at, "YYYYMMDD").locale('ru').fromNow()}</Date>
                {post.text && getText(post.text)}
                <SwiftSlider data={imagesList} height={400} />
                <ButtonsContainer>
                    <Button
                        onClick={onDeletePost}
                        appearance="primary"
                    >Удалить</Button>
                </ButtonsContainer>

            </TextContainer>

        </Container>
    );
}