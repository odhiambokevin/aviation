import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import 'antd/dist/antd.min.css';
import {message } from 'antd';

const Contact = () => {      
    const form = useRef();
    const [ formData , setFormData ] = useState({
        fullname:'',
            email:'',
            subject:'',
            message:''
    })

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    
    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then(()=>{
            message.loading({
                content: 'Sending email...',
                className: 'custom-class',
                style: {
                  marginTop: '60vh',
                },duration:3
              }).then(()=>{
                message.success({
                    content: 'Email sent successfully!',
                    className: 'custom-class',
                    style: {
                      marginTop: '60vh',
                      color: '#7EC13F;'
                    },duration:2

              });
           
          },1000);
        setFormData({
            fullname:'',
            email:'',
            subject:'',
            message:''
        })},
         (error) => {
            message.loading({
                content: 'Sending email...',
                className: 'custom-class',
                style: {
                  marginTop: '60vh',
                },duration:3
              }).then(()=>{
                message.error({
                    content: 'Oops! Something went wrong',
                    className: 'custom-class',
                    style: {
                      marginTop: '60vh',
                      color: "black",
                    },duration:2.5
                });
             
            },1);
            setFormData({...formData, [e.target.name]:e.target.value})
        });
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
                            </div>                            
                            <form ref={form} onSubmit={sendEmail} >
                                <div className="row">
                                    <div className="col-md-4">
                                        <input name='fullname' required value={formData.fullname} onChange={handleChange} className="form-control" id="name" placeholder="Full Name" type="text" />
                                    </div>
                                    <div className="col-md-4">
                                        <input name='email' required value={formData.email} onChange={handleChange} className="form-control" id="email" placeholder="Your Email" type="email" />
                                    </div>
                                    <div className="col-md-4">
                                        <input name='subject' required value={formData.subject} onChange={handleChange} className="form-control" id="subject" placeholder="Subject" type="text" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name='message' required value={formData.message} onChange={handleChange} className="form-control" id="message" rows="7" placeholder="Your Message"></textarea>
                                    </div>
                                    <div className="col-md-12 text-right">
                                        <button type="submit" className="btn btn-green" >SEND MESSAGE</button>
                                    </div>
                                    

                                </div>
                            </form>
                    </div>
                    
            </div>
        </section>
     );
}
 
export default Contact;