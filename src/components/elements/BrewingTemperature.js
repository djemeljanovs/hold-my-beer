import React from "react";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    tempBox: {
        display: 'flex',
        alignItems: 'center',
    },
    temp: {
        borderRadius: 5,
        width: 'fit-content',
        background: ({value}) => value > 50 ? 'red' : 'yellow',
        color: ({value}) => value > 50 ? 'white' : 'black',
        padding: 8,
        margin: '5px 5px 5px 0px',
    },
});

function formatTemperature(temp) {
    return `${temp.value}° ${temp.unit === 'celsius' ? 'C' : 'F'}`;
}

function Temperature({t}) {
    const classes = useStyles({value: t.temp.value});
    return (
        <div className={classes.tempBox} >
            <div className={classes.temp}>
                {formatTemperature(t.temp)}
            </div>
            {t.duration && <span>for {t.duration} minutes ⏳</span>}
        </div>
    );
}

export default function BrewingTemperature({title, temperature}) {
    if(!temperature) return null;
    console.log(temperature)
    return (
        <div>
            <b>{title}</b>
            <div>
                {Array.isArray(temperature)
                    ? <div>{temperature.map((t, i) => <Temperature key={`temp-${i}`} t={t} />)}</div>
                    : <Temperature t={temperature} />}
            </div>
        </div>
    );
}