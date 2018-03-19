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
export class PageDetailPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }
  componentWillMount() {
      console.log(this.props.routeParams.id);
    if (this.props.routeParams.id){ 
      this.props.fetchDetailPhoto(this.props.routeParams.id);
    }
  }

  
  render() {
      const{
          detail_photo
      } = this.props

      return (
        <div>
            <div style={{color: 'blue'}}>Detail Photo</div>
            <div>
              <div className="col-md-6" > 
                <div>
                  <div style={{ width: 800 }}>Title :
                    {detail_photo.title}
                  </div>
                </div>
                <div>
                  <Image src={detail_photo.url} width="250" heigth="250" style={{ margin: 5 }}></Image>
                </div>
              </div>
            </div>
      </div>
        
        
      )

  }
}

PageDetailPhoto.propTypes = {
  fetchDetailPhoto: PropTypes.func
};

PageDetailPhoto.defaultProps = {
  fetchDetailPhoto: () => { }
};

export default PageDetailPhoto;

