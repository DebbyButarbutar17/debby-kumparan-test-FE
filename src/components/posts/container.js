import { connect } from 'react-redux';
import { PagePost} from './component';
import {
  fetchUserPostList,
} from './action';

export const mapStateToProps = state => state.pagePost;
export const mapDispatchToProps = dispatch => ({
  fetchUserPostList: id => dispatch(fetchUserPostList(id)),
});

export const PagePostWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagePost);

export default PagePostWrapper;
