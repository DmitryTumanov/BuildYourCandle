import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getBuilderState = (state: RootState) => state.builder;
export const getNavigationState = (state: RootState) => state.navigation;
export const getNewCompositionItemState = (state: RootState) => state.newItemState;