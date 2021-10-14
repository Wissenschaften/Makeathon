// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

// Feward components
import Link from 'components/link';
import Image from 'components/image';

// Utilities
import clsx from 'clsx';
import { useStyles } from './styles';

export interface FWhitePaperHProps {
    text?: string;
    href?: string;
    icon?: string;
    image?: string;
    textColor?: string;
    readText?: string;
    readTextColor?: string;
    backgroundColor?: string;
}

const WhitePaperH: React.FC<FWhitePaperHProps> = (props) => {
    
    const classes = useStyles(props);

    const { image, text, readText, href, icon } = props;

    const rootStyle = clsx(classes.root, 'wphContainer');
    const wpBoxLeft = clsx(classes.leftBox, 'wpBoxTop');
    const wpBoxRight = clsx(classes.rightBox, 'wpBoxBottom');
    const textBox = clsx(classes.textStyle, 'textBoxH');
    const buttonBox = clsx(classes.buttonBox, 'buttonBoxH');

    return (
        <Box className={rootStyle}>
            <Box className={wpBoxLeft}>
                <Image className={classes.imageStyle} image={image}/>
            </Box>
            <Box className={wpBoxRight}>
                <Typography className={textBox}>{text}</Typography>
                <Box className={buttonBox}>
                    <Link className={classes.readMoreStyle} href={href}>{readText}
                        <Image className={classes.iconStyle} image={icon}/>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
};

export default WhitePaperH;