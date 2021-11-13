import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Mike Bird',
      image:
        'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/123224209_10223724309119574_1122481359688748289_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xe14_h6eyBkAX---WZA&_nc_ht=scontent-sea1-1.xx&oh=798a1fb7d15a1906c07705cad03d4fa5&oe=61ABD999',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
