import React, { useState } from 'react';
import { Props } from '../../interfaces/interface';
import { clearUsers, search } from '../../store/actionCreators/actionCreators';
import { useDispatch } from 'react-redux';

export const Search: React.FC<Props> = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') {
      return;
    }

    dispatch(clearUsers());

    if (value.trim()) {
      dispatch(search(value.trim()));
    }
  };

  return (
    <div className={'formgroup mt-4'}>
      <input
        type="text"
        className="form-control"
        id="exampleDataList"
        placeholder="Type to search..."
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleSubmit}
      />
    </div>
  );
};
