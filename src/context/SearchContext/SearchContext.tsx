import React, { useState } from 'react';
import { useBurgerMenuContext } from '../../hooks/useBurgerMenuContext';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../functions/getSearchWIth';
import { SearchContextProps, SearchProviderProps } from '.';

export const SearchContext = React.createContext<SearchContextProps>({
  isSearchOpen: false,
  query: '',
  setIsSearchOpen: () => {},
  setQuery: () => {},
  handleSearchIconClick: () => {},
  handleChangeQuery: () => {},
  handleClearSearch: () => {},
});

export const SearchContextProvider: React.FC<SearchProviderProps> = ({
  children,
}) => {
  const { isBurgerMenuShown, setIsBurgerMenuShown } = useBurgerMenuContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isBurgerMenuShown) {
      setIsBurgerMenuShown(false);
    }
  };

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    setSearchParams(
      getSearchWith(searchParams, {
        query: inputValue || null,
      }),
    );
  };

  const handleClearSearch = () => {
    setQuery('');

    setSearchParams(
      getSearchWith(searchParams, {
        query: null,
      }),
    );
  };

  const searchState = {
    isSearchOpen,
    query,
    setIsSearchOpen,
    setQuery,
    handleSearchIconClick,
    handleChangeQuery,
    handleClearSearch,
  };

  return (
    <SearchContext.Provider value={searchState}>
      {children}
    </SearchContext.Provider>
  );
};
