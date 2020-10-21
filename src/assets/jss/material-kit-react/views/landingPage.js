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
  card: {
    maxWidth: "100%",
    maxHeight: "300px"
  },
  description: {
    color:"#000000",
    overflow: "hidden",
    marginTop: 0,
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  },
  cardHeader: {
    width: "100%",
    marginTop: 0,
  }
};

export default signupPageStyle;
