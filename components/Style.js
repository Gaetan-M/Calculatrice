import {StyleSheet} from 'react-native'


export const style= StyleSheet.create({
	container:{
      flex:1,
      flexDirection:'row',
      // borderWidth:3,
      justifyContent:'space-around'
	},	
	container1:{
      marginRight:-5,
      height:190,
      marginTop:60
    },
	View1:{
      // borderWidth:1,
      // borderColor:'green'
      flex:1,
      width:180,
      height:400,
      flexWrap:'wrap',
      justifyContent:'space-around',
      flexDirection:'row',
      marginTop:65
	},
	  red:{
		width:80,
		height:35,
		backgroundColor:'red',
		margin:10,
		marginTop:15,
		padding:5,
		textAlign:'center'

	},	  
	redEgal:{
		width:80,
        height:65,
        paddingTop:20,
		backgroundColor:'red',
		margin:10,
		marginTop:10,
		textAlign:'right'

	},
	blue:{
		width:65,
		height:30,
		backgroundColor:'blue',
		margin:10,
	    textAlign:'center',
	    padding:5
	},
	input:{
		width:356,
		height:30,
		marginLeft:-4.5,
		marginTop:10,
		// borderWidth:1,
		// borderColor:'#00e',
		textAlign:'right'
	},	
	input2:{
		width:180,
		height:30,
		marginTop:10,
		marginLeft:-4.5,
		borderBottomWidth:1,
		borderColor:'#00e',
		textAlign:'right'
	},	
	input1:{
		width:180,
		height:30,
		marginTop:10,
		// borderWidth:1,
		// borderColor:'#fe0'
	},
	wrapper:{
      flex:1,
      flexDirection:'column'
	},
	center:{
		textAlign:'center'
	},
	wrapperInput:{
		marginTop:0,
		marginBottom:140
	},
	inputContainer:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-between'
	},
	title:{
		borderWidth:1,
		width:359,
		height:150,
		backgroundColor:'#00f',
		marginLeft:-4.5,
	    paddingTop:160,
	    marginBottom:10
	},
	body:{
		marginTop:30,
		marginLeft:5,
	},
	text:{
		fontSize:20,
		fontFamily:'Roboto',
		fontWeight:'bold',
		textAlign:'center',
	},
	footer:{
		borderWidth:1,
		width:100,
		marginTop:100,
		marginLeft:-120
	}
});