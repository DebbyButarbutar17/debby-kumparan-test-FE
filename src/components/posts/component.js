import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router';
import {
  BootstrapTable,
  TableHeaderColumn,
  SizePerPageDropDown,
} from 'react-bootstrap-table';
export class PagePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  static detailPost(cell, item) {
    console.log('item', item);
    return (
      <Link to={`/posts/${item.id}`} style={{ color: 'blue' }}>
        {cell || '-'}
      </Link>
    );
  }
  componentWillMount() {
      console.log(this.props.router.location.query.userid);
    if (this.props.router.location.query.userid){ 
      this.props.fetchUserPostList(this.props.router.location.query.userid);
    }
  }

  
  render() {
      const{
          posts
      } = this.props

      return (
         <BootstrapTable data={posts} striped hover width="100">
          <TableHeaderColumn
              dataField="id"
              isKey
              width="100"
          >
          No
          </TableHeaderColumn>
          <TableHeaderColumn
              dataField="title"
              dataFormat={PagePost.detailPost}
              width="100"
          >
          Title
        </TableHeaderColumn>
        <TableHeaderColumn
             dataField="id"
             width="200"
              dataFormat={(cell, items) => (
                    <div>
                      <Link
                        className="btn-primary"
                        to={`/posts/edit/` +items.id}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn-primary"
                       to={`/posts/delete/` +items.id}
                      >
                        Delete
                      </Link>
                    </div>
                  )}

          >
          Action
          </TableHeaderColumn>
          
        </BootstrapTable>
        
      )

  }
}

PagePost.propTypes = {
    fetchUserPostList: PropTypes.func,
//   fetchUserList: PropTypes.func,
};

PagePost.defaultProps = {
    fetchUserPostList: () => { }
//   fetchUserList: () => { },
};

export default PagePost;

