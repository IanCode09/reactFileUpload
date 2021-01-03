import React, {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios'

const FormProfile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()

        const data = { 
            name,
            email,
            password,
            description
        }

        axios.post('/user/signup', data)
            .then(response => {
                console.log(response);
            })
    }

    const handleOnChange = (e, editor) => {
        const data = editor.getData()
        setDescription(data)
    }

    return (
        <div>
            <h2>Form Profile</h2>
            <form onSubmit={submitHandler}>
                <div className="form-input">
                    <label>Full Name</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-input">
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-input">
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
                </div>

                {/* <div className="form-input">
                    <label>Description</label>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div> */}

                <CKEditor editor={ClassicEditor} onChange={handleOnChange} />

                <div className="form-input">
                    <input type="file" />
                </div>

                <button type="submit">Submit</button>
                
            </form>
            
        </div>
    )
}

export default FormProfile
