import context from "./context";
import React, { useState } from "react";
const Provider = ( {children} ) => {
    let [data,setData] = useState(null)
    let [search,setSearch] = useState("");
    let [query,setQuery] = useState(null);
    return ( 
        <div>
            <context.Provider  value={[
                {data,setData},
                {search,setSearch},
                {query,setQuery}
                ]}>
                {children}
            </context.Provider>
        </div>
     );
}
 
export default Provider;