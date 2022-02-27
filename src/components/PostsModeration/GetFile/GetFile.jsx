import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom'

import { FilePond, File, registerPlugin } from 'react-filepond'

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

export const GetFile = ({files, setFiles}) => {


    return (
        <Container>
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={5}
                server="/api"
                name="files"
                labelIdle='Ператащите изображение либо <span class="filepond--label-action">Откройте</span>'
            />
        </Container>
    )
}