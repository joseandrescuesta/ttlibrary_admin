import React, { useState } from 'react'
import { Button, Container, InputGroup, Modal, Col, Row, Form } from 'react-bootstrap'
import estilos from '../css/estilos.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setDetalle, setLibros } from '../reducers'
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";



const Bookmanager = () => {
    const [verModal, setVerModal] = useState(false);
    const [libroAEliminar, setLibroAEliminar] = useState(null);

    const handleClose = () => setVerModal(false);
    const handleShow = (idlibro) => {
        setLibroAEliminar(idlibro);
        setVerModal(true);
    };

    let disp = useDispatch();
    let datos = useSelector(state => state.bibloAPP.libros);
    console.log(datos);


    function eliminarLibro() {
        const i = datos.findIndex(libro => libro.id === libroAEliminar)
        if (i !== -1) {

            const nuevosDatos = [...datos];
            nuevosDatos.splice(i, 1);
            disp(setLibros(nuevosDatos));
            console.log("Libro eliminado: " + libroAEliminar)
        }
        handleClose();
    }
    const navigate = useNavigate();

    const createBook = () => {
        navigate('/addbook');
    };

    function updateBook(detalle) {
        disp(setDetalle(detalle));
        navigate('/updatebook');
    };

    const lista = datos.map(((book, i) => (
        <tr key={i}>
            <td>{book.tipo}</td>
            <td>{book.topografico}</td>
            <td>{book.titulo}</td>
            <td>{book.autores.join(", ")}</td>
            <td>{book.ejemplares}</td>
            <td>{book.disponibles}</td>
            <td>{book.tema}</td>
            <td><Button variant='warning' onClick={() => updateBook(book)}><AiOutlineEdit /></Button></td>
            <td><Button variant='danger' onClick={() => handleShow(book.id)} ><AiOutlineDelete /></Button></td>
        </tr>
    )))



    return (

        <div className={estilos.caja}>
            <section>
                <div className='container'>

                    <Container fluid>
                        <Form inline >
                            <InputGroup className="mb-3" >
                                <Row >
                                    <Col lg="10">
                                        <Form.Control type="search" placeholder="Buscar material bibliográfico" />
                                    </Col>
                                    <Col lg="2"><Button>Buscar</Button></Col>
                                </Row>
                            </InputGroup>
                        </Form>

                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Topografico</th>
                                    <th>Titulo</th>
                                    <th>Autores</th>
                                    <th>Ejemplares</th>
                                    <th>Disponibles</th>
                                    <th>Tema</th>
                                    <th colSpan="2"><Button variant='success' onClick={createBook}>Añadir</Button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista}
                            </tbody>
                        </table>

                    </Container>

                </div>
            </section>
            <Modal show={verModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de que deseas eliminar este libro?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={eliminarLibro}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Bookmanager