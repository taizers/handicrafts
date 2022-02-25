import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from '../Map/index';

import Select from '@atlaskit/select';
import Tag from '@atlaskit/tag';
import Group from '@atlaskit/tag-group';
import {
  fontSize as getFontSize,
  gridSize as getGridSize,
} from '@atlaskit/theme/constants';

import InlineEdit from '@atlaskit/inline-edit';

const fontSize = getFontSize();
const gridSize = getGridSize();

const Container = styled.div`

`
const ReadViewContainer = styled.div`
    display: 'flex';
    max-width: '100%';
`
const EditViewContainer = styled.div`
    z-index: 1;
    position: 'relative';
`

export const MapContainer = ({posts, getPosts}) => {
    const [editValue, setEditValue] = useState([]);
    const [locateValues, setLocateValues] = useState([]);
    const [isRoutesActive, setRoutesActive] = useState(false);

    useEffect(() => {
        getPosts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    const selectOptions = posts.map((item) => ({ label: item.title, value: item.location }));

    const onConfirm = (values) => {
        if (!values) {
        return;
        }
        console.log(selectOptions);
        setEditValue(values);
        console.log(values.length);
        if (values.length > 1) {
            setLocateValues(values.map((item) => item.value));
            setRoutesActive(true);
        }

    };
    console.log(locateValues);
    return (
        <Container>
            <Container
            className="container"
            style={{
                padding: `${gridSize}px ${gridSize}px ${gridSize * 6}px`,
                zIndex: "500",
            }}
            >
            <InlineEdit
                defaultValue={editValue}
                label="Точки маршрута"
                editView={(fieldProps) => (
                <EditViewContainer>
                    <Select
                    {...fieldProps}
                    options={selectOptions}
                    isMulti
                    autoFocus
                    openMenuOnFocus
                    />
                </EditViewContainer>
                )}
                readView={() =>
                editValue && editValue.length === 0 ? (
                    <ReadViewContainer
                        style={{
                            fontSize: `${fontSize}px`,
                            height: `${(gridSize * 2.5) / fontSize}em`,
                            lineHeight: `${(gridSize * 2.5) / fontSize}`,
                            padding: `${gridSize}px ${gridSize - 2}px`,
                        }}
                    >Нажмите чтобы составить маршрут</ReadViewContainer>
                ) : (
                    <div style={{ padding: `${gridSize / 2}px` }}>
                    <Group>
                        {editValue &&
                        editValue.map((option) => (
                            <Tag text={option.label} key={option.label} />
                        ))}
                    </Group>
                    </div>
                )
                }
                onConfirm={onConfirm}
            />
            </Container>
            <Map locations={locateValues} isRoutesActive={isRoutesActive} />
        </Container>
    );
}