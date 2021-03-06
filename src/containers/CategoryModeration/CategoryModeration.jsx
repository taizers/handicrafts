import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from "@atlaskit/button";
import AddIcon from '@atlaskit/icon/glyph/add';
import {toLower, isEmpty, filter, map} from 'lodash';
import DynamicTable from '@atlaskit/dynamic-table';

import CreateModal from "../PostsModeration/CreateModal";
import SearchField from "./SearchField/index";
import {API_IMAGE_URL} from "../../constants";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import {FormattedMessage} from "react-intl";

const Container = styled.div`
  width: 100%;
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const head = () => (
    {
        cells: [
            {
                key: "label",
                content: <FormattedMessage id='label_category_label' />,
                isSortable: true,
                width: 25,
            },
            {
                key: "value",
                content: <FormattedMessage id='label_category_value' />,
                isSortable: true,
                width: 25,
            },
            {
                key: "image",
                content: <FormattedMessage id='photo' />,
                isSortable: true,
                width: 25,
            },
        ]
});

const Image = styled.img`
  width: 100px;
  height: 75px;
`;

export const CategoryModeration = ({ getCategories, categories, deleteCategory, isVisible, setVisible, createCategory, isLoading }) => {
    const [categoriesList, setCategoriesList] = useState();


    useEffect(() => {
        getCategories();
    }, []);

    const rows = (categoriesForTable) => (
        map(categoriesForTable, (category, index) => ({
            key: `row-${index}-${category.value}`,
            isHighlighted: false,
            cells: [
                {
                    key: category.label,
                    content: category.label,
                },
                {
                    key: category.value,
                    content: category.value,
                },
                {
                    key: category.image,
                    content: (
                        <Image src={API_IMAGE_URL + category.image} alt="???????????????????? ??????????????????" width="100" height="50"/>
                    ),
                },
                {
                    key: category.id,
                    content: (
                        <Button
                            iconBefore={<TrashIcon size="large" appearance="primary"/>}
                            onClick={() => deleteCategory(category.id)}
                        ></Button>
                    ),
                },
            ],
        }))
    );

    const onShowModal = () => {
        setVisible(true);
    };

    const onSearchCategories = (query) => {
        const arr = filter(categories, category => {
            if (
                ((query.label !== "") ? toLower(category.label).indexOf(toLower(query.label)) !== -1 : true) &&
                ((query.value !== "") ? toLower(category.value).indexOf(toLower(query.value)) !== -1 : true)
            ) {
                return category;
            }
        });

        setCategoriesList(arr);
    };

    return (
        <Container>
            <HeadContainer>
                <SearchField search={onSearchCategories}/>
                <Button
                    style={{
                        alignSelf: 'flex-end',
                    }}
                    iconBefore={<AddIcon size="small"/>}
                    onClick={onShowModal}
                    appearance="primary"
                >
                    <FormattedMessage id="button_create_category" />
                </Button>
            </HeadContainer>
            {categories && <DynamicTable
                head={head()}
                rows={!isEmpty(categoriesList) ? rows(categoriesList) : rows(categories)}
                rowsPerPage={10}
                defaultPage={1}
                loadingSpinnerSize="large"
                isRankable
            />}
            {isVisible && <CreateModal setVisible={setVisible} isVisible={isVisible} isLoading={isLoading} type='category' create={createCategory}/>}
        </Container>
    );
}
