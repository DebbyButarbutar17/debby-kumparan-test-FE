import { connect } from 'react-redux';
import { PageEditPost} from './component';
import {
  fetchEditPost,
  // fetchDetailPost,
  fetchPostDetail,
  // fetchListComment
} from './action';

export const mapStateToProps = state => state.pageEditPost;
export const mapDispatchToProps = dispatch => ({
  fetchEditPost: (id, params) => dispatch(fetchEditPost(id, params)),
  // fetchDetailPost: id => dispatch(fetchEditPost(id)),
  fetchPostDetail: id => dispatch(fetchPostDetail(id)),
  // fetchListComment: id => dispatch(fetchListComment(id)),
});

export const PageEditPostWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageEditPost);

export default PageEditPostWrapper;
