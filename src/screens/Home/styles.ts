import { StyleSheet } from "react-native";
import { global } from "../../global";

export const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: global.gray700,
    padding:16,
  },
  title: {
    color: global.gray200,
    
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
    alignItems: 'center',
    marginBottom:32,
  },
  socreLine: {
    flexDirection: 'row',
    
    alignItems:'center',
  },
  scoreCreated: {
    color: global.blue,
    marginBottom:32,
  },
  scoreCompleted: {
    color: global.purple,
    marginBottom:32,
  },
  counterScore: {
    backgroundColor: global.gray400,
    //marginLeft: 50,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  listEmptyText: {
    color: global.gray300,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  listEmptyTextBold:{
    color: global.gray300,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listEmptyImage: {
    padding:32,
    marginBottom: 32
  },
  listEmptyContainer: {
    alignItems: 'center'
  }





})
