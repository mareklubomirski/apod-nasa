import React from 'react'
import { Link } from 'react-router-dom';
 
const Home = () => {
  return (
    <div className='home'>
      <Link className='home-link' to='/nasaphoto'>Don't forget to look up!</Link>
    </div>
  );
}

export default Home
