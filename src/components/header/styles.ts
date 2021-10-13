// Material UI Components
import { makeStyles, Theme } from '@material-ui/core/styles';

// Utilities
import { FHeaderProps } from './index';

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ background }: FHeaderProps) => ({
        backgroundColor: background,
        display: 'flex',
        width: '100%'
    }),
    brand: ({ }: FHeaderProps) => ({
        letterSpacing: 2,
    }),
    image: {
        height: 53,
        marginBottom: 0,
    },
    link: ({ background, color }: FHeaderProps) => ({
        backgroundColor: background,
        color: color,
        marginLeft: 20,
        padding: '9px 10px 8px 0px'
    }),
    dropdown: ({ background, color }: FHeaderProps) => ({
        backgroundColor: background,
        color: color,
        padding: '9px 10px 8px 10px',
    })
}));