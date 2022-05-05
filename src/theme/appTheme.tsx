import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
    paddingBottom: 30
  },
  containerTitle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 15
  },
  title:{
    fontSize: 16,
    color:'black',
    fontWeight: 'bold'
  },
  containerProfile:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 15
  },
  textProfile:{
    color:'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  imgContainer:{
    alignItems: 'center',
    marginVertical: 15,
  },
  avatar:{
    width: 150,
    height: 150,
    borderRadius: 100
  },
  btnBack:{
    width:'50%',
    alignItems: 'center',
    backgroundColor: 'cyan',
    borderRadius: 10
  },
  txtBack:{
    fontSize: 25, 
    fontWeight: 'bold', 
    color: 'black'
  },
  colorText:{
    color: 'cyan',
    fontWeight: 'bold',
    fontSize: 18
  },
  space:{
    marginBottom: 10, 
    paddingBottom: 10,
    borderBottomWidth: 1, 
    borderBottomColor: 'gray'
  }
})