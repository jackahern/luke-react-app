import React from 'react';
import Card from './Card';

const CardList = ({ girlfriends }) => {
  return (
    <div>
      {
        girlfriends.map((user, i) => {
          return (
            <Card
            key={i}
            id={girlfriends[i].id}
            name={girlfriends[i].name}
            age={girlfriends[i].age} />
          );
        })
      }
    </div>
  );
}

export default CardList;