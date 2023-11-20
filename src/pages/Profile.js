import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  Dimensions,
} from 'react-native';
import Colors from '../common/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {TabView, SceneMap, TabBar, TabBarItem} from 'react-native-tab-view';
const {width, height} = Dimensions.get('window');

const GamesScreen = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

const BadgesScreen = () => (
  <View style={{flex: 1}}>
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#6231AD',
        opacity: 0.2,
      }}
    />
    {ListArray.map((item, index) => (
      <View style={styles.tabView} key={index}>
        <View style={{justifyContent: 'center', marginHorizontal: 15}}>
          <Image
            source={require('../assets/listImg.png')}
            style={styles.itemImage}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{width: '80%', color: 'black'}}>{item.title}</Text>
          <Text
            numberOfLines={2}
            style={{width: '80%', marginTop: 10, color: Colors.lightBlack}}>
            {item.discretion}
          </Text>
        </View>
      </View>
    ))}
  </View>
);

const Profile = () => {
  const [tab, setTab] = React.useState('Badges');

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Image
          source={require('../assets/icon_1.png')}
          style={styles.tabIcon}
        />
        <Text style={styles.profileText}>Profile</Text>
        <Image source={require('../assets/msg_1.png')} style={styles.tabIcon} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.boxView}>
          <View style={styles.profileContainer}>
            <View style={styles.profileCon}>
              <Image
                source={require('../assets/profule.png')}
                style={styles.profileImage}
              />
            </View>

            <TouchableOpacity style={styles.editbuttonContainer}>
              <Image
                source={require('../assets/edit_Icon.png')}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: 'black'}}>Jina Simons</Text>
            <Text style={{fontSize: 14, color: 'grey'}}>6000 Pts</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 18, margin: 10, color: 'grey'}}>
              I'm a software developer that has been in the crypto space since
              2012. And l've seen it grow and falter over a period of time.
              Really happy to be here!
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                color: Colors.lightBlack,
                fontWeight: '800',
              }}>
              <Entypo
                marginStart={2}
                size={16}
                name="log-out"
                color={Colors.lightBlack}></Entypo>{' '}
              Logout{'   '}
            </Text>
          </View>
          <View
            style={{
              marginTop: 35,
              margin: 20,
              borderWidth: 1,
              width: '90%',
              alignSelf: 'center',
              borderColor: Colors.lightBlack,
              justifyContent: 'center',
              paddingHorizontal: 10,
              paddingBottom: 10,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -13,
              }}>
              <Image
                source={require('../assets/star1.png')}
                resizeMode="contain"
                style={styles.tabIcon}
              />
            </View>
            <View style={styles.alignView}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={styles.boxText}>Under or Over</Text>
                <View style={styles.arrowView}>
                  <View style={[styles.View51, {backgroundColor: '#edf9ed'}]}>
                    <AntDesign
                      size={18}
                      marginStart={2}
                      name="arrowdown"
                      color={'#49c548'}></AntDesign>
                  </View>

                  <Text style={[styles.boxText, {marginStart: 5}]}>
                    81%{'   '}
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.boxText}>Top 5</Text>

                <View style={styles.arrowView}>
                  <View style={styles.View51}>
                    <AntDesign
                      marginStart={2}
                      size={18}
                      name="arrowup"
                      color={'#f73233'}></AntDesign>
                  </View>
                  <Text style={[styles.boxText, {marginStart: 5}]}>
                    {' '}
                    -51% {'   '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => setTab('Games')}
            style={[
              styles.tabItm,
              tab === 'Games' && {
                borderBottomWidth: 2,
                borderBottomColor: Colors.primary,
              },
            ]}>
            <Text
              style={
                tab === 'Games'
                  ? {color: Colors.primary, fontWeight: '600'}
                  : {color: 'grey'}
              }>
              Games played
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab('Badges')}
            style={[
              styles.tabItm,
              tab === 'Badges'
                ? {
                    borderBottomWidth: 2,
                    borderBottomColor: Colors.primary,
                  }
                : null,
            ]}>
            <Text
              style={
                tab === 'Badges'
                  ? {color: Colors.primary, fontWeight: '600'}
                  : {color: 'grey'}
              }>
              Badges
            </Text>
          </TouchableOpacity>
        </View>

        {tab === 'Badges' ? <BadgesScreen /> : <GamesScreen />}
      </ScrollView>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxView: {
    margin: 10,
    // backgroundColor: 'red',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
    alignItems: 'center',
    height: 40,
    paddingStart: 10,
    paddingEnd: 10,
  },
  itemImage: {
    width: 45,
    height: 45,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  editbuttonContainer: {
    width: RFValue(25),
    height: RFValue(25),
    marginTop: RFValue(-25),
    // alignSelf: 'flex-end',
    marginRight: RFValue(-40),
    borderRadius: RFValue(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    color: Colors.lightBlack,
  },
  View51: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: '#ffe9ea',
    borderRadius: 100,
  },
  alignView: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  tabView: {
    alignSelf: 'center',
    backgroundColor: 'white',
    margin: 10,
    height: 90,
    width: '92%',
    borderRadius: 10,
    flexDirection: 'row',
    // elevation: 5,
  },
  profileText: {
    color: Colors.lightBlack,
    fontSize: 16,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  profileCon: {
    marginRight: 10,
    justifyContent: 'center',
  },
  profileImage: {
    width: RFValue(100),
    height: RFValue(100),
    borderRadius: RFValue(100),
  },
  editIcon: {width: RFValue(25), height: RFValue(25)},
  tabItm: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'grey',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
  },
});

const ListArray = [
  {
    title: 'First Stripe Earned',
    discretion: 'Top 10% of highest spending players in a month',
    img: require('../assets/pro.png'),
  },
  {
    title: 'Born Winner',
    discretion: 'Top 10% of highest spending players in a month',
    img: require('../assets/pro.png'),
  },
  {
    title: 'Trader of the Month',
    discretion: 'Won 7 under-over games in a row',
    img: require('../assets/pro.png'),
  },
  {
    title: 'Rising Star',
    discretion: 'Top 10% of highest spending players in a month',
    img: require('../assets/pro.png'),
  },
  {
    title: 'Jackpot',
    discretion: 'Top 10% of highest spending players in a month',
    img: require('../assets/pro.png'),
  },
  {
    title: 'Impossible',
    discretion: 'Top 10% of highest spending players in a month',
    img: require('../assets/pro.png'),
  },
  {
    title: 'First Stripe Earned',
    discretion: 'Top 10% of highest spending players in a month',
    img: require('../assets/pro.png'),
  },
];

export const IndexLabelEnum = {
  0: 'first',
  1: 'second',
};
