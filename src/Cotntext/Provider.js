import context from "./context";

const Provider = ( {children} ) => {
    return ( 
        <div>
            <context.Provider  value={""}>
                {children}
            </context.Provider>
        </div>
     );
}
 
export default Provider;