import { StyleSheet } from "react-native";
import { global } from "../../global";

export const styles = StyleSheet.create({
  containerTask: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: global.gray500,
    borderRadius: 5,
    padding: 16,

  },
  newTask: {
    color: global.gray200,
  }
})