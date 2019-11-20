import React, {useEffect, useState} from 'react';
import {api} from '~/services';

import {ActivityIndicator, FlatList} from 'react-native';

import {Page} from '~/components';
import {colors} from '~/assets/styles';

import {QuestionaryItem} from './components';

import {Questionaries} from './styles';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const response = await api.get('/questionaries');

      const {data} = response.data;

      setData(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Page>
      <Questionaries>
        {loading ? (
          <ActivityIndicator size="large" color={colors.black} />
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => <QuestionaryItem data={item} />}
          />
        )}
      </Questionaries>
    </Page>
  );
}
export default Home;
