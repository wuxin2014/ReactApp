import React from 'react';
import Header from '../../../components/header/Header';
import ListItem from '../../../components/home/collect/ListItem';
import { icons } from '../../../utils';

const Collect = ({history}) => {
  return (
      <div>
        <Header
            leftIcon={icons.back}
            leftHandle={() => {history.goBack();}}
            title="收藏" />
        <ul>
          <ListItem />
          <ListItem />
        </ul>
      </div>
  );
};

export default Collect;