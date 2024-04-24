import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../functions/getSearchWIth';
import { Box, IconButton, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';

export const Search = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const debouncedHandleChangeQuery = useRef(
    debounce(
      (inputValue: string) => {
        setQuery(inputValue);

        setSearchParams(
          getSearchWith(searchParams, {
            query: inputValue || null,
          }),
        );
      },
      200
    )
  ).current;

  useEffect(() => {
    setIsSearchOpen(false);
    setQuery('');
  }, [pathname]);

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

  const handleSearchIconClick = () => {
    setIsSearchOpen(previous => !previous);
  };

  return (
    <Box>
      {isSearchOpen ? (
        <TextField
          label={`Search in ${pathname.slice(1)}...`}
          variant="outlined"
          value={query}
          onChange={handleChangeQuery}
        />
      ) : null}

      {query.length ? (
        <IconButton aria-label="clear search" onClick={handleClearSearch}>
          <ClearIcon />
        </IconButton>
      ) : (
        <IconButton aria-label="search" onClick={handleSearchIconClick}>
          <SearchIcon />
        </IconButton>
      )}
    </Box>
  );
};
