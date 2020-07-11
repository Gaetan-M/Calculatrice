import React from 'react';
import {View,Button,Text,StyleSheet,TextInput,ScrollView} from 'react-native'
import {style} from '../Style.js'
const number=['0','1','2','3','4','5','6','7','8','9','00',',']
const operator1=['-','+'];
const operator2=['/','x','DEL','CE']

class ButtonList extends React.Component{
    
    constructor(){
    	super()
    	this.state={
    		text:'',
    		operator:'',
    		result:''

    	}
    }
    calculate(){
    	let result=0;
    	let operator=this.state.operator;
    	switch(operator)
    	{
           case '+':
    	   result=Number(this.state.result)+Number(this.state.text)
    	   console.log(result)
    	   return this.setState({result:result.toString(),text:'',operator:''})
    	   console.log(this.state.result)
           break;     	      	   
           case '-':
    	   result=Number(this.state.result)-Number(this.state.text)
    	   console.log(result)
    	   return this.setState({result:result.toString(),text:'',operator:''})
           break;    	   
           case '*':
    	   result=Number(this.state.result)*Number(this.state.text)
    	   console.log(result)
    	   return this.setState({result:result.toString(),text:'',operator:''})
           break;    	   
           case '/':
           if(this.state.text=='0' || this.state.text=='00')
           	return this.setState({result:'error',text:'',operator:''})
    	   result=Number(this.state.result)/Number(this.state.text)
    	   console.log(result)
    	   return this.setState({result:result.toString(),text:'',operator:''})
           break;
    	}
    }
    action(value){
    	// console.log(this.state.text)
    	// console.log('result',this.state.result)
      switch(value){
      	case '=':
         this.calculate(this.state.operator);
       	break;
      	case 'CE':
      	return this.setState({result:'',text:'',operator:''})
      	break;   	
      	case 'DEL':
      	return this.setState({text:''})
      	break;
      	case '+':
      	return this.setState({operator:'+',result:this.state.text,text:''})
      	break;
      	case '-':
      	return this.setState({operator:'-',result:this.state.text,text:''})
      	break;      	
      	case 'x':
      	return this.setState({operator:'*',result:this.state.text,text:''})
      	break;      	
      	case '/':
      	return this.setState({operator:'/',result:this.state.text,text:''})
      	break;
      	
      	default:
      	return this.setState({text:this.state.text+value})
      }
    }
	render(){
		const egal='=';
		return(
		  <View style={style.body}>
		      <View style={style.title}></View>
			  <View style={style.wrapper}>
				   <View style={style.wrapperInput}>
                        <Text style={style.text}>MATHEMATICAL CALCULATOR</Text>				         
					   	<TextInput placeholder='' style={style.input} value={this.state.result}/>
					   	<View style={style.inputContainer}>
						   	<TextInput placeholder='' style={style.input1} value={this.state.operator}/>
						   	<TextInput placeholder='|     ' style={style.input2} value={this.state.text}/>
					   	</View>
				   </View>
				   <View style={style.container}>
			            {operator2.map((num,index)=>{return(<View key={index} style={style.red} onStartShouldSetResponder={()=>this.action(num)}><Text style={style.center}>{num}</Text></View>)})}
			        </View>
			        <View style={style.container}>
				        <View style={style.View1}>
				            {number.map((num,index)=>{return(<View key={index} style={style.blue} onStartShouldSetResponder={()=>this.action(num)}><Text style={style.center}>{num}</Text></View>)})}
				        </View>            
				        <View style={style.container1}>
				            {operator1.map((num,index)=>{return(<View key={index} style={style.red} onStartShouldSetResponder={()=>this.action(num)}><Text style={style.center}>{num}</Text></View>)})}
				            <View style={style.redEgal} onStartShouldSetResponder={()=>this.action(egal)}>
				            	<Text style={style.center}>{egal}
				            	</Text>
				            </View>
				            <View style={style.footer}>
                                <Text>By LE LOUCHE</Text>
			                </View>
				        </View>
			        </View>

			  </View> 
 
		  </View>
		    
			)
	}
}
export default ButtonList;
