import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeBaseProvider, FlatList, Divider, Image} from 'native-base';
import {services} from '../api/services/Services';
import moment from 'moment';
import Header from '../components/Header';
import {COLOR_WHITE, COLOR_Black, COLOR_GREY} from '../constants/Colors';

const SportsScreen = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    services('sports')
      .then(data => {
        setNewsData(data);
      })
      .catch(error => {
        alert(error);
      });
  }, []);
  return (
    <NativeBaseProvider>
      <Header titleText="Sports" />
      <FlatList
        data={newsData}
        renderItem={({item}) => (
          <View>
            <View style={styles.newsContainer}>
              <Image
                elevation={20}
                width={550}
                height={250}
                resizeMode={'cover'}
                source={{
                  uri: item.urlToImage,
                }}
                alt="Alternate Text"
              />
              <Text style={styles.title}>{item.title}</Text>
              <View
                style={{
                  marginRight: 30,
                  marginTop: 10,
                  marginLeft: 30,
                  alignItems: 'center',
                }}>
                <Divider my={1} />
                <Text style={styles.date}>
                  {moment(item.publishedAt).format('LLL')}
                </Text>
                <Divider my={1} />
              </View>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        // keyExtractor={item => item.id}
      />
    </NativeBaseProvider>
  );
};

export default SportsScreen;

const styles = StyleSheet.create({
  newsContainer: {
    margin: 20,
    padding: 10,
    backgroundColor: COLOR_WHITE,
    elevation: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
    color: COLOR_Black,
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
    color: COLOR_GREY,
  },
  date: {
    fontSize: 14,
    color: COLOR_Black,
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
});
