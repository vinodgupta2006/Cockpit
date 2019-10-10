import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddUser from './AddUser'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            id: 0,
            counter: 1,
            name: '',
            phone: '',
            email: '',
            gender: '',
            locations: '',
            errorMessage: '',
            isAdd: false,
            showModel: false,
        }
    }

    deleteUsers = (id) => {
        const { list } = this.state;
        const filteredList = list.filter((item) => item.id !== id);
        this.setState({
            list: filteredList,
        });
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
        const { counter } = this.state;

        list.push({ id: counter, name: name, phone: phone, email: email, gender: gender, locations: location })
        this.setState({
            isAdd: false,
            list,
        });
    }
        
    // When the user clicks the button, open the modal 
    addUsersModel = () =>{
        this.setState({
            isAdd: true,
        });
    }

    editUsers = () =>{

    }

    render() {
        const { list, name, phone, email, gender, location, errorMessage, isAdd, showModel } = this.state
        const userCount = Object.keys(list).length;
        let finalListItems = list.map((listItems) =>
            <tr>
                <td>{listItems.name}</td>
                <td>{listItems.phone}</td>
                <td>{listItems.email}</td>
                <td>{listItems.gender}</td>
                <td>{listItems.locations}</td>
                <td><Button variant="primary" onClick={() => this.editUsers(listItems.id)}>Edit</Button></td>
                <td><Button variant="danger" onClick={() => this.deleteUsers(listItems.id)}>Delete</Button></td>
            </tr>
        );
        
        return (
            <div>
                {(!isAdd) ?
                    <div>
                        <h2 align="center">User Info</h2>
                        <div className="addBtn">
                            <span className="count">Count: {userCount}</span>
                            <span><Button variant="primary" onClick={this.addUsersModel}>Add</Button></span>
                        </div>
                        <div>
                            {finalListItems.length ? <Table responsive striped bordered hover>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Locations</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {finalListItems}
                            </Table>
                                : <Table responsive striped bordered hover><tbody><tr><td className="tdCenter">No data found</td></tr></tbody></Table>
                            }
                        </div>
                    </div> :

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
                                <input type="text" name="locaton" onChange={this.setLocation} /><br /><br />
                                <input type="button" value="Add" onClick={this.addUser} />

                            </form>
                        </div>
                    </div>}
            </div>
        );
    }
}
export default User;