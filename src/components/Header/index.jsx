import React from 'react';
import EditContactForm from '../Content/components/ContactsList/components/EditContactForm';

const Header = props => (
    <header className='navbar navbar-dark bg-dark'>
        <div className='container'>
            <span className='navbar-brand'>PhoneBook</span>
            <button type='button' className='btn btn-primary' data-toggle='modal' data-target='#newContactModal'>Add Contact</button>
            <div className='modal fade' id='newContactModal' tabIndex='-1' role='dialog' aria-labelledby='newContactModalHeading' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='newContactModalHeading'>Add Contact</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <EditContactForm
                                method='post'
                                contact={{
                                    lastName: '',
                                    firstName: '',
                                    phoneNumber: '',
                                    email: '',
                                    city: '',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
  
export default Header;