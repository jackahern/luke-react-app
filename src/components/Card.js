import React from 'react';

const Card = ({ name, age, id }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow'>
      <img alt="girlfriend" src={`https://robohash.org/${id}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

export default Card;