import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView,ScrollView,Button } from 'react-native';

export default function App() {
  return (

    <SafeAreaView style={{marginTop:40}}>
      <ScrollView>
        <View style ={styles.container}>
          <View style={{height: 300,padding: 10,}}>
            
            <View style={styles.flexItems}>
                <Image style ={{margin:15}} source={require('./src/img/LOGO.png')} />
            </View>
          </View>

          <View style={{backgroundColor: "white",height: 485,padding: 10,borderTopStartRadius: 30, borderTopEndRadius: 30}}>

            <View style={{backgroundColor: "white",flexDirection:'row', justifyContent: 'center'}}>

              <View style={{alignItems: 'center'}}>
                <Image style ={{margin:10}} source={require('./src/img/icon.png')}/>

                <Text style={{color:"black",textAlign: 'center',fontWeight:"700", fontSize:34}}>Non-Contact {"\n"} Deliveris</Text>
                <Text style={{color:"b#9586A8",textAlign: 'center',fontWeight:"400", fontSize:17, paddingTop: 20}}>When placing an order, select the option {"\n"}“Contactless delivery” and the courier will leave {"\n"} your order at the door.</Text>
              </View>
            
                </View>
                  <View style={{marginTop: 40, backgroundColor:"#0BCE83",height: 56,borderRadius:10}}>
                      <Text style={{color: "white",fontSize:16,fontWeight:"500",textAlign: "center",padding: 15,}}>ORDER NOW</Text>
                      <Text style={{color: "gray",fontSize:16,fontWeight:"500",textAlign: "center",padding: 15,}}>DISMISS</Text>
                  </View>
                <View>
                
              </View>

          </View>   
        </View>
        <View style ={styles.container}>
          <View style={{height: 300}}>
            
            <View style={styles.flexItems}>
                <Image style ={{width: "100%"}} source={require('./src/img/media.png')} />
            </View>
          </View>

          <View style={{backgroundColor: "white",height: 485,padding: 10,borderTopStartRadius: 30, borderTopEndRadius: 30}}>

            <View style={{backgroundColor: "white",flexDirection:'row', justifyContent: 'center'}}>

              <View style={{marginTop:20}}>

                <Text style={{color:"black", fontWeight:"700", fontSize:34}}>Boston Lettuce</Text>
                <View style={{flexDirection:"row"}}>
                  <Text style={{color:"black", fontWeight:"700", fontSize:32}}>1.10</Text>
                  <Text style={{color:"gray", fontWeight:"400", fontSize:14,paddingTop:12}} > € / piece</Text>
                </View>
                <Text style={{color:"#06BE77"}}>~ 150 gr / piece</Text>
                <Text style={{color:"#9586A8",fontWeight:"400", fontSize:17, paddingTop: 20}}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
              </View>
            
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <View>
                    <Image style ={{marginTop: 60, backgroundColor:"#0BCE83",height: 50,borderRadius:10}} source={require('./src/img/btn.png')} />
                  </View>
                  <View style={{marginTop: 60, backgroundColor:"#0BCE83",height: 56,borderRadius:10,width:"75%"}}>
                      <Text style={{color: "white",fontSize:16,fontWeight:"500",textAlign: "center",padding: 15,}}>ORDER NOW</Text>
                  </View>
                </View>
                <View>
                
              </View>

          </View>   
        </View>
       </ScrollView>
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:"#A259FF",
  },
  flexItems:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom:36,
  },

  spaceBetween:{
    flexDirection: 'row',
      justifyContent: 'space-between',
  }

  
})
