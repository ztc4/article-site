function Container({children}) {
    return ( 
        <div className="px-4 grid gap-4  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row p-4 w-screen h-fit">
            {children}
            

        </div>
     );
}

export default Container;