import { Button } from "@mui/material";

function Buttons(props) {
  return (
    <Button
      variant="contained"
      className={props.class}
      style={{
        width: props.width,
        marginTop: "20px",
        backgroundColor: props.bgcolor,
        fontSize: "18px",
        fontWeight: "bold",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

export default Buttons;
