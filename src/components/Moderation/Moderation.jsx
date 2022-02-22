import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ReactNode } from 'react';

import { N20, N200 } from '@atlaskit/theme/colors';
import {
  borderRadius as getBorderRadius,
  gridSize as getGridSize,
} from '@atlaskit/theme/constants';
import { token } from '@atlaskit/tokens';

import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import CommentModeration from '../CommentModeration/index';
import PostsModeration from "../PostsModeration/index";

const Container = styled.div`
`

export const Moderation = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Container className="container">
            <Tabs
            onChange={(index) => setActiveTab(index)}
            id="default"
            >
                <TabList>
                    <Tab>Комментарии</Tab>
                    <Tab>Посты</Tab>
                    <Tab>Пользователи</Tab>
                </TabList>
                <TabPanel>
                    {activeTab === 0 && <CommentModeration />}
                </TabPanel>
                <TabPanel>
                    {activeTab === 1 && <PostsModeration />}
                </TabPanel>
                <TabPanel>

                </TabPanel>
            </Tabs>
        </Container>
    );
}