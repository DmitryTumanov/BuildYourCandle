import React from "react";
import {useAppDispatch} from "../../store/hooks";
import {addCandleItem, clearCandleItems} from "../../store/builderSlice";
import {CANDLE_ITEM_TYPES, COLORS_CONFIG} from "../../utils/constants";
import {Button} from "@mui/material";

function RandomButton() {
    const dispatch = useAppDispatch();

    const addRandomItems = (count = 3) => {
        dispatch(clearCandleItems())
        const pickType = () => CANDLE_ITEM_TYPES[Math.floor(Math.random() * CANDLE_ITEM_TYPES.length)];
        const pickColor = () => COLORS_CONFIG[Math.floor(Math.random() * COLORS_CONFIG.length)];
        for (let i = 0; i < count; i++) {
            dispatch(addCandleItem({type: pickType(), reversed: false, color: pickColor()}));
        }
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={() => addRandomItems(3)}
            fullWidth
        >
            Add 3 random items
        </Button>
    );
}

export default RandomButton;
