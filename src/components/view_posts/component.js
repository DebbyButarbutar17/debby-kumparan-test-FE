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
      console.log(this.props.routeParams.id);
    if (this.props.routeParams.id){ 
      this.props.fetchDetailPost(this.props.routeParams.id);
      this.props.fetchListComment(this.props.routeParams.id);
    }
  }

  
  render() {
      const{
          detail_post,
          list_comment
      } = this.props

      console.log('detail ', detail_post)

      return (
        <div>
            <div style={{color: 'blue'}}>Detail Post</div>

            <div className="col-md-6"> 
              <div>
                <div style={{ width: 800 }}>Title :
                  {detail_post.title}
                </div>
              </div>
              <div>
                <div style={{ width: 800 }}>Description :   
                  { detail_post.body}
                </div>
              </div>
            </div>

            <div>
              <BootstrapTable data={list_comment} striped hover width="100">
                 <TableHeaderColumn
                      dataField="id"
                    isKey
                    width="100"
                >
                No
                </TableHeaderColumn>
                <TableHeaderColumn
                    dataField="name"
                    width="100"
                >
                Name
                </TableHeaderColumn>
                 <TableHeaderColumn
                    dataField="email"
                    width="100"
                >
                Email
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

PageDetailPost.propTypes = {
  //  fetchUserPostList: PropTypes.func,
  fetchDetailPost: PropTypes.func,
  fetchListComment: PropTypes.func
};

PageDetailPost.defaultProps = {
 //   fetchUserPostList: () => { }
  fetchDetailPost: () => { },
  fetchListComment: () => { }
};

export default PageDetailPost;

