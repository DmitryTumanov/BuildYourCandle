import {useGLTF, Center} from '@react-three/drei'
import {Mesh} from "three";
import React from "react";
import {CandleItem} from "../store/types";
import ModelItemSelectorMenu from "../menu/context-menu/ModelItemSelectorMenu";
import ModelSelectedItemMenu from "../menu/context-menu/ModelSelectedItemMenu";

type modelCompositionItemSettings = {
    position: [x: number, y: number, z: number],
    item: CandleItem,
    index: number,
    isSelected: boolean,
    isEditing: boolean,
}

function ModelCompositionItem(props: modelCompositionItemSettings) {
    const {position, item, index, isSelected, isEditing} = props;
    const {nodes} = useGLTF(item.type.file);
    const itemMesh = Object.values(nodes).filter(item => item.type === "Mesh")[0] as Mesh;
    const [x, y, z] = [...position];

    return (
        <group position={[x, item.reversed ? y + item.type.height : y, z]} rotation={[0, 0, item.reversed ? Math.PI : 0]}>
            <Center top>
                <mesh
                    castShadow
                    geometry={itemMesh.geometry}
                >
                    <meshStandardMaterial metalness={0.5} roughness={1}
                                          color={item.color.color}/>
                    {!isSelected && !isEditing && <ModelItemSelectorMenu itemIndex={index}/>}
                    {isSelected && !isEditing && <ModelSelectedItemMenu/>}
                </mesh>
            </Center>
        </group>
    );
}

export default ModelCompositionItem;
