import React, { Component } from 'react';
import EditContactForm from './components/EditContactForm';

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
                    <header className='card-header' role='tab' id={'contactHeading_' + contact._id}>
                        <a data-toggle='collapse' data-target={'#contactEditForm_' + contact._id} href={'#card_' + contact._id} aria-expanded='true' aria-controls='collapseOne'>
                            { contact.firstName } { contact.lastName }
                        </a>
                        <span className='badge badge-secondary float-right'>{ contact.phoneNumber }</span>
                    </header>
                    <main id={'contactEditForm_' + contact._id} className='collapse show' role='tabpanel' aria-labelledby={'contactHeading_' + contact._id}>
                        <div className='card-body'>
                            <EditContactForm contact={contact} />
                        </div>
                    </main>
                </div>
            );
        });

        return (
            <section className='accrordion' role='tablist'>
                { contactsList }
            </section>
        );
    }
}

export default ContactsList;