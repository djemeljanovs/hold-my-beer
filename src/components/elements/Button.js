import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    button: {
        cursor: 'pointer',
        margin: 10,
        borderRadius: 5,
        background: 'blue',
        color: 'white',
        padding: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        userSelect: 'none',
    },
});

export default function Button({children, className, ...props}) {
    const classes = useStyles();
    return <div className={`${className} ${classes.button}`} {...props}>{children}</div>
}