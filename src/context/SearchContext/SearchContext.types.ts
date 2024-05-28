export interface SearchContextProps {
  isSearchOpen: boolean;
  query: string;
  setIsSearchOpen: (isSearchOpen: boolean) => void;
  setQuery: (newQuery: string) => void;
  handleSearchIconClick: () => void;
  handleClearSearch: () => void;
}

export interface SearchProviderProps {
  children: React.ReactNode;
}
