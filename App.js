import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image , Button, Pressable } from 'react-native';
import { BiArrowBack } from "react-icons/bi";
import { BiBellMinus } from "react-icons/bi";
import { BiChevronDownCircle } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";
// import { SketchPicker } from 'react-color';

export default function App() {
  return (
    <View >

      <View style=
      {{ flex:1 , padding:10, flexDirection:'row', justifyContent:'space-between' , marginBottom:25}}>

<BiArrowBack/>
<BiBellMinus/>

      </View>  




<View  style=
      {{  flexDirection:'row', justifyContent:'space-between',  padding:25 ,marginBottom:30}}>



<View>
<Text>
  Sep 18 , 2020
</Text>

<Text style={{fontSize:20 , }}>
  Nizam Ramazanzade
</Text>
</View>

<View > Şəkli göturmur nədənsə 
<Image  source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}/>
</View>













</View>



<View style={{paddingLeft:25, marginBottom:20}}>
  <Text style={{fontSize:30, fontWeight:'bold'}}>
    PROJECT
  </Text>
</View>



<View style=
      {{  flexDirection:'row', justifyContent:'space-around' , marginBottom:25  }}>
  <Text style={{fontWeight:'bold', fontSize:20}}>Wepsite</Text>
  <Text style={{fontSize:20}}>Mobile</Text>
  <Text style={{fontSize:20}}>Research</Text>
</View>



<View style=
      {{  flexDirection:'row', justifyContent:'space-evenly' }} >
  <View style=
      {{  flexDirection:'colum', justifyContent:'space-evenly' , backgroundColor:'#d41414' , borderRadius: 15 , padding:50  }}>
   <BiChevronDownCircle style={{fontSize:65,paddingLeft:21}}/>
   <Text style={{fontSize:25 , paddingLeft:35, marginBottom:5, marginTop:5}}>10</Text>
   <Text style={{fontSize:20}}>
    Success Task!
   </Text>
  </View>

  <View style=
      {{  flexDirection:'colum', justifyContent:'space-evenly' , backgroundColor:'#6115f7' , borderRadius: 15 , padding:50 }}>
   <BiAlarm style={{fontSize:65,paddingLeft:21}}/>



    <Text style={{fontSize:25 , paddingLeft:35, marginBottom:5, marginTop:5}}>07</Text>
   <Text style={{fontSize:20}}>
    Success Task!
   </Text>
  </View>



</View>




<View style={{paddingLeft:25, marginBottom:20 , marginTop:25}}>
  <Text style={{fontSize:20,}}>
   IN PROGRESS
  </Text>
</View>


  
<View style={styles.buton3}>

<View style={{
  marginTop:5,
marginLeft:20
}}>
  <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
</View>


<View style={{flexDirection:'row' , justifyContent: 'space-around' , marginTop:15}}> 

<View >
<Pressable style={styles.buton }>Aug 3</Pressable>

</View>


<View>
<Pressable  style={styles.buton2 }>Readin day</Pressable>
</View>


</View>




</View>



<View style={styles.buton3}>

<View style={{
  marginTop:5,
marginLeft:20
}}>
  <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
</View>


<View style={{flexDirection:'row' , justifyContent: 'space-around' , marginTop:15}}> 

<View >
<Pressable style={styles.buton }>Aug 7</Pressable>

</View>


<View>
<Pressable  style={styles.buton2 }>Readin day</Pressable>
</View>


</View>




</View>
























</View>
  );
}

const styles = StyleSheet.create({
  buton: {
    backgroundColor: '#f4662d',
      borderRadius:  10 ,
    paddingBottom: 5  ,
    paddingTop: 5 ,
    paddingLeft: 15 ,
    paddingRight: 15 ,
    marginBottom:10
  },
  buton2: {
    backgroundColor: '#abb8c3',
      borderRadius:  10 ,
    paddingBottom: 5  ,
    paddingTop: 5 ,
    paddingLeft: 30 ,
    paddingRight: 30 ,
    marginBottom:10
  },
  buton3:{
    flexDirection:'column' ,
    borderWidth: 1,
    alignContent:'center',
    marginBottom:20

  }
});
