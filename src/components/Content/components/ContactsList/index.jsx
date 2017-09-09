import React, { Component } from 'react';
import EditContactForm from './components/EditContactForm';

class ContactsList extends Component {
    constructor() {
        super();

        this.fetchContacts = this.fetchContacts.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);

        this.state = {
            contacts: [],
        };
    }

    componentWillMount() {
        this.fetchContacts();
    }

    fetchContacts() {
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

    handleDeleteClick(contactId) {
        fetch('/api/contacts/', {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: contactId,
            }),
        })
        .then(() => {
            this.fetchContacts();
        });
    }

    render() {
        let contactsList;

        if (this.state.contacts.length > 0) {
            contactsList = this.state.contacts.map(contact => {
                return (
                    <div className='card mb-3' key={contact._id}>
                        <header className='card-header' role='tab' id={'contactHeading_' + contact._id}>
                            { contact.firstName } { contact.lastName }
                            <div className='btn-group float-right'>
                                <button className='btn btn-sm btn-outline-primary' data-toggle='collapse' data-target={'#contactEditForm_' + contact._id} href={'#card_' + contact._id} aria-expanded='true' aria-controls='collapseOne'>
                                    <span className='oi oi-pencil'></span>
                                </button>
                                <button className='btn btn-sm btn-outline-danger' onClick={() => this.handleDeleteClick(contact._id)}>
                                    <span className='oi oi-trash'></span>
                                </button>
                            </div>
                        </header>
                        <main className='card-body'>
                            <span className='card-text'>{ contact.phoneNumber }</span>
                            <div id={'contactEditForm_' + contact._id} className='collapse' role='tabpanel' aria-labelledby={'contactHeading_' + contact._id}>
                                <hr />
                                <EditContactForm method='put' contact={contact} />
                            </div>
                        </main>
                    </div>
                );
            });
        } else {
            contactsList = (
                <div className='card text-center'>
                    <div className='card-body'>
                        <div className='card-text'>No contacts available</div>
                    </div>
                </div>
            )
        }
        return (
            <section className='accordion' role='tablist'>
                { contactsList }
            </section>
        );
    }
}

export default ContactsList;