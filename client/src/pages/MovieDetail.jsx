import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';

const MovieDetail = () => {
  const {id} = useParams()
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id);
    setShow({
      movie : show, 
      dateTime : dummyDateTimeData
    })
  }


  // using useEffect so that whenever the show changes the component shoud rerender

  useEffect( () => {
    getShow();
  }, [id])
  return show ? (
    <div className=''>
        <div className=''>

        </div>
    </div>
  ) : <div>Loading....</div>
} 

export default MovieDetail
