import React from "react";
import styled from "styled-components";

import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const Container = styled.div`
    background-color: white;
    color: white;
    position: relative;
    margin-top: 20px;
`

export const GetFile = ({files, setFiles, isMultiply}) => {
    return (
        <Container>
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                maxFiles={5}
                allowMultiple={isMultiply}
                accepted-file-types="image/jpeg, image/png"
                name="files"
                labelIdle='Ператащите изображение либо <span class="filepond--label-action">Откройте</span>'
            />
        </Container>
    )
}