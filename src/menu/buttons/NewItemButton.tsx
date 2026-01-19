import React from "react";
import {useAppDispatch} from "../../store/hooks";
import {updatePage} from "../../store/navigationSlice";
import {ITEM_CREATION_STAGE_1_PAGE} from "../../utils/constants";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function NewItemButton() {
    const dispatch = useAppDispatch();

    const openNewItemMenu = () => {
        dispatch(updatePage(ITEM_CREATION_STAGE_1_PAGE));
    };

    return (
        <Button variant="text" startIcon={<AddIcon />} onClick={() => openNewItemMenu()}>
            New Item
        </Button>
    );
}

export default NewItemButton;
