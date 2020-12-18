import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces/interface';

interface UserProps {
  user: User;
}

export const Card: React.FC<UserProps> = ({ user }: UserProps) => {
  return (
    <div className={'card'}>
      <img src={user.avatar_url} alt={user.login} className={'card-img-top'} />
      <div className={'card-body'}>
        <h5 className={'card-title'}>{user.login}</h5>
        <Link to={'/profile/' + user.login} className={'btn btn-primary'}>
          Открыть
        </Link>
      </div>
    </div>
  );
};
