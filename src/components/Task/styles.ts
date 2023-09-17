import { StyleSheet } from "react-native";
import { global } from "../../global";

export const styles = StyleSheet.create({
  containerTask: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: global.gray500,
    borderRadius: 5,
    padding: 16,
    marginBottom:16,
  },
  newTask: {
    marginLeft: 16,
    width:'80%', 
    color: global.gray200,
  },
  tachado: {
    textDecorationLine: 'line-through',
    color: global.gray300,
    
  }
})