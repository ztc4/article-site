function Container({children}) {
    return ( 
        <div className="px-4 flex justify-center flex-row flex-wrap gap-4">
            {children}
            

        </div>
     );
}

export default Container;