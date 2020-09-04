import React, { useState } from 'react';
import './Editor.css';
import { Button, Image, Grid, Header } from "semantic-ui-react";
import { BrowserRouter, useHistory } from 'react-router-dom';

const Editor = (props) => {
    //router go back
    let history = useHistory();
    const data = props.input[0]
    //control props data
    const [firstName, setfirstName] = useState(data.firstName);
    const [lastName, setlastName] = useState(data.lastName);
    const [gender, setgender] = useState(data.gender);
    const [rank, setRank] = useState(data.rank);
    const [date, setDate] = useState(data.date);
    const [phoneNumber, setPhone] = useState(data.phoneNumber);
    const [emailAddress, setEmail] = useState(data.emailAddress);
    const [superior, setSuperior] = useState(data.superior);
    const [preview, setPreview] = useState("preview data here");
    // const [data, setData] = useState("");

    const handleChangeField = (e, setter) => {
        setter(e.target.value)
    }

    let _id = data._id

    console.log("Here is editing data", props.input[0]._id)


    return (
        < div className='modal-content' >
            <BrowserRouter>
                <Grid>
                    <Grid.Column width={8} stretched={false}>
                        {props.previewFile === null ? <Image src={`http://localhost:4000/users/${props.input[0]._id}/avatar`} size='medium' /> : <Image src={`${props.previewFile}`} size='medium' />}
                        <input type='file' onChange={props.onReadFile} />
                    </Grid.Column>
                    <Grid.Column width={7} stretched={true}>
                        <Header>Edit a User :  {data.lastName}, {data.firstName}</Header>
                        <>
                            <div>
                                <br></br>
                                <label>First Name : </label> <span />
                                <input type='text' id='cfirstName' name='cfirstName' placeholder={firstName} required onChange={(e) => handleChangeField(e, setfirstName)} />
                                <br />
                                <label>Last Name : </label> <span />
                                <input type='text' id='clastName' name='clastName' placeholder={lastName} required onChange={(e) => handleChangeField(e, setlastName)} />
                                <br />

                                <label>Gender : </label> <span />
                                <input type='text' id='cgender' name='cgender' required placeholder={gender} onChange={(e) => handleChangeField(e, setgender)} />

                                <br />

                                <label>Rank : </label> <span />
                                <input type='text' id='cRank' name='cRank' required placeholder={rank} onChange={(e) => handleChangeField(e, setRank)} />
                                <br />
                                <label>Start Date:  </label> <span />
                                <input type='text' id='cDate' name='cDate' required placeholder={date} onChange={(e) => handleChangeField(e, setDate)} />
                                <br />

                                <label>Phone :  </label> <span />
                                <input type='text' id='cphone' name='cphone' required placeholder={phoneNumber} onChange={(e) => handleChangeField(e, setPhone)} />
                                <br />

                                <label>Email : </label> <span />
                                <input type='text' id='cemail' name='cemail' required placeholder={emailAddress} onChange={(e) => handleChangeField(e, setEmail)} />
                                <br />
                                {/* 
                                <label>Superior : </label> <span />
                                <input type='text' id='csuperior' name='csuperior' required placeholder={superior} onChange={(e) => handleChangeField(e, setSuperior)} /> */}
                                <br />

                                <br />
                            </div >
                        </>

                        <ul>
                            <Button
                                content="Cancel"
                                labelPosition='right'
                                icon='delete'
                                onClick={() => {
                                    history.goBack()
                                    props.reset()
                                    // props.off()
                                }}
                            />
                            <Button
                                content="Update Solider"
                                labelPosition='right'
                                icon='checkmark'
                                onClick={() => {
                                    history.goBack();
                                    props.output(props.selectedFile, {
                                        _id,
                                        firstName,
                                        lastName,
                                        gender,
                                        rank,
                                        phoneNumber,
                                        emailAddress,
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

export default Editor;

// onClick={() => props.clickedAdd({
//     firstName,
//     lastName,
//     gender,
//     age,
//     password
// })}