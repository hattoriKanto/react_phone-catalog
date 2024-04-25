import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../functions/getSearchWIth';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import { StyledSearchButton, StyledSearchInput, StyledSearchWrapper } from '.';

interface SearchProps {
  isSearchOpen: boolean;
  isBurgerMenuShown: boolean;
  onBurgerToggle: (isBurgerMenuShown: boolean) => void;
  onSearchToggle: (isSearchOpen: boolean) => void;
  handleSearchIconClick: () => void;
}

export const Search: React.FC<SearchProps> = ({
  isSearchOpen,
  onSearchToggle,
  handleSearchIconClick,
}) => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const debouncedHandleChangeQuery = useRef(
    debounce((inputValue: string) => {
      setQuery(inputValue);

      setSearchParams(
        getSearchWith(searchParams, {
          query: inputValue || null,
        }),
      );
    }, 200),
  ).current;

  useEffect(() => {
    onSearchToggle(false);
    setQuery('');
  }, [pathname, onSearchToggle]);

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleChangeQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setQuery('');

    setSearchParams(
      getSearchWith(searchParams, {
        query: null,
      }),
    );
  };

  return (
    <StyledSearchWrapper
      sx={({ breakpoints }) => ({
        [breakpoints.down('sm')]: {
          position: isSearchOpen && 'absolute',
          left: isSearchOpen && '0',
          height: isSearchOpen ? '32px' : '100%',
          width: isSearchOpen ? '70vw' : '48px',
          fontSize: isSearchOpen && '12px',
          zIndex: isSearchOpen && '2',
        },
      })}
    >
      {isSearchOpen && (
        <StyledSearchInput
          placeholder={`Search in ${pathname.slice(1)}...`}
          value={query}
          onChange={handleChangeQuery}
        />
      )}

      {query.length ? (
        <StyledSearchButton
          aria-label="clear search"
          onClick={handleClearSearch}
        >
          <ClearIcon />
        </StyledSearchButton>
      ) : (
        <StyledSearchButton
          aria-label="search"
          disableRipple
          onClick={handleSearchIconClick}
        >
          <SearchIcon color="primary" />
        </StyledSearchButton>
      )}
    </StyledSearchWrapper>
  );
};
