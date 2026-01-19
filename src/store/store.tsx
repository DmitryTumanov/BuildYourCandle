import { configureStore } from '@reduxjs/toolkit';
import builderReducer from './builderSlice';
import navigationReducer from './navigationSlice';
import newItemReducer from './newItemSlice';

export const store = configureStore({
    reducer: {
        builder: builderReducer,
        navigation: navigationReducer,
        newItemState: newItemReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
