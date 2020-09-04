import React from 'react';
//component
import EditorIndex from '../../component/Editor/EditorIndex';
import RegisterIndex from '../../component/Register/RegisterIndex';
import axios from 'axios'

//semantic
import 'semantic-ui-css/semantic.min.css';
import './TableContainer.css'
import { Button, Icon, Search } from "semantic-ui-react";

//react 
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions'

import _ from 'lodash'

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.onReadUser();
        this.state = {
            data: [],
            // data: [],
            // beclicked: "",
            //---------------------
            isLoading: false,
            results: [],
            value: '',
            valueLength: 0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ data: this.props.user })
        }, 1000)
    }

    uploadHandler = () => {
        const formData = new FormData()
        formData.append(
            'avatar',
            this.state.selectedFile,
            this.state.selectedFile.name
        )
        let store = "";

        console.log(formData)
        axios.post('http://localhost:4000/users/avatar',
            formData
        )
            .then(res => {
                console.log(res.data)
                store = res.data
            })
            .then(res => {
                axios.put("http://localhost:4000/users/" + store, { firstName: "Tianhao" })
                    .then(res => console.log("deleted success"))

            })
            .catch(error => console.log(error))
    }


    handleSearchChange = (e, { value }) => {
        const initstate = {
            isLoading: false,
            result: [],
            value: '',
            valueLength: 0,
        }
        let source = this.props.user
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState({ initstate })

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (data) => {
                if (re.test(data.firstName) || re.test(data.lastName)) {
                    return true
                }
                return false
            }

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
                valueLength: this.state.value.length
            })
            // console.log(this.state.results)
            // console.log(this.state.valueLength)
        }, 300)
        // fixed this line
        // this.forceUpdate();
    }

    render() {
        let row = null;
        let counter = 0;
        let tmp = 0;

        if (this.state.value === "") {

            row = (
                this.props.user.map((user) => (
                    // this.state.data.map((user) => (
                    <tr key={user._id}>
                        <td >
                            {<img src={`http://localhost:4000/users/${user._id}/avatar`} width="50" height="50" />}
                        </td>
                        <td>{user.lastName}, {user.firstName}</td>
                        <td>{user.gender}</td>
                        <td>{user.rank}</td>
                        {/* <td>{user.startDate}</td> */}
                        <td>({user.phoneNumber.toString().slice(0, 3)})-{user.phoneNumber.toString().slice(3, 6)}-{user.phoneNumber.toString().slice(6, 10)}</td>
                        <td>{user.emailAddress}</td>
                        <td>{this.props.user.map(data => {
                            if (user.parent === data._id) {
                                const Last = data.lastName;
                                const First = data.firstName;
                                return [Last, ", ", First]
                            }
                        })}

                        </td>
                        <td>
                            {this.props.user.map(data => {
                                if (user._id === data.parent) {
                                    counter += 1
                                }
                            }),
                                this.props.user.map(data => {
                                    if (user._id === data._id) {
                                        if (counter === 0) { tmp = null }
                                        else {
                                            tmp = counter
                                            counter = 0
                                        }
                                    }
                                })
                            }
                            <p onClick={() => console.log("hello")}>{tmp}</p>
                        </td>

                        <td>
                            <Link to="/editor">
                                <Button
                                    icon='edit'
                                    onClick={() => this.props.onReadTarget(user._id)}
                                />
                            </Link>
                        </td>
                        <td>
                            <Button
                                icon='trash alternate'
                                onClick={() => this.props.onDeleteUser(user._id)}
                            />
                        </td>
                    </tr>
                )))
        } else {
            row = (
                // this.props.user.map((user) => (
                this.state.results.map((user) => (
                    <tr key={user._id}>
                        <td >
                            {<img src={`http://localhost:4000/users/${user._id}/avatar`} width="50" height="50" />}
                        </td>
                        <td>{user.lastName}, {user.firstName}</td>
                        <td>{user.gender}</td>
                        <td>{user.rank}</td>
                        {/* <td>{user.startDate}</td> */}
                        <td>({user.phoneNumber.toString().slice(0, 3)})-{user.phoneNumber.toString().slice(3, 6)}-{user.phoneNumber.toString().slice(6, 10)}</td>
                        <td>{user.emailAddress}</td>
                        <td>{this.props.user.map(data => {
                            if (user.parent === data._id) {
                                const Last = data.lastName;
                                const First = data.firstName;
                                return [Last, ", ", First]
                            }
                        })}

                        </td>
                        <td>
                            {this.props.user.map(data => {
                                if (user._id === data.parent) {
                                    counter += 1
                                }
                            }),
                                this.props.user.map(data => {
                                    if (user._id === data._id) {
                                        if (counter === 0) { tmp = null }
                                        else {
                                            tmp = counter
                                            counter = 0
                                        }
                                    }
                                })
                            }
                            <p onClick={() => console.log("hello")}>{tmp}</p>
                        </td>

                        <td>
                            <Link to="/editor">
                                <Button
                                    icon='edit'
                                    onClick={() => this.props.onReadTarget(user._id)}
                                />
                            </Link>
                        </td>
                        <td>
                            <Button
                                icon='trash alternate'
                                onClick={() => this.props.onDeleteUser(user._id)}
                            />
                        </td>
                    </tr>
                )))
        }



        return (
            < BrowserRouter >
                <Search
                    showNoResults={false}
                    onSearchChange={this.handleSearchChange}
                />
                <div>
                    <table class="ui celled table">
                        <thead>
                            <tr>
                                <th>
                                    Avatar
                                </th>
                                <th>Name<Icon name='sort' onClick={() => alert("sorting name")}></Icon></th>
                                <th>Gender<Icon name='sort' onClick={() => alert("sorting Gender")}></Icon></th>
                                <th>Rank<Icon name='sort' onClick={() => alert("sorting Rank")}></Icon></th>
                                {/* <th>Start Date <Icon name='sort' onClick={() => alert("sorting Date")}></Icon></th> */}
                                <th>Phone<Icon name='sort' onClick={() => alert("sorting Phone")}></Icon></th>
                                <th>Email<Icon name='sort' onClick={() => alert("sorting Email")}></Icon></th>
                                <th>Superior<Icon name='sort' onClick={() => alert("sorting Superior")}></Icon></th>
                                <th># of D. S.</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {row}
                        </tbody>
                    </table>

                    <Link to="/register">
                        <Button content='Create'
                            onClick={this.props.onReadUser}
                        />
                    </Link>

                    <Switch>
                        <Route exact path="/register" component={RegisterIndex} />
                        <Route path="/editor" component={EditorIndex} />
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        editTarget: state.user.editTarget,
        selectedFile: state.file.selectedFile,
        previewFile: state.file.previewedFile
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAdduser: (state) => dispatch(actionCreators.addUser(state)),
        onReadUser: () => dispatch(actionCreators.readUser()),
        onDeleteUser: (id) => dispatch(actionCreators.deleteUser(id)),
        onReadTarget: (id) => dispatch(actionCreators.readTarget(id)),
        onReadFile: (data) => dispatch(actionCreators.selectedFile(data))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);