import { FormEventHandler, useState } from 'react';
import { ISearshBar } from '../models/ISearch';

export const SearchBar: React.FC<ISearshBar> = ({ onSetSubmitSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onSearhChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    onSetSubmitSearch(searchValue.trim());

    setSearchValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <input
        type="search"
        placeholder="Enter product name"
        value={searchValue}
        onChange={onSearhChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
