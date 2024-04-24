/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../functions/getSearchWIth';
import { Box, IconButton, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';

export const Search = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const applyQuery = useCallback(debounce(setQuery, 1000), []);

  useEffect(() => {
    applyQuery(query);
  }, [query, applyQuery]);

  useEffect(() => {
    setIsSearchOpen(false);
    setQuery('');
  }, [pathname]);

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    setSearchParams(getSearchWith(searchParams, {
      query: inputValue || null,
    }));
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

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <Box>
      {isSearchOpen ? (
        <TextField
          label={`Search in ${pathname.slice(1)}...`}
          variant="outlined"
          value={query}
          onChange={handleChangeQuery}
          inputRef={inputRef}
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
