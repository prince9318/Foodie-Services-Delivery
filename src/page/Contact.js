import React,{useState, useRef, Fragment} from 'react';
import emailjs from "@emailjs/browser";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
    e.preventDefault();
    
    if(!formData.from_name || !formData.reply_to ||!formData.message){
      setNotDone(true)
    } else {
      
    emailjs
      .sendForm(
        "service_ivfnly9",
        "template_2utpax9",
        form.current,
        "C40ddkPtFjHk_nrRG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    };
    
    

    return(
        <Fragment >
          
          <div class="float-container">

            <div class="float-child-1">
              <div class="green">
                <h1 className='green-1'>Contact Us</h1>
                <div className='yello'>
                  <div className='orange'>
                      <a href='http://localhost:3000/'><h2>Foodie Service</h2></a>
                      <a href='+91 9318447744'><h3>+91 9318447744</h3></a>
                      <a href='https://mail.google.com/mail/u/0/#inbox'><h3>foodieservice_id_@gmail.com</h3></a>
                  </div> 
                </div>
              </div>
              
            </div>
            


            <div class="float-child-2">
              <div class="blue">
                <h1>Send me Message if any problems.</h1>
              </div>

              <div md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
                  <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                  <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                  <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                  <Button type="submit" className="button" disabled={done}>Send</Button>
                  <span className='done'>{done && "Thanks for Contacting me"}</span>
                </form>

              </div>
            </div>
            
          </div>
        </Fragment>
    )
}

export default Contact;