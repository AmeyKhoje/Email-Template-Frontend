import { InputBase, makeStyles, withWidth } from "@material-ui/core";
import { colorPalette } from "../helpers/Globals";

const Input = props => {
    console.log(props.height);
    const useStyles = makeStyles({
        input: {
            padding: props.width === "lg" ? "7px 15px" : "5px 10px",
            backgroundColor: props.variant === "filled" ? colorPalette.white : colorPalette.accent,
            width: "100%",
            borderRadius: "5px",
            borderBottom: props.errorField ? `2px solid red` : `2px solid ${colorPalette.primary}`,
            fontFamily: "Poppins",
            fontSize: props.width === "lg" ? "14px" : "12px",
            transition: "all 0.3s",
            height: props.height && props.height+"px"
        },
        error: {
            color: "red",
            fontSize: "10px",
            fontFamily: "Poppins",
            transition: "all 0.3s"
        },
        small: {
            padding: props.width === "lg" ? "5px 10px" : "3px 8px",
            fontSize: props.width === "lg" ? "13px" : "10px",
        }
    });

    const classes = useStyles();
    return (
        <div>
            <InputBase
                className={`${classes.input} ${props.small && classes.small}`}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChangeText}
                onKeyPress={props.onKeyPress}
                type={props.type}
                rows={props.rows}
                multiline={props.multiline} />
                <span className={`${classes.error}`}>
                    {props.errorField && props.errorField.message}
                </span>
        </div>
    );
};

export default withWidth()(Input);