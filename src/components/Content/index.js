import React, { Component } from 'react';
import ContactsList from './components/ContactsList';

const Content = props => (
    <section className='container'>
        <ContactsList />
    </section>
);

export default Content;