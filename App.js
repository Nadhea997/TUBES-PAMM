import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground, } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
const App = ()=> {
  const [lokasi, setlokasi] = useState([
    {
      nama: 'Mau apa Hari Ini?'
    },
  ])

  const [lokasiSeleksi, setLokasiSeleksi] = useState ({
    nama: 'Makanan'
  });

  const [dataTrending, setDataTrending] = useState([
    {
      nama :'Motor'
    },
    {
      nama :'Mobil'
    },
    {
      nama :'Makanan'
    },
  
  ]);
  return (
    <View style={{flex:1, backgroundColor:'#8B0000'}}>
      <StatusBar backgroundColor='#8B0000' barStyle="dark-content"/>
      <View style={{marginTop:20, marginLeft:20, marginRight:20, marginBotton:20,}}>
        <Text style={{fontSize: 25, fontweight: 'bold', color: '#FFFFFF'}}>
        ANTER<Text style={{color: '#000000'}}>AJA</Text>
        </Text>
      </View>
      <View>
      <FlatList
      data={lokasi}
      horizontal
       showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity style={{
        marginRight: 20, 
        backgroundColor:
        lokasiSeleksi.nama == item.nama ? '#000000' : '#FFFFFF',
        elevation:3,
        paddingHorizontal: 130,
        paddingVertical : 15,
        marginBotton: 10,
        borderRadius : 15,
        marginLeft : 20,
        }}>
          <Text
          style={{
            color : lokasiSeleksi.nama == item.nama ? '#FFFFFF' : '#000000',
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
        style={{width: 200, height: 300, marginTop:10, marginBottom:10, borderRadius:3,}}
        resizeMode={'cover'}
        />
          <Text
          style={{
            color : '#000000',
            fontSize: 25,
            fontWeight:'bold',
          }}>
          {item.namaFilm}
          </Text>
          <Text
          style={{
            color : '#000000',
            fontSize: 18,
            fontWeight:'300',
          }}>
          {item.jenisFilm}
          </Text>
          <Text
          style={{
            color : '#000000',
          }}>
          {item.director}
          </Text>
          <Text
          style={{
            color : '#000000',
          }}>
          {item.producer}
          </Text>
          <Text
          style={{
            color : '#000000',
          }}>
          {item.penulis}
          </Text>
          <Text
          style={{
            color : '#000000',
          }}>
          {item.produksi}
          </Text>
          <Text
          style={{
            color : '#000000',
          }}>
          {item.casts}
          </Text>
        </TouchableOpacity>
      )}
      />
    </View>

      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
          backgroundColor: '#FFFFFF',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#4169e1'}}>Playing</Text> 
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#bdbdbd'}}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#bdbdbd'}}>Theater</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: '#bdbdbd'}}>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;