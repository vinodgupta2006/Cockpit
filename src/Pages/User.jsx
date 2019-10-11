import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
            location: '',
            errorMessage: '',
            isAdd: false,
            editList: [],

            addModelShow: false,
            editModelShow: false,
            editId: -1,
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
        const { list, name, phone, email, gender, location } = this.state;
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

        list.push({ id: counter, name: name, phone: phone, email: email, gender: gender, location: location })
        this.setState({
            addModelShow: false,
            list,
            name: '',
            phone: '',
            email: '',
            gender: '',
            location: '',
        });
    }
        
    // When the user clicks the button, open the modal 
    addUsersModelShow = () =>{
        this.setState({
            addModelShow: true,
        });
    }

    addModelClose = () =>{
        this.setState({
            addModelShow: false,
        })
    }

// edit form code start here
    setEditName = (e) => {
        const { editList } = this.state;
        editList[0].name = e.target.value
        this.setState({
            ...editList,
        });
    }

    setEditPhone = (e) => {
        const { editList } = this.state;
        editList[0].phone = e.target.value
        this.setState({
            ...editList,
        });
    }

    setEditEmail = (e) => {
        const { editList } = this.state;
        editList[0].email = e.target.value
        this.setState({
            ...editList,
        });
    }

    setEditGender = (e) => {
        const { editList } = this.state;
        editList[0].gender = e.target.value
        this.setState({
            ...editList,
        });
    }

    setEditLocation = (e) => {
        const { editList } = this.state;
        editList[0].location = e.target.value
        this.setState({
            ...editList,
        });
    }

    editUserForm = (id) =>{
        const { list } = this.state;
        const filteredList = list.filter((item) => item.id === id);
        this.setState({
            editModelShow: true,
            editList: filteredList,
            editId: id,
        });
    }

    editModelClose = () =>{
        this.setState({
            editModelShow: false,
        });
    }

    updateUser = (id) =>{
        const { list, editList } = this.state
        const objIndex = list.findIndex((obj => obj.id === id));
        list[objIndex] = editList[0];
        this.setState({
            editModelShow: false,
            list,
        });
    }

    render() {
        const { list, errorMessage, editList, editModelShow, addModelShow, editId } = this.state
        const listData = editList[0];
        const userCount = Object.keys(list).length;
        let finalListItems = list.map((listItems) =>
            <tr>
                <td>{listItems.name}</td>
                <td>{listItems.phone}</td>
                <td>{listItems.email}</td>
                <td>{listItems.gender}</td>
                <td>{listItems.location}</td>
                <td><Button variant="primary" onClick={() => this.editUserForm(listItems.id)}>Edit</Button></td>
                <td><Button variant="danger" onClick={() => this.deleteUsers(listItems.id)}>Delete</Button></td>
            </tr>
        );
        
        return (
            <>
                <h2 align="center">User Info</h2>
                <div className="addBtn">
                    <span className="count">Count: {userCount}</span>
                    <span><Button variant="primary" onClick={this.addUsersModelShow}>Add</Button></span>
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
                <Modal show={addModelShow} onHide={this.addModelClose} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="addUserForm">
                        <span className="erroMsg">{errorMessage}</span><br />
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
                        {/* <input type="checkbox" name="banglore" value="banglore" onChange={this.setLocation} /> Banglore<br />
                        <input type="checkbox" name="mumbai" value="mumbai" onChange={this.setLocation} /> Mumbai<br />
                        <input type="checkbox" name="delhi" value="delhi" onChange={this.setLocation} /> Delhi<br /> */}
                        <input type="text" name="locaton" onChange={this.setLocation} /><br /><br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.addModelClose}>Cancel</Button>
                        <Button variant="primary" onClick={this.addUser}>Add</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={editModelShow} onHide={this.editModelClose} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="addUserForm">
                        <span className="erroMsg">{errorMessage}</span><br />
                        Name:<br />
                        <input type="text" name="name" value={listData && listData.name} onChange={this.setEditName} /><br />
                        Phone Number:<br />
                        <input type="number" name="phone" value={listData && listData.phone} onChange={this.setEditPhone} /><br />
                        Email Id:<br />
                        <input type="text" name="email" value={listData && listData.email} onChange={this.setEditEmail} /><br />
                        Gender:<br />
                        <select name="gender" onChange={this.setEditGender} value={listData && listData.gender}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select><br />
                        Locations:<br />
                        {/* <input type="checkbox" name="banglore" value="banglore" onChange={this.setEditLocation} /> Banglore<br />
                        <input type="checkbox" name="mumbai" value="mumbai" onChange={this.setEditLocation} /> Mumbai<br />
                        <input type="checkbox" name="delhi" value="delhi" onChange={this.setEditLocation} /> Delhi<br /> */}
                        <input type="text" name="locaton" value={listData && listData.location} onChange={this.setEditLocation} /><br /><br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.editModelClose}>Cancel</Button>
                        <Button variant="primary" onClick={() => this.updateUser(editId)}>Update</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default User;