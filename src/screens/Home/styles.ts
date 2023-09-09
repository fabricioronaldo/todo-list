import { StyleSheet } from "react-native";
import { global } from "../../global";

export const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: global.gray700,
    padding:16,
  },
  title: {
    color: global.purple,
    marginBottom:32,
  },
  titleAplication: {
    alignItems: 'center',
    marginBottom: 48
  },
  form:{
    width:'100%',
    flexDirection:'row',
    marginBottom: 32,
  },
  input:{
    flex: 1,
    height:56,
    marginRight: 8,
    backgroundColor: global.gray500,
    color: global.gray200,
    fontSize:16,
    padding:16,
    borderRadius: 5,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: global.blueDark,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    borderBottomWidth: 1,
    borderBottomColor: global.gray100,
    flexDirection: 'row',
    justifyContent:'space-around',

  }


})
