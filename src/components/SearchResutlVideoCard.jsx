import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import VideoLength from '../shared/VideoLength';

function SearchResutlVideoCard({ video }) {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex flex-col md:flex-row mb-8 md:mb-3 md:px-24 lg:hover:bg-white/[0.1] rounded-xl '>
        <div className='relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden'>
          <img
            className='h-full w-full object-cover'
            src={video?.thumbnails?.[0]?.url}
            alt='thumbnail'
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className='flex flex-col ml-4  md:ml-6 mt-4 md:mt-0 overflow-hidden'>
          <span className='text-lg md:text-xl  line-clamp-2 text-white/[0.9]'>
            {video?.title}
          </span>
          <div className='flex text-[12px] font-semibold text-white/[0.7] my-2 truncate overflow-hidden'>
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className='truncate px-3'>{video?.publishedTimeText}</span>
          </div>

          <div className='hidden md:flex items-center my-2'>
            <div className='flex items-start mr-3 '>
              <div className='flex h-6 w-6 rounded-full overflow-hidden'>
                <img
                  className='h-full w-full object-cover'
                  src={video?.author?.avatar[0]?.url}
                  alt='author'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='text-xs font-semibold  text-white/[0.7] flex items-center'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                  <BsFillCheckCircleFill className='text-[12px] text-white/[0.5] ml-1' />
                )}
              </span>
            </div>
          </div>
          <span className='empty:hidden text-[12px] line-clamp-1 md:line-clamp-2 text-white/[0.7] md:my-4'>
            {video?.descriptionSnippet}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SearchResutlVideoCard;
