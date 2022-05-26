import React from 'react';

const UserRow = ({user,index}) => {
    const{email}=user
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td><button class="btn  btn-xs">Make Admin</button></td>
        <td><button class="btn btn-secondary btn-xs">Remove Admin</button></td>
      </tr>
    );
};

export default UserRow;