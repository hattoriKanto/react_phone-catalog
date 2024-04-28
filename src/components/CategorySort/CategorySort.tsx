import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import { getSearchWith } from '../../functions/getSearchWIth';
import { useSearchParams } from 'react-router-dom';
import { SortBy } from '../../types/SortBy';

const perPageStates = [4, 8, 16];

const CategorySort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || 4;
  const sortBy = searchParams.get('sortBy') || SortBy.Alphabetically;

  function handlePerPageChange(event: SelectChangeEvent<string | number>) {
    const newSearchParams = getSearchWith(searchParams, {
      perPage: event.target.value.toString(),
    });

    setSearchParams(newSearchParams);
  }

  function handleSortByChange(event: SelectChangeEvent<string | number>) {
    const newSearchParams = getSearchWith(searchParams, {
      sortBy: event.target.value.toString(),
    });

    setSearchParams(newSearchParams);
  }

  return (
    <Stack direction={'row'} spacing={2} sx={{ pb: 2 }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Items per page"
          value={sortBy || SortBy.Alphabetically}
          sx={{ width: '128px' }}
          onChange={handleSortByChange}
        >
          {Object.entries(SortBy).map(([key, value]) => (
            <MenuItem key={key} value={value}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Items per page
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={perPage}
          label="Items per page"
          sx={{ width: '128px' }}
          onChange={handlePerPageChange}
        >
          <MenuItem value="All" key="All">
            <em>All</em>
          </MenuItem>
          {perPageStates.map(pagPerPage => (
            <MenuItem key={pagPerPage} value={pagPerPage}>
              {pagPerPage}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default CategorySort;
