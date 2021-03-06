import { ButtonBase, makeStyles } from '@material-ui/core';
import { colorPalette } from '../helpers/Globals';
// import '';

const Button = props => {
    const useStyles = makeStyles({
        root: {
            padding: '8px 25px',
            boxShadow: '0px 1px 5px 0px rgb(0 0 0 / 25%), 0px 1px 6px 1px rgb(0 0 0 / 15%)',
            borderRadius: '3px',
            backgroundColor: 'rgba(0,0,0,0.2)',
            fontSize: "14px",
            fontWeight: '500',
            fontFamily: "Poppins"
        },
        primary: {
            backgroundColor: colorPalette.primary,
            color: colorPalette.white
        },
        fullWidth: {
            width: '100%'
        },
        accent: {
            backgroundColor: colorPalette.accent,
            color: colorPalette.black
        },
        small: {
            padding: '5px 15px',
            fontSize: "14px",
        }
    });
    
    const classes = useStyles();
    return (
        <ButtonBase 
            onClick={props.onClick}
            className={`${classes.root} ${props.primary && classes.primary} ${props.accent && classes.accent} ${props.fullWidth && classes.fullWidth} ${props.small && classes.small}`}>
            {props.children}
        </ButtonBase>
    );
};

export default Button;