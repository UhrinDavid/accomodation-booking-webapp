import { container } from "../../material-kit-react.js";

const reviewsStyle = {
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
  pagination: {
    marginBottom: "20px",
    marginTop: "10px"
  },
  avatar: {
    fontSize: "50px",
    marginBottom: "auto"
  },
  filledStar: {
    color: "#FDCC0D"
  },
  outlinedStar: {
   color: "#FDCC0D"
  },
  inline: {
    display: 'inline',
  },
  text: {
    color: "#000000"
  },
  note: {
    marginTop: "10px",
    marginRight: "auto",
    marginLeft: "-15px",
    width: "100%"
  },
  button: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  input: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  addReviewContainer: {
    marginRight: "20px",
    marginLeft: "10px"
  },
  labelError: {
    color: "red"
  },
};

export default reviewsStyle;
