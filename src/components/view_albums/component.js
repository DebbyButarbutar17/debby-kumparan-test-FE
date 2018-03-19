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
export class PageDetailAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }
  componentWillMount() {
      // console.log(this.props.router.location.query.userid);
    // if (this.props.router.location.query.userid){ 
    //   this.props.fetchUserPostList(this.props.router.location.query.userid);
    // }
     console.log(this.props.routeParams.id);
    if (this.props.routeParams.id){ 
      this.props.fetchDetailAlbum(this.props.routeParams.id);
    }
  }

  
  render() {
      const{
          detail_album
      } = this.props

      return (
        <div>
            <div style={{color: 'blue'}}></div>
            <div>
              <div className="col-md-6" > 
                <div>
                  <label>Detail Foto</label>
                </div>
                <div>
                  <div style={{ width: 800 }}>Title :
                    {detail_album.title}
                  </div>
                </div>
              </div>
            </div>
        </div>
         
        
      )

  }
}

PageDetailAlbum.propTypes = {
  //  fetchUserPostList: PropTypes.func,
  fetchDetailAlbum: PropTypes.func,
};

PageDetailAlbum.defaultProps = {
 //   fetchUserPostList: () => { }
  fetchDetailAlbum: () => { },
};

export default PageDetailAlbum;

