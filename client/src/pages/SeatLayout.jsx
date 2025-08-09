import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';

const SeatLayout = () => {

  const {id, date} = useParams();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const [show, setShow] = useState(null);

  // function to fetch the show data from the id
  const getShow = async() => {
    const show = dummyShowsData.find(show => show._id === id);
    if(show) {
      setShow({
        movie : show,
        dateTime : dummyDateTimeData
      })
    }
  }

  useEffect(() => {
    getShow();
  }, [])

  const navigate = useNavigate();
  return show ? (
    <div>

      
    </div>
  ) : (
    <Loading />
  )
}

export default SeatLayout
