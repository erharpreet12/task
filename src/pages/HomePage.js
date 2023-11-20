import React, {useCallback, useMemo, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Colors from '../common/Colors';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Button from '../components/Button';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetBackdrop, BottomSheetScrollView} from '@gorhom/bottom-sheet';

const {height, width} = Dimensions.get('window');

const HomePage = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  //add this
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        style={{backgroundColor: 'black', opacity: 0.4}}
        {...props}
      />
    ),
    [],
  );

  return (
    <View style={{flex: 1}}>
      <Text style={styles.TopText}>Today’s Games</Text>
      <View style={styles.boxView}>
        <ImageBackground
          source={require('../assets/card_bg.png')}
          resizeMode="stretch"
          style={styles.SmallBox1}>
          <View style={styles.otherBox}>
            <View style={styles.UnderOrView}>
              <Text style={styles.GreyLightFont12}>
                UNDER OR OVER{'   '}
                <AntDesign
                  marginStart={2}
                  name="exclamationcircleo"
                  color="white"></AntDesign>
              </Text>
            </View>
            <View style={styles.UnderOrView}>
              <Text style={{color: Colors.lightGrey, fontSize: 10}}>
                Starting in{' '}
              </Text>

              <Text style={styles.GreyLightFont12}>
                {'  '}
                <AntDesign
                  name="clockcircle"
                  color={Colors.lightGrey}></AntDesign>{' '}
                {'  '}
                03:23:12
              </Text>
            </View>
          </View>
          <View>
            <View style={{marginTop: 10}}>
              <Text style={{color: Colors.lightGrey2, fontSize: 14}}>
                Bitcoin price will be under
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                $24,524
                <Text style={{fontSize: 14}}> at 7 a ET on 22nd Jan'21</Text>
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.boxView2}>
          {ListArray.map((item, index) => (
            <View style={styles.ListView} key={index}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
        <View style={{marginTop: 18}}>
          <Text style={styles.yourPerdictionText}>What's your prediction?</Text>
          <View style={styles.areaDivView}>
            <Button
              text={'UNDER'}
              icon={<Entypo name="arrow-bold-down" color={'white'} />}
              bgColor={'#452c54'}
              marginHorizontal={10}
            />
            <Button
              text={'OVER'}
              icon={<Entypo name="arrow-bold-up" color={'white'} />}
              marginHorizontal={10}
              onPress={() => {
                console.log('CLICKED');
                bottomSheetRef.current.expand();
              }}
            />
          </View>
        </View>

        <View style={styles.boxView3}>
          <View style={styles.areaDivView}>
            <Text style={styles.playerText}>
              <Ionicons name="person" size={14} color={Colors.lightBlack} /> 355
              Players
            </Text>
            <Text style={styles.playerText}>
              <AntDesign
                name="areachart"
                size={14}
                color={Colors.lightBlack}></AntDesign>{' '}
              View chart
            </Text>
          </View>
          <View style={[styles.areaDivView, {height: 10}]}>
            <View style={styles.pinkLine} />
            <View style={styles.greenLine} />
          </View>
          <View style={styles.areaDivView}>
            <Text style={styles.perdictText}>232 predicted under</Text>
            <Text style={styles.perdictText}>123 predicted over</Text>
          </View>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerTextSheet}>Your Prediction is Under</Text>
          <Text style={styles.entryTickets}>Entry tickets</Text>
          <BottomSheetScrollView>
            {[...new Array(50).keys()].map(i => (
              <TouchableHighlight key={i}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 25,
                    alignSelf: 'center',
                  }}>
                  {i + 1}
                </Text>
              </TouchableHighlight>
            ))}
          </BottomSheetScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{color: 'grey'}}>You can win</Text>
              <Text style={{color: 'green'}}>$2000</Text>
            </View>
            <View>
              <Text style={{color: 'grey'}}>
                Total<Text style={{color: 'black'}}> 🟡 5</Text>
              </Text>
            </View>
          </View>

          <View style={{marginVertical: 15}}>
            <Button text={'Submit my prediction'} />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  TopText: {
    color: 'black',
    marginStart: 10,
    marginTop: 10,
  },
  boxView: {
    margin: 10,
    backgroundColor: 'white',
    elevation: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  boxView2: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  itemName: {
    color: Colors.lightGrey,
    fontSize: 14,
  },
  itemPrice: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
  SmallBox1: {
    padding: 10,
    paddingVertical: 15,
    backgroundColor: Colors.primary,
  },
  UnderOrView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 20,
  },
  ListView: {
    alignItems: 'center',
  },
  areaDivView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  perdictText: {
    color: Colors.lightBlack,
    fontSize: 12,
  },
  pinkLine: {
    width: '70%',
    backgroundColor: '#fe4190',
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
  },
  greenLine: {
    width: '30%',
    backgroundColor: '#2daaac',
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
  },
  boxView3: {
    backgroundColor: '#F6F3FA',
    paddingHorizontal: 10,
    marginTop: 20,
    paddingBottom: 10,
  },
  playerText: {
    color: Colors.lightBlack,
    fontSize: 14,
    fontWeight: 'bold',
  },
  yourPerdictionText: {
    color: Colors.lightBlack,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  otherBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  GreyLightFont12: {
    color: Colors.lightGrey2,
    fontSize: 12,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },
  headerTextSheet: {
    color: 'black',
    fontSize: 16,
  },
  entryTickets: {
    fontSize: 14,
    color: 'grey',
    marginTop: 15,
    textTransform: 'uppercase',
  },
});

const ListArray = [
  {name: 'PRICE POOL', price: '$12,000'},
  {name: 'UNDER', price: '3.25x'},
  {name: 'OVER', price: '1.25x'},
  {name: 'ENTRY FEES', price: '5'},
];
