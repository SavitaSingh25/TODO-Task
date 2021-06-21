import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'

const Pagination = ({showPerPage, onPaginationChange, total}) => {
    const[counter, setCounter] = useState(1)
    const[numberofButtons, setNumberofButtons] = useState(
        Math.ceil(total / showPerPage)
    )


    useEffect(()=>{
        const value = showPerPage * counter
        onPaginationChange(value - showPerPage, value)
    }, [counter])

    const onButtonClick = (type) => {
        if(type === 'prev') {
            if(counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        } else if(type === 'next') { 
            if(Math.ceil(total / showPerPage) === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)
            }
        }
    }

    return (
        <>
         <div className='d-flex justify-content-center'>
         
{/* 
         <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link"  onClick={()=> onButtonClick('prev')}>Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" onClick={()=> onButtonClick('next')}>Next</a></li>
            </ul>
            </nav>
 */}
                    
 
            <Button className="btn btn-primary"
             onClick={()=> onButtonClick('prev')}
            >Privious</Button>
            <Button className="btn btn-primary" 
            onClick={()=> onButtonClick('next')}
            >Next</Button>
           
           </div>
        </>
    )
}

export default Pagination
