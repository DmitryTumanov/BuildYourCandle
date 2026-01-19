import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NavigationState} from "./types";
import {BUILDER_PAGE} from "../utils/constants";

const initialState: NavigationState = {currentPage: BUILDER_PAGE};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        updatePage(state, action: PayloadAction<string>) {
            state.currentPage = action.payload;
        }
    },
});

export const {updatePage} = navigationSlice.actions;
export default navigationSlice.reducer;
