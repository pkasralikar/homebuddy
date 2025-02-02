<script src="http://localhost:8097"></script>
import { Image, StyleSheet, Platform, View, Text, Button, TouchableOpacity, ScrollView, Alert, StatusBar, Dimensions } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import * as Progress from 'react-native-progress';
import { useFonts } from 'expo-font';
const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    'PlaypenSans-Regular' : require('../../assets/fonts/PlaypenSans-Regular.ttf'),
    'PlaypenSans-Bold' : require('../../assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Medium' : require('../../assets/fonts/PlaypenSans-Medium.ttf')
  });

  if(!fontsLoaded){
    return <View><Text>Loading...</Text></View>
  }

  return (
    
    <View style={styles.mainContainer}>
     
      <ScrollView horizontal={false} style={{flex: 1}} >
      {/* <ThemedView> */}
      <View style={styles.section1maincontainer}>
        {/* <View style={styles.section1container}> */}
          <View style={styles.card}>
            <Image
              source={require('@/assets/images/speech1.png')}
              style={styles.section1tag}
            />
            <View style={styles.section1imagecontainerstyle}>
              <Image
              source={require('@/assets/images/story1.png')}
              style={styles.section1imagestyle}
            />
            </View>
            <View style={styles.section1bottombar}>
              <Text style={styles.section1bottombarText}>The Teacher and Barber</Text>
              <TouchableOpacity onPress={()=>Alert.alert('play')} style={styles.playButtonStyle}><Text style={styles.playButtonTextStyle}>PLAY</Text></TouchableOpacity>
            </View>
          </View>
          {/* </View> */}
        </View>
        
      {/* </ThemedView> */}

      {/* section 2  */}
      {/* <ThemedView> */}
        <View style={styles.section2container}>
        <Text style={styles.classmemoriestext}>Class Memories</Text>
        <ScrollView horizontal={true} style={styles.section2cardcontainer}>
          <View style={styles.section2card}>
            <Image
              source={require('@/assets/images/boat.png')}
              // style={styles.section1}
            />
            <View>
              <Text style={styles.waterwaytextstyle}>Water way of transport</Text>
              <View style={styles.arrowtextcontainer}>
                <Text style={styles.waterwaytextstylewithcolor}>Watch Video</Text>
                <TouchableOpacity>
                  <IconSymbol size={28} name='arrow-forward' color={'orangered'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.section2card}>
          <Image
            source={require('@/assets/images/child1.png')}
            // style={styles.section1}
          />
          <View>
            <Text style={styles.waterwaytextstyle}>Father's Day Celebration</Text>
            <View style={styles.arrowtextcontainer}>
              <Text style={styles.waterwaytextstylewithcolor}>See post</Text>
              <TouchableOpacity>
                <IconSymbol size={28} name='arrow-forward' color={'orangered'} />
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </ScrollView>
        </View>
        {/* </ThemedView> */}

        {/* section 3 Explore  */}
        <View style={styles.section3container}>
          <Text style={styles.classmemoriestext}>Explore</Text>
          <ScrollView horizontal={true} style={styles.section3cardcontainer}>
            <TouchableOpacity>
              <View style={styles.section3card}>
                <Image
                  source={require('@/assets/images/child2.png')}
                  style={styles.section3image}
                />
                <Text style={styles.section3text}>The Brave Little Explorer</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.section3card}>
                <Image
                  source={require('@/assets/images/story.png')}
                  // style={styles.section1}
                />
                <Text style={styles.section3text}>Space</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* section 4 Content  */}
        <View style={styles.section4container}>
          <Text style={styles.classmemoriestext}>Content</Text>
          <View style={styles.section4cardcontainer}>
            <TouchableOpacity>
              <View style={styles.section4card}>
                <Image
                    source={require('@/assets/images/speech2.png')}
                    style={styles.section4tag}
                  />
                  <Image
                    source={require('@/assets/images/mathematics.png')}
                    // style={styles.section1}
                  />
                </View>
              </TouchableOpacity>
          </View>
        </View>
        </ScrollView>

      </View>
  );
}

