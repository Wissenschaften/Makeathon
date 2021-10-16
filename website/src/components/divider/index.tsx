// React components
import React from 'react';

// Material.ui components
import {Divider as FDivider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface FDividerProps {
    color?: string;
    light?: boolean;
    margin?: string;
    variant?: 'fullWidth' | 'inset' | 'middle';
}

export const useStyles = makeStyles(() => ({
    root: ({ color }: FDividerProps) => ({
        background: color,
    }),
}));

const Divider: React.FC<FDividerProps> = (props) => {

    const classes = useStyles(props);
    
    const {
        children,
        light,
        variant,
        color,
        margin
    } = props;

    return (
        <FDivider className={classes.root} style={{margin: margin}} light={light} orientation={'horizontal'} variant={variant} color={color}>
            {children}
        </FDivider>
    )
};

export default Divider;