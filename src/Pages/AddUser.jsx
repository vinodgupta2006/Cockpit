import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            counter: 1,
            name: '',
            phone: '',
            email: '',
            gender: '',
            locations: '',
            errorMessage: '',
            list: [],
            // list: [{ id: 101, name: 'Agile Cocpit', phone: 9098987678, email: 'test@asd.com', gender: 'male', locations: 'Gurgaon' },],
        }
    }

    setName = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    setPhone = (e) => {
        this.setState({
            phone: e.target.value,
        });
    }

    setEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    setGender = (e) => {
        this.setState({
            gender: e.target.value,
        });
    }

    setLocation = (e) => {
        this.setState({
            location: e.target.value,
        });
    }

    addUser = () => {
        const { list, id, name, phone, email, gender, location, } = this.state;
        if (!name.length) {
            this.setState({
                errorMessage: 'Name is required field',
            });
            return;
        }
        if (!gender.length) {
            this.setState({
                errorMessage: 'Gender is required field',
            });
            return;
        }
        this.setState({
            counter: this.state.counter + 1,
        });
        const {  counter } = this.state;

        list.push({ id: counter, name: name, phone: phone, email: email, gender: gender, locations: location })
        this.setState({
            list,
        });
    }

    render() {
        const { list, name, phone, email, gender, location, errorMessage } = this.state
        //console.log(list)
        
        return (
            <div>
                <h2 align="center">Add User</h2>
                <div className="addUserForm">
                    <span className="erroMsg">{errorMessage}</span>
                    <form>
                        Name:<br />
                        <input type="text" name="name" onChange={this.setName} /><br />
                        Phone Number:<br />
                        <input type="number" name="phone" onChange={this.setPhone} /><br />
                        Email Id:<br />
                        <input type="text" name="email" onChange={this.setEmail} /><br />
                        Gender:<br />
                        <select name="gender" onChange={this.setGender}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select><br />
                        Locations:<br />
                        <input type="checkbox" name="banglore" value="banglore" onChange={this.setLocation} /> Banglore<br />
                        <input type="checkbox" name="mumbai" value="mumbai" onChange={this.setLocation} /> Mumbai<br />
                        <input type="checkbox" name="delhi" value="delhi" onChange={this.setLocation} /> Delhi<br />
                        <br /><br />
                        <input type="button" value="Add" onClick={this.addUser} />
                                   
                    </form>
                </div>
            </div>
        );
    }
}
export default AddUser;