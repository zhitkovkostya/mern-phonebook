import React from 'react';
import ContactsList from './components/ContactsList';

const Content = props => (
    <section className='container'>
        <h1 className='mt-3'>Contacts</h1>
        <ContactsList />
    </section>
);

export default Content;