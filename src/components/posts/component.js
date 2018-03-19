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
        <div>
              <div style={{color: 'blue'}}>List Posts</div>
              <div>
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
                        width="100"
                        dataFormat={PagePost.detailPost}
                    >
                    Title
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="body"
                        width="100"
                    >
                    Body
                    </TableHeaderColumn>
                    
                  </BootstrapTable>
              </div>
        </div>
         
        
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

