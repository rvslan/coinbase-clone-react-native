import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import Button from '../components/Button';

import { WatchlistState } from '../store/reducers/watchlist';
import { useSelector, useDispatch } from 'react-redux';
import * as watchlistActions from '../store/actions/watchlist';

const Home = () => {
  const dispatch = useDispatch();

  const loadData = () => {
    try {
      dispatch(watchlistActions.fetchCoinData());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: 'https://i.imgur.com/9EEaSaS.png' }}
        />
        <Text style={styles.title}>Welcome to Coinbase!</Text>
        <Text style={styles.subTitle}>Make your first investment today</Text>
        <Button title='Get started' />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  image: {
    height: 250,
    width: 150,
    marginTop: 40,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 24,
    color: Colors.subtitle,
  },
});
