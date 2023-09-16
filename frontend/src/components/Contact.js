import {useState, useRef} from 'react';
import axios from 'axios';

const Contact = () => {      
    const [ formData , setFormData ] = useState({
        'full_name':'',
            'email':'',
            'subject':'',
            'message':'',
            'status':'',
    })

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    
    const sendEmail = () => {
        const feedbackFormData = new FormData();
        feedbackFormData.append('full_name', formData.full_name)
        feedbackFormData.append('email', formData.email)
        feedbackFormData.append('subject', formData.subject)
        feedbackFormData.append('message', formData.message)

        try {
            axios.post("http://127.0.0.1:8000/api/v1/feedback/", feedbackFormData)
            .then((response)=>{
                setFormData({
                    'full_name':'',
                        'email':'',
                        'subject':'',
                        'message':'',
                        'status':'success',
                })
            })            
        } catch (error) {
            console.log(error);
            setFormData({'status':'error'})            
        }
    };

    return ( 
        <section id="contact" className="section parallax">
            <div className="overlay"></div>
            <div className="container">
                    <div className="row">
                
                        <div className="title-box text-center white">
                            <h2 className="title">Contact</h2>
                        </div>
                    </div>
                    <div className="col-md-8 col-md-offset-2 contact-form">
                            <div className="contact-info text-center">
                            <p><i className="fa fa-phone"></i>   123 456</p>
                            <p><i className="fa fa-place"></i>   Silhouette Silk Plaza, 4th Floor </p>
                            {formData.status === 'sucsess' && <p>Message Sent Successfully</p>}
                            {formData.status === 'error' && <p>Oops! Something went wrong!</p>}
                            </div>                            
                                <div className="row">
                                    <div className="col-md-4">
                                        <input name='full_name' required value={formData.full_name} autoComplete='given-name' onChange={handleChange} className="form-control" id="name" placeholder="Full Name" type="text" />
                                    </div>
                                    <div className="col-md-4">
                                        <input name='email' required value={formData.email} autoComplete='off' onChange={handleChange} className="form-control" id="email" placeholder="Your Email" type="email" />
                                    </div>
                                    <div className="col-md-4">
                                        <input name='subject' required value={formData.subject} onChange={handleChange} className="form-control" id="subject" placeholder="Subject" type="text" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name='message' required value={formData.message} onChange={handleChange} className="form-control" id="message" rows="7" placeholder="Your Message"></textarea>
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <button onClick={sendEmail} type="submit" className="btn btn-green">SEND MESSAGE</button>
                                    </div>
                                </div>
                    </div>
                    
            </div>
        </section>
     );
}
 
export default Contact;