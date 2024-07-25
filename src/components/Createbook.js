import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import estilos from '../css/estilos.module.css'
import Header from './Header'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";


const Createbook = () => {

    const [autores, setAutores] = useState(['']);

    const handleAddAuthor = () => {
        setAutores([...autores, '']);
    };

    const handleRemoveAuthor = (index) => {
        const nuevosAutores = [...autores];
        nuevosAutores.splice(index, 1);
        setAutores(nuevosAutores);
    };

    const handleAuthorChange = (index, event) => {
        const nuevosAutores = autores.slice();
        nuevosAutores[index] = event.target.value;
        setAutores(nuevosAutores);
    };


    return (

        <div >
            <Header />
            <div className={estilos.caja}>
                <Container>
                    <Row className="justify-content-lg-center">
                        <Col>
                            <Form className={estilos.contenedor}>
                                <h3>Nuevo material bibliografico</h3>
                                <Row>

                                    <Form.Group className="mb-3" controlId="" as={Col}>
                                        <Form.Label>Tipo de material</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option value="libro">Libro</option>
                                            <option value="revista">Revista</option>
                                            <option value="articulo">Articulo</option>
                                            <option value="video">Video</option>
                                            <option value="audio">Audio</option>
                                        </Form.Select>

                                    </Form.Group>
                                    <FormGroup className="mb-3" controlId="" as={Col}>
                                        <Form.Label>Tipografico</Form.Label>
                                        <Form.Control type="text" placeholder="Tipografico" />
                                    </FormGroup>

                                </Row>
                                <FormGroup className="mb-3" controlId="">
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control type="text" placeholder="Titulo" />
                                </FormGroup>

                                {autores.map((autor, index) => (
                                    <FormGroup key={index} className="mb-3" controlId={`formAuthor${index}`}>
                                        <Row>
                                            <Form.Label>Autor {index + 1}</Form.Label>
                                            <Col className="mb-3"  >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Autor"
                                                    value={autor}
                                                    onChange={(e) => handleAuthorChange(index, e)}
                                                />
                                            </Col>
                                            <Col>
                                                {index === autores.length - 1 && (
                                                    <>
                                                        <Button variant="primary" onClick={handleAddAuthor}><AiOutlinePlus /></Button>
                                                        {' '}
                                                        {index > 0 && (
                                                            <Button variant="danger" onClick={() => handleRemoveAuthor(index)}><AiOutlineMinus /></Button>
                                                        )}
                                                    </>
                                                )}
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                ))}

                                <Row>
                                    <FormGroup className="mb-3" controlId="" as={Col}>
                                        <Form.Label>Editorial</Form.Label>
                                        <Form.Control type="text" placeholder="Editorial" />
                                    </FormGroup>
                                    <FormGroup className="mb-3" controlId="" as={Col}>
                                        <Form.Label>ISBN</Form.Label>
                                        <Form.Control type="text" placeholder="ISBN" />
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup className="mb-3" controlId="" as={Col}>
                                        <Form.Label>Paginas</Form.Label>
                                        <Form.Control type="number" />
                                    </FormGroup>
                                    <FormGroup className="mb-3" controlId="" as={Col}>
                                        <Form.Label>Ejemplares</Form.Label>
                                        <Form.Control type="number" />
                                    </FormGroup>
                                </Row>
                                <FormGroup className="mb-3" controlId="">
                                    <Form.Label>Resumen</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </FormGroup>
                                <FormGroup className="mb-3" controlId="">
                                    <Form.Label>Tema</Form.Label>
                                    <Form.Control type="text" placeholder="Tema" />
                                </FormGroup>
                                <div>
                                    <Button type='submit'>Enviar</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default Createbook