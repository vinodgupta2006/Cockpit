import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            gender: '',
            locations: '',
            list: [],
            // list: [{ id: 101, name: 'Agile Cocpit', phone: 9098987678, email: 'test@agile.com', gender: 'Male', locations: 'Gurgaon' },],
        }
    }

    setEditName = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    setEditPhone = (e) => {
        this.setState({
            phone: e.target.value,
        });
    }

    setEditEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    setEditGender = (e) => {
        this.setState({
            gender: e.target.value,
        });
    }

    setEditLocation = (e) => {
        this.setState({
            location: e.target.value,
        });
    }

    updateUser = () => {
        const { list, id, name, phone, email, gender, location, } = this.state;
        const listData = list[0]
        
    }

    render() {
        const { list, name, phone, email, gender, location } = this.state
        const listData = list[0]

        return (
            <div>
                <h2 align="center">Edit User</h2>
                <div className="addUserForm">
                    <form>
                        Name:<br />
                        <input type="text" name="name" value={listData.name} onChange={this.setEditName} /><br />
                        Phone Number:<br />
                        <input type="number" name="phone" value={listData.phone} onChange={this.setEditPhone} /><br />
                        Email Id:<br />
                        <input type="text" name="email" value={listData.email} onChange={this.setEditEmail} /><br />
                        Gender:<br />
                        <select name="gender" onChange={this.setEditGender} value={listData.gender}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select><br />
                        Locations:<br />
                        <input type="checkbox" name="banglore" value="banglore" onChange={this.setEditLocation} /> Banglore<br />
                        <input type="checkbox" name="mumbai" value="mumbai" onChange={this.setEditLocation} /> Mumbai<br />
                        <input type="checkbox" name="delhi" value="delhi" onChange={this.setEditLocation} /> Delhi<br />
                        <br />
                        <input type="button" value="Update" onClick={this.updateUser} />

                    </form>
                </div>
            </div>
        );
    }
}
export default EditUser;