const styles = StyleSheet.create({
  
  mainContainer:{
    flex:1,
    height:'100%',
    // marginBottom: 60
    // overflow:'hidden',
    // backgroundColor:'red'
  },
  section1maincontainer:{
    // flex:1,
    width:'100%',
    height:'25%',
    flexDirection:'column',
    justifyContent:'center',
    // backgroundColor:'lightgreen',
    overflow:'hidden',
    alignContent:'flex-start'
  },
  card: {
    flex:1,
    backgroundColor: 'white',
    // padding: 16,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    // width: '45%',
    // height: '80%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin:15,
    flexDirection:'column',
    overflow:'hidden'
},
section1tag:{
  position:'absolute',
  top:10,
  left:5,
  zIndex:99,
  overflow:'hidden'
},
section1bottombar:{
  // flex:1,
  height:'30%',
  width:'100%',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  paddingRight:10
  // backgroundColor:"pink"
},
section1bottombarText:{
  flex:3,
  fontFamily:'PlaypenSans-Bold',
  fontSize:15,
  padding:'5%',
  alignSelf:'center'
},
section1imagecontainerstyle:{
  flex:1,
  width:'100%',
  height:'30%',
  // borderColor:'yellow',
  // borderWidth:2,
  padding:10
},
section1imagestyle:{
  
  // height:'auto',
  resizeMode:'stretch',
  height:'100%',
  width:'100%'
},
playButtonStyle:{
  flex:1,
  height:"50%",
  // margin:20,
  // padding:10,
  width:'50%',
  backgroundColor:'orangered',
  // borderColor:'black',
  // borderWidth:1,
  borderRadius:20,
  shadowColor: 'black',
  shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 14,
  alignContent:'center',
  justifyContent:'center'
},
playButtonTextStyle:{
  color:'white',
  fontSize:15,
  alignSelf:'center',
  fontFamily:'PlaypenSans-Bold',
  textAlign:'center',
  justifyContent:'center',
  alignItems:'center'
},
section2card: {
  flex:1,
  backgroundColor: 'white',
  borderRadius: 50,
  padding: 16,
  shadowColor: 'black',
  shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  elevation: 14,
  // width:width / 1.2 ,
  height: 150,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight:20,
  flexDirection:'row',
  paddingHorizontal:20
},
section2container:{
  flexDirection:'column',
  alignContent:'flex-start',
  marginVertical:20,
},
section2cardcontainer:{
  // flex:1,
  alignSelf:'center',
  flexDirection:'row',
  // justifyContent:'space-between',
  // width:'100%',
  // width:80,
  margin:20,
  paddingBottom:20,
},
classmemoriestext:{
  marginTop:10,
  fontSize:20,
  fontFamily:'PlaypenSans-Bold',
  marginLeft:30
},
waterwaytextstyle:{
  fontSize:15,
  fontFamily:'PlaypenSans-Regular',
  flexDirection:'column',
  alignContent:'center',
  padding:10,
  // margin:10
},
waterwaytextstylewithcolor:{
  fontSize:15,
  fontFamily:'PlaypenSans-Regular',
  flexDirection:'column',
  alignContent:'center',
  padding:10,
  // margin:10,
  color:'orangered'
},
arrowtextcontainer:{
  flexDirection:'row',
  paddingHorizontal:10,
  marginHorizontal:10,
  justifyContent:'center',
  alignItems:'center',
},
section3container:{
  flexDirection:'column',
},
section3card:{
  flex:1,
  backgroundColor: 'white',
  borderRadius: 50,
  padding: 16,
  shadowColor: 'black',
  shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 14,
  // width: 450,
  height: 250,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection:'column',
  marginVertical:10,
  marginHorizontal:20
},
section3cardcontainer:{
  flex:1,
  alignSelf:'center',
  flexDirection:'row',
  width:'100%',
  margin:20,
  paddingBottom:20,
},
section3text:{
  alignContent:'center',
  fontSize:15,
  fontFamily:'PlaypenSans-Bold',
  marginTop:10
},
section3image:{
  width:300,
},
section4container:{
  flexDirection:'column',
  justifyContent:'center',
},
section4cardcontainer:{
  flex:1,
  alignItems:'center',
  height:400,
  width:'auto',
  paddingBottom:100,
  marginBottom:120
},
section4card:{
  flex:1,
  borderColor:'yellow',
  borderWidth:3,
  backgroundColor: 'white',
  borderRadius: 50,
  padding: 16,
  shadowColor: 'black',
  shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 14,
  // width: 700,
  // height: 500,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection:'column',
  marginVertical:30,
  marginHorizontal:20
},
section4tag:{
  position:'absolute',
  top:5,
  left:5,
  zIndex:99
}
});
