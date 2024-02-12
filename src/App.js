import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav, Modal } from 'react-bootstrap';
import { BsPeopleFill, BsTable } from 'react-icons/bs';
import Registrationform from './Registrationform';
import Usertable from './Usertable';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, { ...user }]);
  };

  const handleEditUser = (index) => {
    setEditingIndex(index);
    setEditedUser(users[index]);
    handleShowModal();
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    setEditingIndex(null);
    setEditedUser(null);
  };

  const handleUpdateUser = (user) => {

    const updatedUsers = [...users];
    updatedUsers[editingIndex] = { ...user };
    setUsers(updatedUsers);
    setEditingIndex(null);
    setEditedUser(null);
    handleCloseModal();
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingIndex(null);
    setEditedUser(null);
  };

  return (
    
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <BsPeopleFill className="mr-2" />
            User Registration
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#" onClick={handleShowModal}>
                <BsPeopleFill className="mr-1" />
                Edit Users
              </Nav.Link>
              <Nav.Link href="#">
                <BsTable className="mr-1" />
                User Table
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Registration Form</h1>
          <Registrationform
            onAddUser={handleAddUser}
          />
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registrationform
            onAddUser={editingIndex !== null ? handleUpdateUser : handleAddUser}
            editedUser={editedUser}
          />
        </Modal.Body>
      </Modal>
      <div className="row mt-4">
        <div className="col-md-12">
          <hr className="my-4" />
          <h1 className="text-center mb-4">User Table</h1>
          <Usertable users={users} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />
        </div>
      </div>
     <footer className="bg-dark text-light text-center py-2">
     <p>&copy; 2024 Project Management</p>
   </footer>
 </>
  );
};

export default App;
