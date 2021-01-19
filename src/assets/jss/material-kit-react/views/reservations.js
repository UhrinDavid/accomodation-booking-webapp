import { container } from "../../material-kit-react.js";

const reservationsStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "50px",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%',
    marginTop: "30px"
  },
  gridItem: {
      marginLeft: "auto",
      marginRight: "auto",
  },
  headerCell: {
    backgroundColor: "#808080",
  },
};

export default reservationsStyle;
