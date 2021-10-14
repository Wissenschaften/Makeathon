// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

// Utilities
import { FWhitePaperVProps } from './index';

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ backgroundColor }: FWhitePaperVProps) => ({
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 16,
        backgroundColor: backgroundColor,
        borderRadius: '12px',
    }),
    leftBox: {

    },
    rightBox: {
        marginLeft: 24
    },
    buttonBox: {
        position: 'absolute',
        bottom: 7
    },
    imageStyle: {  
        position: 'relative',      
        width: 210,
        height: 297,
        margin: 'auto 0',
        borderRadius: 13,
        [theme.breakpoints.down(1024)]: {
            width: 105,
            height: 148.5
        }
    },
    textStyle: ({ textColor }: FWhitePaperVProps) => ({
        fontSize: 14,
        color: textColor,
        marginBottom: 24
    }),
    readMoreStyle: ({ readTextColor }: FWhitePaperVProps) => ({
        fontSize: 15,
        color: readTextColor,
    }),
    iconStyle: {        
        width: 24,
        height: 24,
        marginLeft: 16,
    },
})); 