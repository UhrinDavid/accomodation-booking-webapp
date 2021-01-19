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
  head: {
    backgroundColor: "#808080",
    color: "#FFFFFF",
  },
  rowUpcoming: {
    backgroundColor: "#c0ff33",
  },
  rowActive: {
    backgroundColor: "#feff5c",
  },
  rowPast: {
    backgroundColor: "#ffa879"
  },
  legend: {
    color: "#000000",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    marginBottom: "5px"
  },
  rowUpcomingDiv: {
    backgroundColor: "#c0ff33",
    minWidth: "16px",
    minHeight: "16px",
    marginLeft: "10px",
    marginRight: "5px"
  },
  rowActiveDiv: {
    backgroundColor: "#feff5c",
    minWidth: "16px",
    minHeight: "16px",
    marginLeft: "10px",
    marginRight: "5px"
  },
  rowPastDiv: {
    backgroundColor: "#ffa879",
    minWidth: "16px",
    minHeight: "16px",
    marginLeft: "10px",
    marginRight: "5px"
  },

};

export default reservationsStyle;
