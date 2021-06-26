import React,{useState} from 'react'
import axios from 'axios'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))





export default function Create() {


    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
        if(id === i.id) {
            i[event.target.name] = event.target.value
        }
        return i;
        })
        
        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
    }

    const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    let [title,setTitle]=useState("")
    let [sub,setSub]=useState("")
    let [body,setBody]=useState("")
    let [reci,setReci]=useState("")
    let [cc,setCC]=useState("")

    let onSun=(e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    }

    let onSend=(e)=>{
        body={
            title:title,
            subject:sub,
            body:body,
            recipient:reci,
            cc: cc
        }
        axios.post('http://localhost:5000/create',body).then(           
            console.log('Email Sent')            
        )
    }
    return (
        <div className="container-fluid bg-dark bg-gradient text-white p-5" >


            <form className='w-50 m-auto mt-5 bg-transparent bg-gradient p-5 rounded'>
                <h4>
                    Fillup the email body to schedule or send an email.
                </h4>

                <br />

                <select class="form-select" aria-label="Default select example">
                    <option selected>Select the schedule type of Email</option>
                    <option value="1">Recurring</option>
                    <option value="2">Weekly</option>
                    <option value="3">Monthly</option>
                    <option value="3">Yearly</option>
                </select>

                <select class="form-select" aria-label="Default select example">
                    <option selected>If Recurring Time Interval</option>
                    <option value="1">20s</option>
                    <option value="2">30s</option>
                </select>
                <br />

                <label for="schedule"> If Yearly/Montly Date </label>
                <br />
                <input type="datetime-local" id="birthday" name="birthday" />

                <br />


                <br />

                <select class="form-select" aria-label="Default select example">
                    <option selected>Select day</option>
                    <option value="1">Monday</option>
                    <option value="1">Tuesday</option>
                    <option value="1">Wednesday</option>
                    <option value="1">Thursday</option>
                    <option value="1">Friday</option>
                    <option value="1">Saturday</option>
                    <option value="1">Sunday</option>
                   
                </select>
                <label for="appt">Select a time:</label>
                <input type="time" id="appt" name="appt" />

                <br />
                <br />

                <hr />

                <h3>
                    Email Content
                </h3>


                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="email-sub" class="form-label">Email Subject</label>
                    <input type="text" class="form-control" id="email-sub" onChange={(e)=>setSub(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="email-body" class="form-label">Email Body</label>
                    <textarea class="form-control" id="email-body" rows="3" onChange={(e)=>setBody(e.target.value)}></textarea>
                </div>
                <div class="mb-3">
                    <label for="recipient" class="form-label">Recipient</label>
                    <input type="email" class="form-control" id="recipient" onChange={(e)=>setReci(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="cc" class="form-label">Carbon Copy</label>
                    { inputFields.map(inputField => (
                    <div key={inputField.id} >
                        <TextField
                        className="bg-light"
                        name="firstName"
                        label="email"
                        variant="standard"
                        value={inputField.firstName}
                        onChange={event => handleChangeInput(inputField.id, event)}
                        />
                        <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                        <RemoveIcon />
                        </IconButton>
                        <IconButton
                        onClick={handleAddFields}
                        >
                        <AddIcon />
                        </IconButton>
                    </div>
                    )) }
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={()=>onSend()} class="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
}
