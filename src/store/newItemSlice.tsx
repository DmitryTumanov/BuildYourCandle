import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CandleItem, CandleItemType, ColorType} from "./types";
import {CANDLE_ITEM_TYPES, COLORS_CONFIG} from "../utils/constants";

const initialState: CandleItem = {type: CANDLE_ITEM_TYPES[0], reversed: false, color: COLORS_CONFIG[0]};

const newItemSlice = createSlice({
    name: 'newItem',
    initialState,
    reducers: {
        updateType(state, action: PayloadAction<CandleItemType>) {
            state.type = action.payload;
        },
        updateColor(state, action: PayloadAction<ColorType>) {
            state.color = action.payload;
        },
        updateReverse(state, action: PayloadAction<boolean>) {
            state.reversed = action.payload;
        }
    },
});

export const {updateType, updateColor, updateReverse} = newItemSlice.actions;
export default newItemSlice.reducer;
