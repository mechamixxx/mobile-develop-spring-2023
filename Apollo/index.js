import React from 'react';
import {Pressable, Text, FlatList, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {CONTINENT_QUERY} from './query';

const Apollo = () => {
  const {data, loading} = useQuery(CONTINENT_QUERY);

  const ContinentItem = ({countries}) => {
    const {code} = countries;
    const {name} = countries;
    const {capital} = countries;
    const {emoji} = countries;

    return (
      <Pressable style={styles.country}>
        <Text>{code}</Text>
        <Text>{name}</Text>
        <Text>{capital}</Text>
        <Text>{emoji}</Text>
      </Pressable>
    );
  };

  if (loading) {
    return <Text>Loading</Text>;
  }

  return (
    <FlatList
      style={{backgroundColor: '#FF9200'}}
      data={data.countries}
      contentContainerStyle={{padding: 30}}
      renderItem={({item}) => <ContinentItem countries={item} />}
      keyExtractor={(item, index) => index}
    />
  );
};
const styles = StyleSheet.create({
  country: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 305,
    borderRadius: 20,
    height: 40,
    backgroundColor: '#2C98F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Apollo;
