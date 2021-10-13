// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface FHomepageProps {
    text?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ text }: FHomepageProps) => ({
        display: "block"
    }),
    imageStyle: {
        width: '100%',
        maxWidth: 1180
    }
}));

const Homepage: React.FC<FHomepageProps> = (props) => {
    
    const classes = useStyles(props);

    const { text = 'AIvengers project base' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
        </Box>
    )
};

export default Homepage;