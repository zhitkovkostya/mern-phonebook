import React, { Component } from 'react';

class EditContactForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onCityNameChange = this.onCityNameChange.bind(this);

        this.state = {
            ...props.contact,
            cityName: '',
        }
    }

    componentWillMount(props) {
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

    onCityNameChange(event) {
        this.setState({cityName: event.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        alert(1);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label htmlFor={'lastNameInput_' + this.state._id}>Last Name</label>
                    <input type='text' className='form-control' defaultValue={this.state.lastName} />
                </div>
                <div className='form-group'>
                    <label htmlFor={'firstNameInput_' + this.state._id}>First Name</label>
                    <input type='text' className='form-control' defaultValue={this.state.firstName} />
                </div>
                <div className='form-group'>
                    <label htmlFor={'phoneNumberInput_' + this.state._id}>Phone Number</label>
                    <input type='text' className='form-control' defaultValue={this.state.phoneNumber} />
                </div>
                <div className='form-group'>
                    <label htmlFor={'emailInput_' + this.state._id}>Email</label>
                    <input type='text' className='form-control' defaultValue={this.state.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor={'cityInput_' + this.state._id}>City</label>
                    <input type='text' className='form-control' value={this.state.cityName} onChange={this.onCityNameChange} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
};

export default EditContactForm;