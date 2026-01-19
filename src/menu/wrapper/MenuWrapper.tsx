import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";
import React from "react";

interface MenuWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    height: string;
}

function MenuWrapper(props: MenuWrapperProps) {
    const {children, height} = props;
    const theme = useTheme();
    const isWideScreen = useMediaQuery(theme.breakpoints.up('md'));

    const menuSx = {
        order: {xs: 1, md: 2},
        ...(isWideScreen ? {} : {
            position: 'fixed' as const,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: height,
            transition: 'height 300ms ease',
            zIndex: 1300,
            boxShadow: '0 -2px 8px rgba(0,0,0,0.15)'
        }),
    };

    return (
        <Grid size={{xs: 12, md: 4}} sx={menuSx}>
            <Box sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    flex: 1,
                    overflow: 'auto',
                    padding: '20px'
                }}>
                    {children}
                </Box>
            </Box>
        </Grid>
    );
}

export default MenuWrapper;
