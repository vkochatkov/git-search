import React from 'react';
import { Search } from '../../components/Search/Search';
import { Props, Users, Loading, User } from '../../interfaces/interface';
import { useSelector } from 'react-redux';
import { Card } from '../../components/Card/Card';

export const HomePage: React.FC<Props> = () => {
  const users = useSelector((state: Users) => state.users);
  const loading = useSelector((state: Loading) => state.loading);

  return (
    <>
      <Search />

      <div className="row pt-4">
        {loading ? (
          <p className={'text-center'}>Загрузка...</p>
        ) : (
          users.map((user: User) => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </>
  );
};
