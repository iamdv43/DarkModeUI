import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:"DSA", id: 1},
        {title:"Adv Web", id: 2},
        {title:"Adv Cloud", id: 3}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;