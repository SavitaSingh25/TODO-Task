import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import TodoList from './components/TodoList'
import Products from './components/Products'

function App() {
  return (
    <Router>
          <main className='py-3'>
            <Container>
              <Route path='/' component={TodoList} exact />
              <Route path='/products' component={Products} />
            </Container>
          </main>
 </Router>
  );
}

export default App;
