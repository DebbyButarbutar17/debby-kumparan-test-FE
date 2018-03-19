import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router';
import {
  Button,
  Input,
} from 'react-bootstrap';
import {
  BootstrapTable,
  TableHeaderColumn,
  SizePerPageDropDown,
} from 'react-bootstrap-table';
export class PageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }
  componentWillMount() {
    var test =this.props.fetchUserList();
    console.log('test ', test);
    // console.log('first');
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(result => {
    //   return result.json();
    // }). then(data => {
    //   console.log('second');
    //   this.setState({
    //     data,
    //   });
    // })
  }

  componentWillUpdate(nextProps) {
    if (
      this.props.users !== nextProps.users &&
      typeof nextProps.users !== 'undefined'
    ) {
      console.log('hereee');
    }
  }
  render() {
    const {
      users
    } = this.props;
    console.log('lenght ', users.length)
    const comp = users.length > 0 ? (
      console.log('satu', users[0].name) ): (null
    );
    return (
      <div>
        <div style={{color: 'blue'}}>List Users</div>
        <div>
          {console.log('lol',users[0])}
          <BootstrapTable data={users} striped hover width="100">
            <TableHeaderColumn
                dataField="id"
                isKey
                width="100"
            >
            UserID
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField="name"
                width="200"
            >
            User
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField="username"
                width="200"
            >
            Username
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField="phone"
                width="200"
            >
            Phone
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField="website"
                width="200"
            >
            Website
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField="email"
                width="200"
            >
            Email
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField="id"
                dataFormat={(cell, items) => (
                      <div>
                        <Link
                          className="btn-primary"
                          to={`/posts?userid=`+items.id}
                        >
                          View Posts
                        </Link>
                        <Link
                          className="btn-primary"
                          to={`/albums?userId=` +items.id}
                        >
                          View Album
                        </Link>
                      </div>
                    )}

            >
            Action
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
      
    );
  }
}

PageUser.propTypes = {
  fetchUserList: PropTypes.func,
};

PageUser.defaultProps = {
  fetchUserList: () => { },
};

export default PageUser;

