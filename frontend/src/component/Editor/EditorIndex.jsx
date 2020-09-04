import React from 'react'
import Editor from './Editor'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions'

class EditorIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        let row = null;
        if (this.props.isEditing) {
            row = (<Editor
                input={this.props.editTarget}
                selectedFile={this.props.selectedFile}
                previewFile={this.props.previewFile}
                output={(state, data) => this.props.onUpdate(data._id, state, data)}
                // output={(state, data) => console.log(state, data)}
                off={this.props.offEditor}
                onReadFile={this.props.onReadFile}
                reset={this.props.onUnSelectedFile}
            >
            </Editor>)
        }

        return (
            <div>{row}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        editTarget: state.user.editTarget,
        isEditing: state.user.isEditing,
        selectedFile: state.file.selectedFile,
        previewFile: state.file.previewedFile
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddUser: (data) => dispatch(actionCreators.addUser(data)),
        onReadUser: () => dispatch(actionCreators.readUser()),
        offEditor: () => dispatch(actionCreators.offeditor()),
        onUpdate: (id, state, data) => dispatch(actionCreators.updateUser(id, state, data)),
        onReadFile: (data) => dispatch(actionCreators.selectedFile(data)),
        onUnSelectedFile: () => dispatch(actionCreators.unselectedFile())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorIndex);
