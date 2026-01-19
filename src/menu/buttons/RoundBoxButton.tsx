import {Box} from "@mui/material";
import React from "react";
import {SxProps} from "@mui/system/styleFunctionSx";
import {Theme as SystemTheme} from "@mui/system/createTheme/createTheme";

interface RoundBoxButtonProps<Theme extends object = SystemTheme> extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    isSelected: boolean;
    hoverEnabled: boolean;
    key?: string;
    onClick?: () => void;
    customSx?: SxProps<Theme>;
    hide?: boolean;
}

function RoundBoxButton(props: RoundBoxButtonProps) {
    const {children, isSelected, hoverEnabled, key, customSx, hide} = props;
    const hoverStyles = hoverEnabled ? {
        '&:hover': {
            boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
            borderColor: '#ffca80'
        }
    } : {};
    const clickEvent = (e: any) => {
        e.stopPropagation();
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <Box
            onClick={clickEvent}
            aria-label={key}
            sx={{
                width: 66,
                height: 66,
                borderRadius: '50%',
                display: hide ? 'none' : 'inline-block',
                overflow: 'hidden',
                verticalAlign: 'middle',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                border: isSelected ? '3px solid #ffb74d' : '3px solid rgba(0,0,0,0.2)',
                transition: 'all 180ms ease',
                cursor: 'pointer',
                ...hoverStyles,
                ...customSx
            }}
        >
            {children}
        </Box>
    );
}

export default RoundBoxButton;
