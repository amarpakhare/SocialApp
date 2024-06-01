import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const data = [
    {id: '1', src: require('../../assets/Designer_1.png')},
    {id: '2', src: require('../../assets/Designer_2.png')},
    {id: '3', src: require('../../assets/Designer_3.png')},
    {id: '4', src: require('../../assets/Designer_4.png')},
    {id: '5', src: require('../../assets/Designer_5.png')},
    {id: '6', src: require('../../assets/Designer_1.png')},
  ];

  const renderItem = ({item}: any) => (
    <Image source={item.src} style={styles.gridImage} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerText}>Steve Johnson</Text>
        <Icon name="ellipsis-horizontal" size={24} color="#fff" />
      </View>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-bearded-man-with-b-earbuds-and-headphones-image_2946528.jpg',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>@Steve-John</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>125.5m</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1.5k</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Icon name="mail-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.tabItem}>Photos</Text>
        <Text style={styles.tabItem}>Video</Text>
        <Text style={styles.tabItem}>Tagged</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        style={styles.grid}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8a5c2',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff6348',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  followButton: {
    backgroundColor: '#ff6348',
    padding: 10,
    borderRadius: 5,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  messageButton: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
  },
  tabItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6348',
  },
  grid: {
    flex: 1,
    paddingHorizontal: 5,
  },
  gridImage: {
    width: '32%',
    height: 100,
    margin: '1%',
    borderRadius: 5,
  },
});
