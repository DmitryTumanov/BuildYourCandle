import React from 'react';
import './App.css';
import Menu from "./menu/Menu";
import {Grid} from "@mui/material";
import Builder from "./builder/Builder";
import { CANDLE_ITEM_TYPES } from './utils/constants';
import GlbToImage from "./GlbToImage";
import {useGLTF} from "@react-three/drei";
import {mapCandleType} from "./utils/mappers";

function App() {
    CANDLE_ITEM_TYPES.map((type, index) => useGLTF.preload(type.file))
    return (
        <Grid container>
            <Menu/>
            <Builder/>
            {/*{CANDLE_ITEM_TYPES.map((type, index) => (<GlbToImage modelUrl={type.file}></GlbToImage>))}*/}
        </Grid>
    );
}

export default App;
