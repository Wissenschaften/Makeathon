// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

// Feward Components
import Placement from 'components/placement';
import WhitePaperH from 'components/whitepaperH';
import WhitePaperV from 'components/whitepaperV';

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

    const { text = 'Papers' } = props;

    return (
        <Box className={classes.root}>
            <Typography> {text} </Typography>
            <Placement desktop={
                <WhitePaperV
                    backgroundColor="#162896"
                    href="#"
                    icon="https://feward.org/Projects/StoryWard/arrow.svg"
                    image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Nature_cover%2C_November_4%2C_1869.jpg"
                    readText="Read More"
                    readTextColor="#56FFE6"
                    text="Please share which papers you used to complete this competition"
                    textColor="#fff"
              />
            } mobile={
                <WhitePaperH
                    backgroundColor="#162896"
                    href="#"
                    icon="https://feward.org/Projects/StoryWard/arrow.svg"
                    image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Nature_cover%2C_November_4%2C_1869.jpg"
                    readText="Read More"
                    readTextColor="#56FFE6"
                    text="Please share which papers you used to complete this competition"
                    textColor="#fff"
              />
            } />
        </Box>
    )
};

export default Homepage;