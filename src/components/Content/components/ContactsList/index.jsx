import React, { Component } from 'react';

class ContactsList extends Component {
    constructor() {
        super();

        this.state = {
            contacts: [],
        };
    }

    componentWillMount() {
        fetch('/api/contacts', {
            method: 'get',
        })
        .then(contactsData => {
            return contactsData.json();
        })
        .then(contacts => {
            this.setState({
                contacts: contacts,
            });
        });
    }

    render() {
        const contactsList = this.state.contacts.map(contact => {
            return (
                <div className='card' key={contact._id}>
                    <header className='card-header'>
                        <a data-toggle='collapse' href={'#' + contact._id} className=''>
                            { contact.firstName } { contact.lastName }
                        </a>
                    </header>
                    <main id={contact._id} class='collapse' role='tabpanel'>
                        <div className='card-body'>
                            { contact.phoneNumber }
                        </div>
                    </main>
                </div>
            );
        });

        return (
            <section className='accrordion'>
                { contactsList }
            </section>
        );
    }
}

export default ContactsList;