import React from 'react';
import './Builder.css';
import Model from "../model/Model";
import ModelComposition from "../model/ModelComposition";
import SceneCanvas from "../canvas/SceneCanvas";
import {useAppDispatch} from "../store/hooks";
import {updateSelectedItemIndex} from "../store/builderSlice";

function Builder() {
    const dispatch = useAppDispatch();
    const removeSelection = () => {
        dispatch(updateSelectedItemIndex(-1));
    }

    return (
        <SceneCanvas
            height={'100vh'}
            width={'100vw'}
            onClick={() => removeSelection()}>
            <Model position={[0, -0.9, 0]}/>
            <ModelComposition position={[0, -0.9, 0]}/>
        </SceneCanvas>
    );
}

export default Builder;
