import React from 'react'
import { createUseStyles } from 'react-jss';
import BrewingTemperature from "./BrewingTemperature";

const useStyles = createUseStyles({
    details: {
        display: 'flex',
        padding: 10,
        textAlign: 'left',
        borderRadius: 5,
        border: '#AAAAAA 1px solid',
        background: '#FFFFFF',
        margin: 10,
        overflow: 'hidden',
    },
    image: {
        padding: 5,
        marginRight: 30,
        height: 400,
        width: '100%',
        backgroundImage: ({ img }) => `url(${img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    ph: {
        borderRadius: 5,
        width: 'fit-content',
        background: 'blue',
        color: 'white',
        padding: 8,
        marginBottom: 15,
    },
    title: {
        fontSize: 22,
        marginBottom: 15,
    },
});

export default function BeerDetails({beer}) {
    const classes = useStyles({img: beer.image_url});
    return <div className={classes.details}>
        <div className={classes.image}/>
        <div className={classes.info}>
            <div className={classes.title}>{beer.name}</div>
            <div className={classes.ph}>pH {beer.ph}</div>
            <b>Food pairing</b>
            <p>{beer.food_pairing.join(", ")}</p>
            <b>Brewing tips</b>
            <p>{beer.brewers_tips}</p>
            <BrewingTemperature title={'Mash temp'} temperature={beer.method.mash_temp} />
            <BrewingTemperature title={'Fermentation'} temperature={beer.method.fermentation} />
            {beer.method.twist && <p>{beer.method.twist}</p>}
        </div>
    </div>
}