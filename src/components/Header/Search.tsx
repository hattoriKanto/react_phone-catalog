/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../functions/getSearchWIth';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { debounce } from 'lodash';
import {
  StyledButtonClear,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchWrapper,
} from '.';
import { InputAdornment } from '@mui/material';

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
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const applyQuery = useCallback(debounce(setQuery, 1000), []);

  useEffect(() => {
    applyQuery(query);
  }, [query, applyQuery]);

  useEffect(() => {
    onSearchToggle(false);
    setQuery('');
  }, [pathname, onSearchToggle]);

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

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

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
        <>
          <StyledSearchInput
            placeholder={`Search in ${pathname.slice(1)}...`}
            value={query}
            onChange={handleChangeQuery}
            inputRef={inputRef}
            endAdornment={
              <InputAdornment
                sx={{
                  cursor: 'pointer',
                  margin: 0,
                  maxHeight: 'none',
                  height: '100%',
                  scale: '1',
                  transition: 'scale 300ms',

                  '&:hover': {
                    scale: '1.2',
                  },
                }}
                position="end"
              >
                <StyledButtonClear onClick={handleClearSearch} disableRipple>
                  <ClearIcon
                    color="red"
                    sx={{ width: '16px', height: '16px' }}
                  />
                </StyledButtonClear>
              </InputAdornment>
            }
          />
        </>
      )}

      {isSearchOpen ? (
        <StyledSearchButton
          aria-label="clear search"
          disableRipple
          onClick={() => {
            handleClearSearch();
            onSearchToggle(false);
          }}
        >
          <SearchOffIcon color="primary" />
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
