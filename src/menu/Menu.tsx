import {getNavigationState, useAppSelector} from "../store/hooks";
import {ITEM_CREATION_PAGES, ITEM_CREATION_STAGE_1_PAGE, ITEM_CREATION_STAGE_2_PAGE} from "../utils/constants";
import ItemCreationStep1 from "./itemCreation/ItemCreationStep1";
import ItemCreationStep2 from "./itemCreation/ItemCreationStep2";
import {Drawer} from "@mui/material";
import React from "react";

function Menu() {
    const navigation = useAppSelector(getNavigationState);
    const isEditEnabled = ITEM_CREATION_PAGES.indexOf(navigation.currentPage) > -1;

    return (
        <Drawer
            sx={{
                width: isEditEnabled ? "65px" : 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: isEditEnabled ? "65px" : 0,
                    boxSizing: 'border-box',
                }
            }}
            variant="permanent"
            anchor="left"
            open={isEditEnabled}
        >
            {navigation.currentPage === ITEM_CREATION_STAGE_1_PAGE && <ItemCreationStep1/>}
            {navigation.currentPage === ITEM_CREATION_STAGE_2_PAGE && <ItemCreationStep2/>}
        </Drawer>
    );
}

export default Menu;
