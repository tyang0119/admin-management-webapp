import React, { useState } from 'react';
import Register from '../Register/Register';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const ModalWin = (props) => {
    const [open, setOpen] = useState('false')

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
        // trigger={<Button>Show Modal</Button>}
        >
            <Modal.Header>
                {props.title} Here is Title
            </Modal.Header>

            <Modal.Content image>
                <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
                <Modal.Description>
                    {/* <Header>Default Profile Image</Header>
                    <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
                     </p>
                     
                    <p>Is it okay to use this photo?</p> */}
                    <div>
                        <Register></Register>
                    </div>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>

                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>

                <Button
                    content="Create a New Solider"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default ModalWin