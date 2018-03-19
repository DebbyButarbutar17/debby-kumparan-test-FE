import { connect } from 'react-redux';
import { PagePhotos} from './component';
import {
  fetchListPhotos,
} from './action';

export const mapStateToProps = state => state.pagePhotos;
export const mapDispatchToProps = dispatch => ({
  fetchListPhotos: id => dispatch(fetchListPhotos(id)),
});

export const PagePhotosWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagePhotos);

export default PagePhotosWrapper;
