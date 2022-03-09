import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { map, isEmpty } from 'lodash';
import Map from './Map/index';

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
  width: 100%;
`

const MarkerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
const MarkerIcon = styled.img`
`

const MarkerTitle = styled.h3`
    font-size: 16px;
    padding-left: 10px;

`
const SelectorContainer = styled.div`
    z-index: 500;
`
const ReadViewContainer = styled.div`
    display: flex;
    max-width: 100%;
`
const EditViewContainer = styled.div`
    z-index: 1;
    position: relative;
`

export const MapContainer = ({ posts, getPosts, userPosition, getUserLocation }) => {
    const [editValue, setEditValue] = useState([]);
    const [locateValues, setLocateValues] = useState([]);
    const [isRoutesActive, setRoutesActive] = useState(false);

    useEffect(() => {
        getPosts();
        getLocation();
        }, []);

    const updatePosition = (position) => {
        if (position) {
            getUserLocation([position.coords.latitude, position.coords.longitude]);
        }
    }

    const getLocation = ()  => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(updatePosition);
        } else
            getUserLocation([ 53.6884, 23.8258 ]);
    };

    const getOptions = () => {
        const selectOptions = [];
        selectOptions.push({label: 'Моё местоположение', value: userPosition});
        map(posts, (post) => {
            if (!isEmpty(post.location)) {
                selectOptions.push({label: post.title, value: post.location});
            }
        });
        return selectOptions;
    }

    const onConfirm = (values) => {
        setRoutesActive(false);
        setEditValue([]);
        setLocateValues([]);

        if (values.length > 1) {
            setEditValue(values);
            setLocateValues(values.map((item) => item.value));
            setRoutesActive(true);
        }
    };

    return (
        <Container>
            {userPosition && <SelectorContainer
                className="container"
                style={{
                    padding: `${gridSize}px ${gridSize}px ${gridSize * 6}px`,
                }}
            >
                <InlineEdit
                    defaultValue={editValue}
                    label="Точки маршрута"
                    editView={(fieldProps) => (
                        <EditViewContainer>
                            <Select
                                {...fieldProps}
                                options={getOptions()}
                                isMulti
                                autoFocus
                                openMenuOnFocus
                            />
                        </EditViewContainer>
                    )}
                    readView={() =>
                        isEmpty(editValue) ? (
                            <ReadViewContainer
                                style={{
                                    fontSize: `${fontSize}px`,
                                    height: `${(gridSize * 2.5) / fontSize}em`,
                                    lineHeight: `${(gridSize * 2.5) / fontSize}`,
                                    padding: `${gridSize}px ${gridSize - 2}px`,
                                    minHeight: '35px',
                                }}
                            >Нажмите чтобы составить маршрут</ReadViewContainer>
                        ) : (
                            <div style={{padding: `${gridSize / 2}px`}}>
                                <Group>
                                    {editValue &&
                                        editValue.map((option) => (
                                            <Tag text={option.label} key={option.label}/>
                                        ))}
                                </Group>
                            </div>
                        )
                    }
                    onConfirm={onConfirm}
                />
                <MarkerContainer>
                    <MarkerIcon
                        src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png"
                        alt="Начальная точка маршрута"
                    />
                    <MarkerTitle> - Начальная точка маршрута</MarkerTitle>
                </MarkerContainer>
                <MarkerContainer>
                    <MarkerIcon
                        src="https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-green.png"
                        alt="Конечная точка маршрута"
                    />
                    <MarkerTitle> - Конечная точка маршрута</MarkerTitle>
                </MarkerContainer>
            </SelectorContainer>}
            <Map locations={locateValues} isRoutesActive={isRoutesActive} />
        </Container>
    );
}
