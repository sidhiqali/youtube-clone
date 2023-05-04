import React from 'react';
import moment from 'moment';
function VideoLength({ time }) {
  const videoLengthIndSeconds = moment()
    .startOf('day')
    .seconds(time)
    .format('mm:ss');
  return (
    <div className='absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md'>
      {videoLengthIndSeconds}
    </div>
  );
}

export default VideoLength;
