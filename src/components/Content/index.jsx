import React from 'react';
import ContactsList from './components/ContactsList';

const Content = props => (
    <section>
        <div className='jumbotron'>
            <div className='container'>
                <h1 className='mt-3'>Contacts</h1>
            </div>
        </div>
        <div className='container'>
            <ContactsList />
        </div>
    </section>
    
);

export default Content;