import React ,{useContext}from 'react';
import context from '../Cotntext/context';
import logo from "../Image/Group.png"
import booxHeart from "../Image/bx_bx-book-heart.svg";
import vector from "../Image/Vector.svg";
import vecto1 from "../Image/Vector (1).svg";
import userImg from "../Image/IMG20210528181544.png"
const Nav = () => {
    
    let [{},
        {search,setSearch},
        {query,setQuery}
    ] = useContext(context);

    function handleSearch(e){
        setSearch(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }
    return ( 
        <div className='Nav'>
            <div id="nav-logo">
                <img src={logo}/>
                <span className='span1'>KeazoN
                    <span className='span2'>Books</span>
                </span>
            </div>
            <div id='nav-search'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgba(128, 128, 128, 1)"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

                        <input type="text" placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' onChange={handleSearch} value={search}/>
                    </div>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div id="nav-user">
                <img src={booxHeart}/>
                <img src={vector}/>
                <img src={vecto1}/>
                <img src={userImg} id='user'/>
            </div>
        </div>
     );
}
 
export default Nav;