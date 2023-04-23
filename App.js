import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground, } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
const App = ()=> {
  const [need, setneed] = useState([
     {
      nama :'Motor'
    },
    {
      nama :'Mobil'
    },
    {
      nama :'Makanan'
    },
    
  ])

  const [needChoice, setNeedChoice] = useState ({
    nama: 'Makanan'
  });

  const [dataTrending, setDataTrending] = useState([
 {
      namaMakanan: 'RotiBakar88',
      jarakResto: '0.3 km',
      rating: '4.8',
      type: 'bakery & cake',
    },  
  {
      namaMakanan: 'McDonalds',
      jarakResto: '7.1 km',
      rating: '4.8',
      type: 'fast food',
    }, 
    {
      namaMakanan: 'Rumah Makan Sakato',
      jarakResto: '1.2 km',
      rating: '4.3',
      type: 'padang',
    }, 
    {
      namaMakanan: 'La Perle Noire',
      jarakResto: '3.3 km',
      rating: '4.2',
      type: 'pizza & pasta',
    }, 
     {
      namaMakanan: 'Pizza Klasik',
      jarakResto: '2.8 km',
      rating: '4.3',
      type: 'pizza & pasta',
    }, 
     {
      namaMakanan: 'Steakhouse Premium',
      jarakResto: '7.1 km',
      rating: '4.8',
      type: 'beef',
    }, 
     {
      namaMakanan: 'Sushi Kenangan',
      jarakResto: '0.3 km',
      rating: '4.8',
      type: 'japanese',
    }, 
     {
      namaMakanan: 'Warung Maknyus',
      jarakResto: '0.3 km',
      rating: '4.8',
      type: 'rice',
    }, 
     {
      namaMakanan: 'Cafe Santai',
      jarakResto: '0.8 km',
      rating: '4.7',
      type: 'bakery & cake',
    }, 
     {
      namaMakanan: 'Sate Padang Pak Jono',
      jarakResto: '6.2 km',
      rating: '4.1',
      type: 'satay',
    }, 
  ]);
  return (
    <View style={{flex:1, backgroundColor:'#8B0000'}}>
      <StatusBar backgroundColor='#8B0000' barStyle="dark-content"/>
      <View style={{marginTop:20, marginLeft:20, marginRight:20, marginBotton:20,}}>
        <Text style={{fontSize: 25, fontweight: '300', color: '#FFFFFF'}}>
        ANTER<Text style={{color: '#000000'}}>AJA</Text>
        </Text>
      </View>
      <View>
      <FlatList
      data={need}
      horizontal
       showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity style={{
        marginRight: 20, 
        backgroundColor:
        needChoice.nama == item.nama ? '#000000' : '#FFFFFF',
        elevation:3,
        paddingHorizontal: 50,
        paddingVertical : 15,
        marginBotton: 10,
        borderRadius : 15,
        marginLeft : 1,
        }}>
          <Text
          style={{
            color : needChoice.nama == item.nama ? '#FFFFFF' : '#000000',
          }}>
          {item.nama}
          </Text>
        </TouchableOpacity>
      )}
      />
      </View>
      <View 
       style={{
        marginTop:10,
        marginLeft:10,
        marginBotton:10,
        flexDirection: 'row'
        }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
     </View>

     <TouchableOpacity
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
          }}>
          <Text style={{fontSize: 14}}>Lihat Semua</Text>
        </TouchableOpacity>
     </View> 

    <View style={{flex: 1}}>
      <FlatList
      data={dataTrending}
      showsVerticalScrollIndicator={false}
      style={{marginLeft: 10}}
      renderItem={({item}) => (
        <TouchableOpacity
        style={{
        marginRight: 15, 
        backgroundColor: '#FFFFFF',
        elevation:3,
        paddingHorizontal: 15,
        paddingVertical : 15,
        marginBotton: 10,
        borderRadius : 15,
        marginLeft : 5,
        }}>
        <Image source={item.image}
        style={{width: 200, height: 100, marginTop:30, marginBottom:30, borderRadius:3,}}
        resizeMode={'cover'}
        />
          <Text
          style={{
            color : '#000000',
            fontSize: 25,
            fontWeight:'bold',
          }}>
          {item.namaMakanan}
          </Text>
          <Text
          style={{
            color : '#000000',
            fontSize: 18,
            fontWeight:'300',
          }}>
          {item.jarakResto}
          </Text>
          <Text
          style={{
            color : '#000000',
          }}>
          {item.rating}
          </Text>
           <Text
          style={{
            color : '#000000',
          }}>
          {item.type}
          </Text>
        </TouchableOpacity>
      )}
      />
    </View>

      <View
        style={{
          flexDirection: 'row',
          paddingTop: 30,
          backgroundColor: '#FFFFFF',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#4169e1'}}>Home</Text> 
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#bdbdbd'}}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#bdbdbd'}}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#bdbdbd'}}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#bdbdbd'}}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};
export default App;