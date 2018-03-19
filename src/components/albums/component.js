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
  componentWillMount() {
    //   console.log(this.props.routeParams.id);
    if (this.props.routeParams.id){ 
      this.props.fetchUserAlbumsList(this.props.routeParams.id);
    }
  }

  
  render() {
      const{
          albums
      } = this.props

      return (
        <div>{albums.title}</div> 
        // <div>hello</div>
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

