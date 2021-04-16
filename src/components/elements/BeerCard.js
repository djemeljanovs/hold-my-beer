import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { createUseStyles } from 'react-jss';
import Button from "./Button";

const useStyles = createUseStyles({
    card: {
        position: 'relative',
        padding: 10,
        textAlign: 'left',
        borderRadius: 5,
        border: '#AAAAAA 1px solid',
        maxWidth: 300,
        height: 400,
        background: '#FFFFFF',
        margin: 10,
        overflow: 'hidden',
    },
    tagline: {
        textAlign: 'center',
        padding: 10,
        position: 'absolute',
        background: "red",
        color: 'white',
        right: 0,
        left: 0,
        top: 0,
    },
    title: {
        fontSize: 22,
        padding: 0,
        margin: 0,
    },
    image: {
        padding: 5,
        marginBottom: 10,
        height: 200,
        width: '100%',
        backgroundImage: ({ img }) => `url(${img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    cardButton: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
    },
});

function truncate(str, n = 150) {
    return str.length > n ? `${str.substr(0, n - 1)}...` : str
}

export default function BeerCard({beer}) {
    const [displayTagline, setDisplayTagline] = useState(false);
    const classes = useStyles({img: beer.image_url});
    return (
        <div className={classes.card} onMouseOver={() => setDisplayTagline(true)} onMouseOut={() => setDisplayTagline(false)}>
            {displayTagline && <div className={classes.tagline}>{beer.tagline}</div>}
            <div className={classes.image} />
            <div className={classes.title}>{beer.name}</div>
            <p>{truncate(beer.description)}</p>
            <Link to={`/${beer.id}`}><Button className={classes.cardButton}>Learn more</Button></Link>
        </div>
    )
}