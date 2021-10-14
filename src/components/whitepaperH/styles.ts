// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

// Utilities
import { FWhitePaperHProps } from './index';

const width = 320;
const height = 1.4142 * width;

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ backgroundColor = '#162896' }: FWhitePaperHProps) => ({
        position: 'relative',
        width: '100%',
        maxWidth: width,
        height: '100%',
        backgroundColor: backgroundColor,
        borderRadius: '12px',
        margin: '24px auto'
    }),
    leftBox: {

    },
    rightBox: {
        marginLeft: 0,
        padding: 16
    },
    buttonBox: {
        position: 'absolute',
        bottom: 7
    },
    imageStyle: {  
        position: 'relative',
        width: width,
        height: height,
        margin: 'auto 0',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13
    },
    textStyle: ({ textColor = '#fff' }: FWhitePaperHProps) => ({
        fontSize: 14,
        color: textColor,
        marginBottom: 24
    }),
    readMoreStyle: ({ readTextColor = '#56FFE6' }: FWhitePaperHProps) => ({
        fontSize: 15,
        color: readTextColor,
    }),
    iconStyle: {        
        width: 24,
        height: 24,
        marginLeft: 16,
    },
})); 