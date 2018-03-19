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
export class PageDetailPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }
  componentWillMount() {
      console.log(this.props.router.location.query.userid);
    // if (this.props.router.location.query.userid){ 
    //   this.props.fetchUserPostList(this.props.router.location.query.userid);
    // }
  }

  
  render() {
      const{
          posts
      } = this.props

      return (
        <div>test123</div>
         /*<BootstrapTable data={posts} striped hover width="100">
          <TableHeaderColumn
              dataField="id"
              isKey
              width="100"
          >
          No
          </TableHeaderColumn>
          <TableHeaderColumn
              dataField="title"
              dataFormat={(cell, items) => (
                <div>
                      <Link
                        className="btn-primary"
                        to={`/posts/`+items.id}
                      >
                        
                      </Link>
                </div>
              )}
          >
          Title
          </TableHeaderColumn>
          <TableHeaderColumn
              dataField="body"
              width="100"
          >
          Body
          </TableHeaderColumn>
          
        </BootstrapTable>*/
        
      )

  }
}

PageDetailPost.propTypes = {
  //  fetchUserPostList: PropTypes.func,
  fetchDetailPost: PropTypes.func,
};

PageDetailPost.defaultProps = {
 //   fetchUserPostList: () => { }
  fetchDetailPost: () => { },
};

export default PageDetailPost;

