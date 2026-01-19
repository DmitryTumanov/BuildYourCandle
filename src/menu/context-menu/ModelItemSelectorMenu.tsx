import {Html} from '@react-three/drei'
import RoundBoxButton from "../../menu/buttons/RoundBoxButton";
import React from "react";
import {getBuilderState, useAppDispatch, useAppSelector} from "../../store/hooks";
import {updateSelectedItemIndex} from "../../store/builderSlice";

type ModelItemSelectorMenuProps = {
    itemIndex: number
}

function ModelItemSelectorMenu(props: ModelItemSelectorMenuProps) {
    const dispatch = useAppDispatch();
    const builder = useAppSelector(getBuilderState);
    const {itemIndex} = props;

    const updateSelectedIndex = () => {
        dispatch(updateSelectedItemIndex(itemIndex));
    }

    return (
        <Html transform={false}>
            <div style={{
                transform: !builder.items[itemIndex].reversed
                    ? 'translate3d(calc(65px - 15px / 2), calc(-200%), 0px)'
                    : 'translate3d(calc(65px - 15px / 2), calc(200%), 0px)',
                display: "flex",
                flexDirection: 'row'
            }}>
                <RoundBoxButton
                    isSelected={false}
                    key={"item_menu_selector"}
                    hoverEnabled={true}
                    onClick={() => updateSelectedIndex()}
                    customSx={{width: "15px", height: "15px", bgcolor: "#CCCCCC"}}
                    hide={builder.hideControls}
                >
                </RoundBoxButton>
            </div>
        </Html>
    );
}

export default ModelItemSelectorMenu;
