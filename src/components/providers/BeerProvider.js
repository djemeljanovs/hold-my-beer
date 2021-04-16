import React, {useEffect, useState} from 'react'

const BeerContext = React.createContext({})

export function useBeers() {
    const context = React.useContext(BeerContext)
    if (!context) {
        throw new Error('useBeers must be used within a BeerProvider')
    }
    return context
}

function getBrewYear(beer) {
    return Number(beer.first_brewed.split('/')[1]);
}

const BeerProvider = ({ children }) => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(r => r.json())
            .then(r => r.map(beer => ({
                ...beer,
                brewYear: getBrewYear(beer),
            })))
            .then(r => setBeers(r));
    }, []);

    return (
        <BeerContext.Provider value={{ beers }}>
            {children}
        </BeerContext.Provider>
    );
}

export default BeerProvider