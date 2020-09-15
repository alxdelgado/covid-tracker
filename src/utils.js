import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

// Fancy ES6 one-liner; 
export const sortData = (data) => {
    const sortedData = [...data]; 

    return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1); 

}; 


// Tooptip colors; 
const casesTypeColors = {
    cases: {
        hex: "#CC1034",  
        multiplier: 800
    }, 
    recovered: {
        hex: "#7dd71d",  
        multiplier: 1200
    }, 
    deaths: {
        hex: "#fb4443", 
        multiplier: 2000
    }
};


// Interactive tooltip
export const showDataOnMap = (data, casesType='cases') => (
    data.map(country => (
        <Circle 
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        radius={
            Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
        >
        <Popup>
            PopUp
        </Popup>
        </Circle>

    ))
); 

