import { connect } from 'react-redux';
import { PageDetailAlbum} from './component';
import {
  fetchDetailAlbum,
} from './action';

export const mapStateToProps = state => state.pageDetailAlbum;
export const mapDispatchToProps = dispatch => ({
  fetchDetailAlbum: id => dispatch(fetchDetailAlbum(id)),
});

export const PageDetailAlbumWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageDetailAlbum);

export default PageDetailAlbumWrapper;
