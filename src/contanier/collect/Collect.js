import React from 'react';
import Header from '../../components/header/Header';
import ListItem from '../../components/collect/ListItem';

const Collect = () => {
  return (
      <div>
        <Header title="收藏" />
        <ul>
          <ListItem />
          <ListItem />
        </ul>
      </div>
  );
};

export default Collect;