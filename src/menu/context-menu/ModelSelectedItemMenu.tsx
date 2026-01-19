import {Html} from '@react-three/drei'
import {IconButton} from "@mui/material";
import RoundBoxButton from "../../menu/buttons/RoundBoxButton";
import React from "react";
import {BUILDER_PAGE, ITEM_CREATION_STAGE_1_PAGE} from "../../utils/constants";
import {getBuilderState, getNavigationState, useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    changeEditingIndex,
    removeCandleItem,
    reverseCandleItem,
    updateSelectedItemIndex,
    saveCandleItemsHistory
} from "../../store/builderSlice";
import EditIcon from "@mui/icons-material/Edit";
import CachedIcon from "@mui/icons-material/Cached";
import DeleteIcon from "@mui/icons-material/Delete";
import {updatePage} from "../../store/navigationSlice";


function ModelSelectedItemMenu() {
    const dispatch = useAppDispatch();
    const builder = useAppSelector(getBuilderState);
    const navigation = useAppSelector(getNavigationState);

    if (navigation.currentPage !== BUILDER_PAGE) {
        return null;
    }

    const editItem = () => {
        if (builder.selectedItemIndex === -1) return;
        dispatch(changeEditingIndex(builder.selectedItemIndex));
        dispatch(updateSelectedItemIndex(-1));
        dispatch(saveCandleItemsHistory());
        dispatch(updatePage(ITEM_CREATION_STAGE_1_PAGE));
    }

    const deleteItem = () => {
        if (builder.selectedItemIndex === -1) return;
        dispatch(removeCandleItem(builder.selectedItemIndex));
    }

    const reverseItem = () => {
        if (builder.selectedItemIndex === -1) return;
        dispatch(reverseCandleItem(builder.selectedItemIndex));
    }

    return (
        <Html transform={false}>
            <div style={{
                transform: !builder.items[builder.selectedItemIndex].reversed
                    ? 'translate3d(calc(65px - 15px / 2), calc(-130%), 0px)'
                    : 'translate3d(calc(65px - 15px / 2), calc(60%), 0px)',
                display: "flex",
                flexDirection: 'row'
            }}>
                <RoundBoxButton
                    hoverEnabled={false}
                    isSelected={false}
                    customSx={{width: "40px", height: "40px"}}
                    onClick={() => editItem()}
                    hide={builder.hideControls}
                >
                    <IconButton
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '50%',
                            fontSize: "30px"
                        }}
                    >
                        <EditIcon fontSize="inherit"/>
                    </IconButton>
                </RoundBoxButton>
                {builder.items[builder.selectedItemIndex].type.flippable && (
                    <RoundBoxButton
                        hoverEnabled={false}
                        isSelected={false}
                        customSx={{width: "40px", height: "40px"}}
                        onClick={() => reverseItem()}
                        hide={builder.hideControls}
                    >
                        <IconButton
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: '50%',
                                fontSize: "30px",
                            }}
                        >
                            <CachedIcon fontSize="inherit"/>
                        </IconButton>
                    </RoundBoxButton>
                )}
                <RoundBoxButton
                    hoverEnabled={false}
                    isSelected={false}
                    customSx={{width: "40px", height: "40px"}}
                    onClick={() => deleteItem()}
                    hide={builder.hideControls}
                >
                    <IconButton
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '50%',
                            fontSize: "30px",
                            color: "#FF0000"
                        }}
                    >
                        <DeleteIcon fontSize="inherit"/>
                    </IconButton>
                </RoundBoxButton>
            </div>
        </Html>
    );
}

export default ModelSelectedItemMenu;
