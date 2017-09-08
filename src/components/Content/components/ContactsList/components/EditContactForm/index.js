import React, { Component } from 'react';

class EditContactForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            ...props.contact,
            cityName: '',
        }
    }

    componentWillMount(props) {
        if (this.state.city) {
            fetch('/api/cities/' + this.state.city, {method: 'get'})
                .then(cityData => {
                    return cityData.json();
                })
                .then(city => {
                    this.setState({cityName: city.name});
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('/api/contacts', {
            method: this.props.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor={'lastNameInput_' + this.state._id}>Last Name</label>
                    <input type='text' className='form-control' name='lastName' value={this.state.lastName} onChange={this.handleInputChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor={'firstNameInput_' + this.state._id}>First Name</label>
                    <input type='text' className='form-control' name='firstName' value={this.state.firstName} onChange={this.handleInputChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor={'phoneNumberInput_' + this.state._id}>Phone Number</label>
                    <input type='text' className='form-control' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleInputChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor={'emailInput_' + this.state._id}>Email</label>
                    <input type='email' className='form-control' name='email' value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor={'cityInput_' + this.state._id}>City</label>
                    <input type='text' className='form-control' name='cityName' value={this.state.cityName} onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
};

export default EditContactForm;