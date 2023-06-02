import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Movies from "../components/movies";
import MoviesTable from "../components/moviesTable";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Movies">
                <Movies/>
            </ComponentPreview>
            <ComponentPreview path="/MoviesTable">
                <MoviesTable/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;