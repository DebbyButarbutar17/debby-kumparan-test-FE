import { connect } from 'react-redux';
import { PageAlbums} from './component';
import {
  fetchUserAlbumsList,
} from './action';

export const mapStateToProps = state => state.pageAlbums;
export const mapDispatchToProps = dispatch => ({
  fetchUserAlbumsList: id => dispatch(fetchUserAlbumsList(id)),
});

export const PageAlbumsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageAlbums);

export default PageAlbumsWrapper;
