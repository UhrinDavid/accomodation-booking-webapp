import { container } from "../../material-kit-react.js";

const signupPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "50px",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "20px"
  },
  image: {
    maxWidth: "100%"
  },
  specificationList: {
    listStyleType: "none",
  },
  specificationItem: {
    display: "inline-block",
    paddingLeft: "0",
  },
  text: {
    color:"#000000",
    marginTop: "0",
    marginBottom: "0",
    textAllign: "left",
  },
  textDescription: {
    color:"#000000",
    marginTop: "1vh",
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  picker: {
    color: "#000000",
  },
  pickerInput: {
    marginBottom: "10px"
  },
  note: {
    marginTop: "10px",
    marginRight: "auto",
    width: "100%"
  },
  labelError: {
    color: "red"
  },
  labelClassic: {
    color: "#000000"
  }
};

export default signupPageStyle;
