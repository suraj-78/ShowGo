import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px]'>Trailer</p>

      <div className='relative mt-6'>
        <BlurCircle top='-100px' right='-100px' />
        
          <ReactPlayer
            url={currentTrailer.videoUrl}
            playing={true}
            controls={true}
            className='mx-auto max-w-full'
            width='960px'
            height='540px'
          />
        
      </div>
    </div>
  );
};

export default TrailerSection;
