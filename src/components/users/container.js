import { connect } from 'react-redux';
import { PageUser} from './component';
import {
  fetchUserList,
} from './action';

export const mapStateToProps = state => state.pageUser;
export const mapDispatchToProps = dispatch => ({
  fetchUserList: () => dispatch(fetchUserList()),
});

export const PageUserWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageUser);

export default PageUserWrapper;
