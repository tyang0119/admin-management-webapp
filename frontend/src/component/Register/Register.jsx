import React, { useState } from 'react';
import './Register.css';
import { Button, Header, Image, Grid, Dropdown, Checkbox, Form, Radio, Input, Select } from "semantic-ui-react";
import { BrowserRouter, useHistory } from 'react-router-dom';


const Register = (props) => {
    //router go back
    let history = useHistory();

    //control props data
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [gender, setgender] = useState("");
    const [rank, setRank] = useState("");
    const [date, setDate] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [emailAddress, setEmail] = useState("");
    const [superior, setSuperior] = useState("");
    const [preview, setPreview] = useState("");

    //dropdown
    const rankOption = [
        { key: 1, text: 'General', value: 1 },
        { key: 2, text: 'Colonel', value: 2 },
        { key: 3, text: 'Major', value: 3 },
        { key: 4, text: 'Captain', value: 4 },
        { key: 5, text: 'Lieutenant', value: 5 },
        { key: 6, text: 'Warrant Officer', value: 6 },
        { key: 7, text: 'Sergeant', value: 7 },
        { key: 8, text: 'Corporal', value: 8 },
        { key: 9, text: 'Specialist', value: 9 },
        { key: 10, text: 'Private', value: 10 },
    ]


    const handleChangeField = (e, setter) => {
        setter(e.target.value)
    }
    const handleCheckChange = (input) => {
        setgender(input.value)
        console.log(gender)
    }



    const options = [
        { key: 'm', text: 'Male', value: 'Male' },
        { key: 'f', text: 'Female', value: 'Female' },
        { key: 'o', text: "Don't want to tell", value: "Secret" },
    ]

    return (
        <div className='modal-content'>
            <BrowserRouter>
                <Grid>
                    <Grid.Column width={8} stretched={false}>
                        {props.previewFile === null ? <Image src='https://www.biiainsurance.com/wp-content/uploads/2015/05/no-image.jpg' size='medium' /> : <Image src={`${props.previewFile}`} size='medium' />}

                        <input type='file' onChange={props.onReadFile} />


                        {/* <button onClick={() => this.props.onAdduser(this.props.selectedFile)}> upload</button> */}
                    </Grid.Column>
                    <Grid.Column width={7} stretched={true}>
                        <Header>Create a New User</Header>
                        <>
                            <Form>
                                <div>
                                    <label>First Name :<input type='text' id='cfirstName' name='cfirstName' placeholder={firstName} required value={firstName} onChange={(e) => handleChangeField(e, setfirstName)} /></label>
                                    <label>Last Name : <input type='text' id='clastName' name='clastName' required value={lastName} onChange={(e) => handleChangeField(e, setlastName)} /></label>
                                    <label>Gender:  </label>
                                    {/* <Form.Group inline={true}>
                                        <Form.Field
                                            control={Radio}
                                            label='Male'
                                            value='Male'
                                            checked={gender === 'Male'}
                                            onChange={(e, { value }) => handleCheckChange(e, { value })}
                                        />
                                        <Form.Field
                                            control={Radio}
                                            label='Female'
                                            value='Female'
                                            checked={gender === 'Female'}
                                            onChange={(e, { value }) => handleCheckChange(e, { value })}
                                        />
                                    </Form.Group> */}
                                    <Form.Field
                                        control={Select}
                                        // label='Gender: '
                                        options={options}
                                        placeholder='Gender'
                                        onChange={(e, data) => handleCheckChange(data)}
                                    />
                                    <label>Rank : <input type='text' id='cRank' name='cRank' required value={rank} onChange={(e) => handleChangeField(e, setRank)} /></label>
                                    <label>Start Date: <input type='text' id='cDate' name='cDate' required value={date} onChange={(e) => handleChangeField(e, setDate)} /> </label>
                                    <label>Phone :  <input type='text' id='cphone' name='cphone' required value={phoneNumber} onChange={(e) => handleChangeField(e, setPhone)} /></label>
                                    <label>Email : <input type='text' id='cemail' name='cemail' required value={emailAddress} onChange={(e) => handleChangeField(e, setEmail)} /></label>
                                    {/* <label>Superior : <input type='text' id='csuperior' name='csuperior' required value={superior} onChange={(e) => handleChangeField(e, setSuperior)} /></label> */}
                                </div >
                            </Form>
                        </>

                        <ul>
                            <Button
                                content="Cancel"
                                labelPosition='right'
                                icon='delete'
                                onClick={() => {
                                    history.goBack()
                                    props.reset()
                                }}
                            />
                            <Button
                                content="Create a New Solider"
                                labelPosition='right'
                                icon='checkmark'
                                onClick={() => {

                                    history.goBack();
                                    props.output(props.selectedFile, {
                                        firstName,
                                        lastName,
                                        gender,
                                        rank,
                                        date,
                                        phoneNumber,
                                        emailAddress,
                                        superior
                                    })
                                    console.log({
                                        firstName,
                                        lastName,
                                        gender,
                                        rank,
                                        date,
                                        phoneNumber,
                                        emailAddress,
                                        superior
                                    })
                                }}
                            />
                        </ul>
                    </Grid.Column>
                </Grid>
            </BrowserRouter >
        </div >
    );
}


export default Register

// onClick={() => props.clickedAdd({
//     firstName,
//     lastName,
//     gender,
//     age,
//     password
// })}

// {/* <label> # of D.S : </label> <span />
//                         <input type='text' id='cage' name='cage' required value={age} onChange={(e) => handleChangeField(e, setage)} />
//                         <br /> */}

// <br></br>
// {/* {password !== confirm && <span>123213</span>} */ }
// {/* <input type='submit' value='Add User' /> */ }