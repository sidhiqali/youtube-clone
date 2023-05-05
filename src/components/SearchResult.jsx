import { useContext, useEffect, useState } from 'react';
import { fetchDataFromAPI } from '../utils/api';
import { Context } from '../context/contextApi';
import { useParams } from 'react-router-dom';
import LeftNav from './LeftNav';
import SearchResultVideoCard from './SearchResutlVideoCard';
function SearchResult() {
  const [result, setResult] = useState([]);
  const { setLoading } = useContext(Context);
  const { searchQuery } = useParams();

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
    fetchDataFromSearch();
  }, [searchQuery]);

  const fetchDataFromSearch = () => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res.contents);
      setLoading(false);
    });
  };

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav />
      <div className='grow w=[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 gap-2 p-5'>
          {result.map((item, index) => {
            if (item?.type !== 'video') return false;
            return <SearchResultVideoCard key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
