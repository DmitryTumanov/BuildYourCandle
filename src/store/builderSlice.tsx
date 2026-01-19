import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CandleItem, CurrentBuilderState} from "./types";
import {MAIN_CANDLE_TYPE} from "../utils/constants";

const initialState: CurrentBuilderState = {
    candle: {type: MAIN_CANDLE_TYPE},
    items: [],
    itemsHistory: [],
    selectedItemIndex: -1,
    editingItemIndex: -1,
    hideControls: false
};

const builderSlice = createSlice({
    name: 'builder',
    initialState,
    reducers: {
        clearCandleItems(state) {
            state.items = [];
        },
        saveCandleItemsHistory(state) {
            state.itemsHistory = [...state.items];
        },
        restoreCandleItemsHistory(state) {
            state.items = [...state.itemsHistory];
        },
        addCandleItem(state, action: PayloadAction<CandleItem>) {
            state.items.push(action.payload);
        },
        addCandleItemToTop(state, action: PayloadAction<CandleItem>) {
            state.items.unshift(action.payload);
        },
        removeCandleItem(state, action: PayloadAction<number>) {
            state.items = [...state.items.filter((_, index) => index !== action.payload)];
        },
        updateSelectedItemIndex(state, action: PayloadAction<number>) {
            state.selectedItemIndex = state.selectedItemIndex === action.payload ? -1 : action.payload;
        },
        reverseCandleItem(state, action: PayloadAction<number>) {
            state.items[action.payload].reversed = !state.items[action.payload].reversed;
        },
        changeEditingIndex(state, action: PayloadAction<number>) {
            state.editingItemIndex = action.payload;
        },
        updateCandleItem(state, action: PayloadAction<{index: number, item: CandleItem}>) {
            state.items[action.payload.index] = action.payload.item;
        },
        updateControlsVisibility(state) {
            state.hideControls = !state.hideControls;
        }
    },
});

export const {
    clearCandleItems,
    saveCandleItemsHistory,
    restoreCandleItemsHistory,
    addCandleItem,
    addCandleItemToTop,
    removeCandleItem,
    updateSelectedItemIndex,
    reverseCandleItem,
    changeEditingIndex,
    updateCandleItem,
    updateControlsVisibility
} = builderSlice.actions;
export default builderSlice.reducer;
