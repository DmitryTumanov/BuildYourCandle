import {
    MAIN_CANDLE_TYPE,
    CANDLE_ITEM_TYPES
} from "./constants";
import {CandleItemType} from "../store/types";

export function mapCandleType(candleType: string): string {
    switch (candleType) {
        case MAIN_CANDLE_TYPE:
            return '/models/candle.glb';
        default:
            return 'Unknown Candle Type';
    }
}

export function mapCandleItemType(candleItemType: string): CandleItemType {
    return CANDLE_ITEM_TYPES.find(item => item.name === candleItemType)!;
}