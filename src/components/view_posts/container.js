import { connect } from 'react-redux';
import { PageDetailPost} from './component';
import {
  fetchDetailPost,
} from './action';

export const mapStateToProps = state => state.pageDetailPost;
export const mapDispatchToProps = dispatch => ({
  fetchDetailPost: id => dispatch(fetchDetailPost(id)),
});

export const PageDetailPostWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageDetailPost);

export default PageDetailPostWrapper;
