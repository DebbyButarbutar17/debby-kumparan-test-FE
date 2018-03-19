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
export class PageAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  static detailAlbums(cell, item) {
    console.log('item', item);
    return (
      <Link to={`/photos?albumId=${item.id}`} style={{ color: 'blue' }}>
        {cell || '-'}
      </Link>
    );
  }

  componentWillMount() {
    //   console.log(this.props.routeParams.id);
    // if (this.props.routeParams.id){ 
    //   this.props.fetchUserAlbumsList(this.props.routeParams.id);
    // }
    console.log(this.props.router.location.query.userId);
    if (this.props.router.location.query.userId){ 
      this.props.fetchUserAlbumsList(this.props.router.location.query.userId);
    }
  }

  
  render() {
      const{
          albums
      } = this.props

      return (
        <div>
              <div style={{color: 'blue'}}>List Albums</div>
              <div>
                <BootstrapTable data={albums} striped hover width="100">
                  <TableHeaderColumn
                      dataField="id"                      
                      isKey
                      width="100"
                  >
                  No
                  </TableHeaderColumn>
                  <TableHeaderColumn
                      dataField="title"
                      dataFormat={PageAlbums.detailAlbums}
                      width="100"
                  >
                  Title
                  </TableHeaderColumn>
                  
                </BootstrapTable>
            </div>
        </div>
        
      )

  }
}

PageAlbums.propTypes = {
    // fetchUserPostList: PropTypes.func,s
  fetchUserAlbumsList: PropTypes.func,
};

PageAlbums.defaultProps = {
    // fetchUserPostList: () => { }
//   fetchUserList: () => { },
  fetchUserAlbumsList: () => { }
    
};

export default PageAlbums;

