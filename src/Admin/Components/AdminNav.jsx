import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../../Context/context';

export default function AdminNav() {

  const { state, disatch } = useContext(GlobalContext)

  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand className='text-light' href="#home">
            <h6>Admin Panel</h6>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light mx-3'>
            <h6 className='m-0'>{state.user.username}</h6>
          </Navbar.Text>
              <Button className='btn btn-secondary'>
                  Logout
              </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
