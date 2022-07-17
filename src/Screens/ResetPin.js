  import React, { Component } from 'react';
  import { View, Text, SafeAreaView, StatusBar ,Image, TextInput, ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
  import Icon from 'react-native-vector-icons/AntDesign';
  import ProgressBar from '../Components/ProgressBar'

  export default class ResetPin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ques1:'',
        ques2:'',
        ques3:''
      };
    }
    render() {
      return (
        <ScrollView style={styles.maincontainer}>
          <StatusBar barStyle='dark-content' backgroundColor='white' ></StatusBar>
          <View style={{ margin:20 }}>
            <Icon name="left" size={25} color="black" />
            <Image
                style={styles.image}
                source={require('../assets/images/Xportspot.png')}
              />
            <Text style={styles.resestpintext}>Reset PIN Code </Text>
          </View>
          <ProgressBar/>
          <View style={{ margin:20 }}>
            <Text style={styles.gernaltext}>Forget your PIN? Don't worry, it happens. </Text>
            <Text style={styles.gernaltext}>Please enter your security answers below. </Text>
          </View>
          <View style={{ margin:20 }}>
            <View>
              <Text style={styles.gernaltext}>What was the first concert you attened?</Text>
                <TextInput
                  style={styles.textinput}
                  placeholder={'Type your answer here'}
                  value={this.state.ques1}
                  onChangeText={(ques1)=>this.setState({ques1})}
                />
            </View>
            <View style={{ marginVertical:20 }}>
              <Text style={styles.gernaltext}>What is the oldest sibling's middle name?</Text>
                <TextInput
                  style={styles.textinput}
                  placeholder={'Type your answer here'}
                  value={this.state.ques2}
                  onChangeText={(ques2)=>this.setState({ques2})}  
                />
            </View>
            <View>
              <Text style={styles.gernaltext}>What city you were born in?</Text>
                <TextInput
                  style={styles.textinput}
                  placeholder={'Type your answer here'}
                  value={this.state.ques3}
                  onChangeText={(ques3)=>this.setState({ques3})} 
                />
            </View>
          </View>
          <View style={{ margin:20 }}>
          <TouchableOpacity
            style={styles.btncountinue}>
              <Text style={styles.btntext}>
                Countinue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  }
  const styles = StyleSheet.create({ 
      maincontainer:{
      flex:1 ,
      backgroundColor:'white'
      },
      image:{
        height:80,
        width:80,
        marginVertical:30 
      },
      resestpintext:{
        fontWeight:'800', 
        fontSize:20, 
        color:'black'  
      },
      gernaltext:{
        color:'black' ,
        fontSize:16
      },
      textinput:{
        borderColor:'rgba(0,0,0,0.35)',
        borderWidth:1,
        borderRadius:10,
        paddingLeft:10,
        height: 45,
        marginTop:10
      },
      btncountinue:{
        height: 45,
        borderRadius: 10,
        backgroundColor:'#cccccc',
        justifyContent:'center',
        marginTop:55
      },
      btntext:{
        color:'white',
        fontSize:16,
        textAlign:'center'
      }
  });