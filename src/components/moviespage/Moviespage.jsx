import Card from 'react-bootstrap/Card';
import './moviespage.css'
import Form from 'react-bootstrap/Form';
import MOVIES from './moviedb.js'
import { useState } from 'react'

function MoviesPage () {
  const [movieName,  setmovieName] = useState("");
  const  [movie, setMovie] = useState(MOVIES); 


  function handlemovieNameChange (e)  {
    const movieName = e.target.value;
    setmovieName(movieName)
    

    const filtered = MOVIES.filter((film) =>
      film.title.toLowerCase().includes(movieName.toLowerCase())
    );
    setMovie(filtered);
  }
   
    return (
      <div className='containar'>
        
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control value={movieName} 
        onChange={handlemovieNameChange}
        type="text" placeholder="Enter a movie" />
      </Form.Group>
    </Form>
    
      <div className='box'>
      {
      movie.map((item,index)=> <Card className="card" key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.posterUrl} />
      
      <Card.Body>
      <hr/>
        <Card.Title>{item.title}</Card.Title>
      </Card.Body>
    </Card>)
      }
      </div>
    </div>
    )
  }

export default MoviesPage