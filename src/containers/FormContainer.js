import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewLocation } from '../actions/locationActions';
import Form from '../components/Form';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addNewLocation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
