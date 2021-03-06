import { StyleSheet } from "react-native";
import { Fonts } from "@theme";

export default StyleSheet.create({
  title: {
    ...Fonts.style.topic,
    paddingBottom: 30,
  },
  commentText: {
    ...Fonts.style.comments,
    paddingLeft: 10,
    flex: 1,
  },
  numberInput: {
    fontSize: Fonts.size.h4,
    flex: 1,
  },
  phoneContainer: {
    position: "relative",
  },
});
