import {Html} from '@react-three/drei'
import {IconButton} from "@mui/material";
import RoundBoxButton from "../../menu/buttons/RoundBoxButton";
import React from "react";
import {BUILDER_PAGE, ITEM_CREATION_STAGE_1_PAGE, ITEM_CREATION_STAGE_2_PAGE} from "../../utils/constants";
import {getNavigationState, useAppDispatch, useAppSelector} from "../../store/hooks";
import {changeEditingIndex, restoreCandleItemsHistory} from "../../store/builderSlice";
import {updatePage} from "../../store/navigationSlice";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


function ModelEditItemStep1Menu() {
    const dispatch = useAppDispatch();
    const navigation = useAppSelector(getNavigationState);

    if (navigation.currentPage !== ITEM_CREATION_STAGE_1_PAGE) {
        return null;
    }

    const nextEditStep = () => {
        dispatch(updatePage(ITEM_CREATION_STAGE_2_PAGE));
    };

    const cancelCurrentStep = () => {
        dispatch(restoreCandleItemsHistory());
        dispatch(changeEditingIndex(-1));
        dispatch(updatePage(BUILDER_PAGE));
    };

    return (
        <Html transform={false}>
            <div style={{
                transform: 'translate3d(calc(-50%), calc(100%), 0)',
                display: "flex",
                flexDirection: 'row'
            }}>
                <RoundBoxButton
                    isSelected={false}
                    key={"new_item_button"}
                    hoverEnabled={false}
                    onClick={() => nextEditStep()}
                >
                    <IconButton
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '50%',
                            fontSize: "45px"
                        }}
                    >
                        <DoneIcon fontSize="inherit"/>
                    </IconButton>
                </RoundBoxButton>
                <RoundBoxButton
                    isSelected={false}
                    key={"new_item_button"}
                    hoverEnabled={false}
                    onClick={() => cancelCurrentStep()}
                >
                    <IconButton
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '50%',
                            fontSize: "45px"
                        }}
                    >
                        <CloseIcon fontSize="inherit"/>
                    </IconButton>
                </RoundBoxButton>
            </div>
        </Html>
    );
}

export default ModelEditItemStep1Menu;
