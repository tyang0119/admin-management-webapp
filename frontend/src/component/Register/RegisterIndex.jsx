import React from 'react'
import Register from './Register'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions'

class RegisterIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Register
                selectedFile={this.props.selectedFile}
                previewFile={this.props.previewFile}
                output={this.props.onAddUser}
                onReadFile={this.props.onReadFile}
                reset={this.props.onUnSelectedFile}
            ></Register>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        selectedFile: state.file.selectedFile,
        previewFile: state.file.previewedFile
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddUser: (state, data) => dispatch(actionCreators.addUser(state, data)),
        onReadUser: () => dispatch(actionCreators.readUser()),
        onReadFile: (data) => dispatch(actionCreators.selectedFile(data)),
        onUnSelectedFile: () => dispatch(actionCreators.unselectedFile())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterIndex);
