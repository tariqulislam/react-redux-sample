import React from 'react';
import UserListJson from './user.json';
import ErrorBoundary from './ErrorBoundary.js';

export class UserList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
        <div>
            {
                UserListJson.map((item, index) => {
                    return (  <ErrorBoundary debug={true}>
                           <User key={item.id} {...item} />
                     </ErrorBoundary>)
                })
            }
        </div>
    )
  }
}

export const User = (props) => {
    return (
      <div>
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>{props.phone}</div>
        <div>{props.website.toString()}</div>
      </div>
    )
}

export default UserList;