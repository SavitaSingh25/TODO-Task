import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { addTodo, deleteTodo } from '../actions/todoAction'
import { Link } from 'react-router-dom';

const TodoList = () => {

    const[data, setData] =useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch()

    return (
        <>
        <Link to='/products'> Show Products </Link>
          <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                          <h2>Add ToDo</h2>

                          <div>
                              <input type="text" placeholder="Add Items" 
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                              />
                             {/*  <i className="fa fa-plus add-btn"></i>*/}
                              <Button variant="info" size="sm" className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(data),
                                setData('')) } > </Button> 
                          </div>

                          <div>
                                {
                                  list.map((elem) => {
                                    return (
                                    <div key={elem.id}> 
                                      <p>{elem.data} 
                                      <Button variant="" size="sm" className="far fa-trash add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))} > </Button> 
                                      </p>
                                    </div>
                                  )
                                  })
                                }              
                          </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}></Col>
          </Row>
        </>
    )
}

export default TodoList