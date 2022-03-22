import * as React from 'react';
import {Form, FormGroup, TextInput} from '@patternfly/react-core';

export const NameForm: React.FC = () => {
    const [notebookName, setNotebookName] = React.useState('');
    const nameInputRef = React.useRef<HTMLInputElement>(null);

    const handleNotebookNameChange = (value: string) => setNotebookName(value);

    // const onCreateProject = () => {
    //     console.log('do something');
    // };

    return (
        <Form>
            <FormGroup label="Name" isRequired fieldId="modal-create-data-project-name">
            <TextInput
                isRequired
                id="modal-create-data-project-name"
                name="modal-create-data-project-name"
                value={notebookName}
                onChange={handleNotebookNameChange}
                ref={nameInputRef}
            />
            </FormGroup>
        </Form>
    )
}

export default NameForm