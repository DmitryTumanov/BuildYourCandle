import React from "react";
import {getBuilderState, useAppDispatch, useAppSelector} from "../../store/hooks";
import {COLORS_CONFIG} from "../../utils/constants";
import {List} from "@mui/material";
import RoundBoxButton from "../buttons/RoundBoxButton";
import {updateCandleItem} from "../../store/builderSlice";
import "./ItemCreationStyles.css";

function ItemCreationStep2() {
    const dispatch = useAppDispatch();
    const builder = useAppSelector(getBuilderState);

    const updateItemColor = (index: number) => {
        const candleItem = builder.items[builder.editingItemIndex];
        dispatch(updateCandleItem({
            index: builder.editingItemIndex,
            item: {...candleItem, color: COLORS_CONFIG[index]}
        }));
    }

    return (
        <List className="item-type-list">
            {COLORS_CONFIG.map((color, index) => (
                <RoundBoxButton
                    isSelected={builder.items[builder.editingItemIndex].color.name === color.name}
                    key={index.toString()}
                    hoverEnabled={true}
                    onClick={() => updateItemColor(index)}
                    customSx={{bgcolor: color.color, width: "56px", height: "56px", margin: "5px 0 0 0"}}
                >
                </RoundBoxButton>
            ))}
        </List>
    );
}

export default ItemCreationStep2;
