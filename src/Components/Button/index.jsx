import { Button } from "@mui/material";

function Buttons(props) {
  return (
    <Button
      variant="contained"
      style={{
        width: "100%",
        marginTop: "20px",
        backgroundColor: "#950B0B",
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
