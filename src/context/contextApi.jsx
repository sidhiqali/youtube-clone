import { createContext, useContext, useEffect, useState } from 'react';
import { fetchDataFromAPI } from '../utils/api';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategories, setSelectCategories] = useState('Malayalam');
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchCategoryData = (query) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`)
      .then(({contents}) => {
        console.log(contents);
        setSearchResult(contents)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
