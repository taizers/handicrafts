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
import CommentModeration from '../../containers/CommentModeration/index';
import PostsModeration from "../../containers/PostsModeration/index";
import UsersModeration from "../../containers/UsersModeration/index";
import CategoryModeration from "../../containers/CategoryModeration/index";
import {FormattedMessage} from "react-intl";

const Container = styled.div`
    width: 100%;
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
                    <Tab><FormattedMessage id='comments'  /></Tab>
                    <Tab><FormattedMessage id='posts'  /></Tab>
                    <Tab><FormattedMessage id='users'  /></Tab>
                    <Tab><FormattedMessage id='categories'  /></Tab>
                </TabList>
                <TabPanel>
                    {activeTab === 0 && <CommentModeration />}
                </TabPanel>
                <TabPanel>
                    {activeTab === 1 && <PostsModeration />}
                </TabPanel>
                <TabPanel>
                    {activeTab === 2 && <UsersModeration />}
                </TabPanel>
                <TabPanel>
                    {activeTab === 3 && <CategoryModeration />}
                </TabPanel>
            </Tabs>
        </Container>
    );
}
