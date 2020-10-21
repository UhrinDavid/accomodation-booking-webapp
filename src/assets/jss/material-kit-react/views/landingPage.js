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
  },
  card: {
    maxWidth: "95%",
    maxHeight: "400px",
  },
  cardBody: {
    overflow: "hidden",
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.3,
  },
  description: {
    color:"#000000",
    marginTop: 0,
  },
  media: {
    maxHeight: "200px",
    borderRadius: "6px 6px 0px 0px"
  },
  cardHeader: {
    width: "100%",
    marginTop: 0,
    maxHeight: "20%",
  }
};

export default signupPageStyle;
