import React,{useContext} from 'react';
import context from '../Cotntext/context';
const Books = () => {
    let [ {data}] =useContext(context);

    return ( 
        <div className='books'>
            {
                data&&data?.items.map( (book)=>{
                    return(
                        <img src={book?.volumeInfo.imageLinks.smallThumbnail} alt="book" key={book.id} />
                    );
                    
                } )
            }
        </div>
     );
}
 
export default Books;