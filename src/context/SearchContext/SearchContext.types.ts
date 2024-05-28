export interface SearchContextProps {
  isSearchOpen: boolean;
  query: string;
  setIsSearchOpen: (isSearchOpen: boolean) => void;
  setQuery: (newQuery: string) => void;
  handleSearchIconClick: () => void;
  handleChangeQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearSearch: () => void;
}

export interface SearchProviderProps {
  children: React.ReactNode;
}
