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
    flexWrap: "wrap"
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
  heading: {
    color:"#000000",
  },
  textDescription: {
    color:"#000000",
    marginTop: "1vh",
  }
};

export default signupPageStyle;
