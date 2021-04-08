import { InputBase, makeStyles, withWidth } from "@material-ui/core";
import { colorPalette } from "../helpers/Globals";

const Input = props => {
    const useStyles = makeStyles({
        input: {
            padding: props.width === "lg" ? "8px 15px" : "5px 10px",
            backgroundColor: colorPalette.white,
            width: "100%",
            borderRadius: "5px",
            borderBottom: `1px solid ${colorPalette.primary}`,
            fontFamily: "Poppins",
            fontSize: props.width === "lg" ? "18px" : "14px"
        }
    });

    const classes = useStyles();
    return (
        <InputBase
            className={`${classes.input}`}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value} />
    );
};

export default withWidth()(Input);