import ModelCompositionItem from "./ModelCompositionItem";
import {getBuilderState, useAppSelector} from "../store/hooks";

type modelCompositionSettings = {
    position: [x: number, y: number, z: number]
}

function ModelComposition(props: modelCompositionSettings) {
    const builder = useAppSelector(getBuilderState)
    let [x, y, z] = props.position;
    return (
        <group>
            {builder.items.map((item, index) => {
                const itemComp = (
                    <ModelCompositionItem
                        index={index}
                        position={[x, y, z]}
                        item={item}
                        isSelected={builder.selectedItemIndex === index}
                        isEditing={builder.editingItemIndex > -1}
                    />
                );
                y += item.type.height;
                return itemComp;
            })}
        </group>
    );
}

export default ModelComposition;
