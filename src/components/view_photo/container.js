import { connect } from 'react-redux';
import { PageDetailPhoto } from './component';
import {
  fetchDetailPhoto
} from './action';

export const mapStateToProps = state => state.pageDetailPhoto;
export const mapDispatchToProps = dispatch => ({
  fetchDetailPhoto: id => dispatch(fetchDetailPhoto(id))
});

export const PageDetailPhotoWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageDetailPhoto);

export default PageDetailPhotoWrapper;
