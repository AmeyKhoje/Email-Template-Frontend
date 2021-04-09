import { InputBase, makeStyles, withWidth } from "@material-ui/core";
import { colorPalette } from "../helpers/Globals";

const Input = props => {
    console.log(props.errorField);
    const useStyles = makeStyles({
        input: {
            padding: props.width === "lg" ? "8px 15px" : "5px 10px",
            backgroundColor: colorPalette.white,
            width: "100%",
            borderRadius: "5px",
            borderBottom: props.errorField ? `2px solid red` : `2px solid ${colorPalette.primary}`,
            fontFamily: "Poppins",
            fontSize: props.width === "lg" ? "18px" : "14px",
            transition: "all 0.3s"
        },
        error: {
            color: "red",
            fontSize: "10px",
            fontFamily: "Poppins",
            transition: "all 0.3s"
        }
    });

    const classes = useStyles();
    return (
        <div>
            <InputBase
                className={`${classes.input}`}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChangeText} />
                <span className={`${classes.error}`}>
                    {props.errorField && props.errorField.message}
                </span>
        </div>
    );
};

export default withWidth()(Input);