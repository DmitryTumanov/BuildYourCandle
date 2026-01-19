import React from "react";
import {getBuilderState, useAppDispatch, useAppSelector} from "../../store/hooks";
import {CANDLE_ITEM_TYPES} from "../../utils/constants";
import {List} from "@mui/material";
import InlineSvg from "../../svg/InlineSvg";
import RoundBoxButton from "../buttons/RoundBoxButton";
import {updateCandleItem} from "../../store/builderSlice";
import "./ItemCreationStyles.css";

function ItemCreationStep1() {
    const dispatch = useAppDispatch();
    const builder = useAppSelector(getBuilderState);

    const updateItemType = (index: number) => {
        const candleItem = builder.items[builder.editingItemIndex];
        dispatch(updateCandleItem({
            index: builder.editingItemIndex,
            item: {...candleItem, type: CANDLE_ITEM_TYPES[index]}
        }));
    }

    return (
        <List className="item-type-list">
            {CANDLE_ITEM_TYPES.map((type, index) => (
                <RoundBoxButton
                    isSelected={builder.items[builder.editingItemIndex].type.name === type.name}
                    key={index.toString()}
                    hoverEnabled={true}
                    customSx={{width: "56px", height: "56px", margin: "5px 0 0 0"}}
                    onClick={() => updateItemType(index)}
                >
                    <InlineSvg src={type.svgFile} alt={type.label} />
                </RoundBoxButton>
            ))}
        </List>
    );
}

export default ItemCreationStep1;
