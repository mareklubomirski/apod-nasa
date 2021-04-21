import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
require('dotenv').config()


const apiKey = process.env.REACT_APP_API_KEY
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    
    const fetchPhoto = async () => {
      const res = await fetch(apiUrl);
    
      const data = await res.json();
      setPhotoData(data)
    }
    fetchPhoto();
  }, []);

  if (!photoData) return <div />

  return (
    <>
    <NavBar />
    <div className='nasa-photo'>
      {photoData.media_type === 'image' ? (
      <img
        src={photoData.url} alt={photoData.title} className='photo' />
      ) : (
        <iframe
        title='space-video'
        src={photoData.url}
        frameBorder='0'
        gesture='media'
        allow='encrypted-media'
        allowFullScreen
        className='photo'
        />
      )}
      <div>
        <h1>{photoData.title}</h1>
        <p className='date'>{photoData.date}</p>
        <p className='explanation'>{photoData.explanation}</p>
      </div>
    </div>
    </>
  )
}

export default NasaPhoto