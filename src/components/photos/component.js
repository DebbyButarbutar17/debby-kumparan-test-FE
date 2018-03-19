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
import {
  Image
} from 'react-bootstrap';
export class PagePhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  static detailPhoto(item) {
    console.log('item', item);
    return (
      <Link to={`/photos/1`} style={{ color: 'blue' }}>
        
      </Link>
    );
  }

  componentWillMount() {
    var albumId = this.props.router.location.query.albumId;
    if (albumId) {
      this.props.fetchListPhotos(albumId);
    }
    //   console.log(this.props.routeParams.id);
    // if (this.props.routeParams.id){ 
    //   this.props.fetchUserAlbumsList(this.props.routeParams.id);
    // }
    // console.log(this.props.router.location.query.userId);
    // if (this.props.router.location.query.userId){ 
    //   this.props.fetchUserAlbumsList(this.props.router.location.query.userId);
    // }
  }

  
  render() {
      const{
          photos
      } = this.props

      return (
        //<div>{albums.title}</div> 
        
        <div>
          {photos.map((item, idx) =>
            <div key={idx}>
              <Link to={`/photos/`+item.id} style={{ color: 'blue' }}>
                <Image src={item.url} width="250" heigth="250" style={{ margin: 5 }}></Image>
                    <div>{item.title}</div>
            </Link>
              
            </div>
              
          )}
        </div>
      )

  }
}

PagePhotos.propTypes = {
    // fetchUserPostList: PropTypes.func,s
  fetchListPhotos: PropTypes.func,
};

PagePhotos.defaultProps = {
    // fetchUserPostList: () => { }
//   fetchUserList: () => { },
  fetchListPhotos: () => { }
    
};

export default PagePhotos;

