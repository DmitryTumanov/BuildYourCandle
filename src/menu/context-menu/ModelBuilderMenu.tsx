import {Html} from '@react-three/drei'
import {IconButton} from "@mui/material";
import RoundBoxButton from "../../menu/buttons/RoundBoxButton";
import React from "react";
import {BUILDER_PAGE, CANDLE_ITEM_TYPES, COLORS_CONFIG, ITEM_CREATION_STAGE_1_PAGE} from "../../utils/constants";
import {getBuilderState, getNavigationState, useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    addCandleItem,
    changeEditingIndex,
    saveCandleItemsHistory,
    updateSelectedItemIndex
} from "../../store/builderSlice";
import {updatePage} from "../../store/navigationSlice";
import AddIcon from "@mui/icons-material/Add";

function ModelBuilderMenu() {
    const dispatch = useAppDispatch();
    const builder = useAppSelector(getBuilderState);
    const navigation = useAppSelector(getNavigationState);

    if (navigation.currentPage !== BUILDER_PAGE) {
        return null;
    }

    const createAndEditNewItem = () => {
        dispatch(saveCandleItemsHistory());
        dispatch(addCandleItem({type: CANDLE_ITEM_TYPES[0], reversed: false, color: COLORS_CONFIG[0]}));
        dispatch(updateSelectedItemIndex(-1));
        dispatch(changeEditingIndex(builder.items.length));
        dispatch(updatePage(ITEM_CREATION_STAGE_1_PAGE));
    };

    return (
        <Html transform={false}>
            <div style={{
                transform: 'translate3d(calc(-200%), calc(-200%), 0)',
                display: "flex",
                flexDirection: 'row'
            }}>
                <RoundBoxButton
                    isSelected={false}
                    key={"new_item_button"}
                    hoverEnabled={false}
                    onClick={() => createAndEditNewItem()}
                    hide={builder.hideControls}
                >
                    <IconButton
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '50%',
                            fontSize: "45px"
                        }}
                    >
                        <AddIcon fontSize="inherit"/>
                    </IconButton>
                </RoundBoxButton>
            </div>
        </Html>
    );
}

export default ModelBuilderMenu;
