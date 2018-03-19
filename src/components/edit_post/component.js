import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router';
import {
  Input,
  Form
} from 'react-bootstrap';
import {
  BootstrapTable,
  TableHeaderColumn,
  SizePerPageDropDown,
} from 'react-bootstrap-table';
import {
  setTarget,
} from '../../helpers/constants';
export class PageEditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {
        userId: 0,
        title: '',
        body: ''
      },
      error : {
        title: '',
        body: ''
      },
      userId: 0,
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    if (this.props.routeParams.id){ 
      // console.log(this.props.routeParams.id);
      // this.props.fetchEditPost(this.props.routeParams.id);
      this.props.fetchPostDetail(this.props.routeParams.id)
      // this.props.fetchListComment(this.props.routeParams.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.detail_post !== nextProps.detail_post) {
      // console.log('this ', this.props.detail_post);
      // console.log('next ', nextProps.detail_post);
      this.setState({
        data: Object.assign(this.state.data, {
          userId: nextProps.detail_post.userId,
          title: nextProps.detail_post.title,
          body: nextProps.detail_post.body,
        }),
      });
    }
  }

  // onChange(e, element) {
  //   const {
  //     name,
  //     value,
  //   } = e.target;

  //   console.log('e ', e);
  //   console.log('element ', element);
  //   const elm = this.state[element];
  //   elm[name] = value;

  //   this.setState({ [element]: elm });

  //   if (element !== 'error' && value && this.state.error[name]) {
  //     this.setState({
  //       error: Object.assign(this.state.error, {
  //         [name]: '',
  //       }),
  //     });
  //   }
  // }

  onChange(e, element) {
    const { name, value } = e.target;
    const elm = this.state[element];
    elm[name] = value;
    this.setState({ [element]: elm });

    if (value && element !== 'error' && this.state.error[name]) {
      this.onChange(setTarget(name, ''), 'error');
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    var e = this.props.fetchEditPost(this.props.routeParams.id, this.state.data)
    console.log('e ', e);
  }
  
  render() {
      const{
          detail_post
          // list_comment
      } = this.props

      return (
        <div>
          <Form onSubmit={this.onSubmit}>
            <label>
              Title:
              <input
                type="text"
                value={this.state.data.title}
                onChange={e => this.onChange(setTarget('title', e.target.value), 'data')}
              />
            </label><br/>
            <label>
              Deskripsi:
              <input type="text"
                value={this.state.data.body}
                onChange={e => this.onChange(setTarget('body', e.target.value), 'data')}
              />
            </label>
            <input type="submit"/>
          </Form>
        </div>
      )
  }
}

PageEditPost.propTypes = {
  fetchEditPost: PropTypes.func,
  // fetchDetailPost: PropTypes.func,
  fetchPostDetail: PropTypes.func,
};

PageEditPost.defaultProps = {
  fetchEditPost: () => { },
  // fetchDetailPost:  () => { }
  fetchPostDetail: () => { }
};

export default PageEditPost;

