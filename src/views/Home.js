import React, {useState} from 'react'
import BeerCard from "../components/elements/BeerCard";
import { useBeers } from "../components/providers/BeerProvider";
import { createUseStyles } from 'react-jss';
import Button from "../components/elements/Button";

const useStyles = createUseStyles({
    home: {
        textAlign: 'center',
    },
    beers: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleButton: {
        maxWidth: 300,
        margin: '0 auto',
    },
});

export default function Home() {
    const classes = useStyles();
    const {beers} = useBeers();
    const [filterByBrewDate, setFilterByBrewDate] = useState(false);
    const displayBeers = filterByBrewDate ? beers.filter(b => b.brewYear <= 2010) : beers;
    return (
        <div className={classes.home}>
            <h2>Hold my beer</h2>
            <Button className={classes.toggleButton} onClick={() => setFilterByBrewDate(!filterByBrewDate)}>
                {filterByBrewDate ? 'SHOW ALL' : 'SHOW BREWED BEFORE 2010'}
            </Button>
            <div className={classes.beers}>
                {displayBeers.map(b => <BeerCard key={`beer-${b.id}`} beer={b} />)}
            </div>
        </div>
    );
}