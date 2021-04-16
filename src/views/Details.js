import React from 'react'
import { useBeers } from '../components/providers/BeerProvider';
import { useParams, useHistory } from 'react-router-dom';
import BeerDetails from '../components/elements/BeerDetails';
import Button from '../components/elements/Button';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    details: {
        width: '80%',
        maxWidth: 600,
        margin: '0 auto',
    },
});

export default function Details() {
    const { id } = useParams();
    const history = useHistory();
    const {beers} = useBeers();
    const classes = useStyles();

    const beer = beers.find(b => b.id === Number(id))
    return (
        <div className={classes.details}>
            {beer ? <BeerDetails beer={beer} /> : <h2>Beer not found!</h2>}
            <Button onClick={() => history.goBack()}>Back</Button>
        </div>
    );
}