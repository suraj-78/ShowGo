import React from 'react'
import BlurCircle from './BlurCircle'
import { ChevronLeft, ChevronRightIcon } from 'lucide-react'

const DateSelect = () => {
  return (
    <div id='dateSelect' className='pt-30'>
        <div>
            <BlurCircle/>
            <BlurCircle/>
            <div>
                <p>Choose Date</p>
                <div>
                    <ChevronLeft/>
                    <span>
                        {Object.keys(dateTime).map((date) => (
                            <button key={date} className=''>
                                <span>{new Date(date).getDate()}</span>
                                <span>{new Date(date).toLocaleDateString("en-US", { month: "short"})}</span>
                            </button>
                        ))}
                    </span>
                    <ChevronRightIcon width={28}/>
                </div>
                
            </div>
            <button className=''>Book Now</button>

        </div>
      
    </div>
  )
}

export default DateSelect
