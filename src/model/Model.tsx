import {useGLTF, Center} from '@react-three/drei'
import {Mesh} from "three";
import {mapCandleType} from "../utils/mappers";
import React from "react";
import {getBuilderState, useAppSelector} from "../store/hooks";
import ModelEditItemStep1Menu from "../menu/context-menu/ModelEditItemStep1Menu";
import ModelEditItemStep2Menu from "../menu/context-menu/ModelEditItemStep2Menu";
import ModelBuilderMenu from "../menu/context-menu/ModelBuilderMenu";

type modelSettings = {
    position: [x: number, y: number, z: number],
}

function Model(props: modelSettings) {
    const builder = useAppSelector(getBuilderState);
    const {position} = props;
    const {nodes} = useGLTF(mapCandleType(builder.candle.type));
    const modelMesh = Object.values(nodes).filter(item => item.type === "Mesh")[0] as Mesh;

    return (
        <group position={position}>
            <Center top>
                <mesh castShadow geometry={modelMesh.geometry}>
                    <meshStandardMaterial metalness={1} roughness={1}/>
                    <ModelEditItemStep1Menu/>
                    <ModelEditItemStep2Menu/>
                    <ModelBuilderMenu/>
                </mesh>
            </Center>
        </group>
    );
}

export default Model;
