export type NavigationState = {
    currentPage: string;
}

export type CurrentBuilderState = {
    candle: Candle,
    items: CandleItem[],
    itemsHistory: CandleItem[],
    selectedItemIndex: number,
    editingItemIndex: number,
    hideControls: boolean,
}

export type Candle = {
    type: string;
}

export type CandleItem = {
    type: CandleItemType;
    reversed: boolean;
    color: ColorType;
}

export type ColorType = {
    name: string;
    color: string;
    backgroundColor: string;
}

export type CandleItemType = {
    name: string;
    label: string;
    file: string;
    svgFile: string;
    weight: number;
    height: number;
    flippable: boolean;
}