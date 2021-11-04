import React from 'react';
import { Link } from 'react-router-dom';
// import countries from '../countries.json';

export default function CountryDetails({ countries }) {
  //   const { id } = props.match.params;
  //   const country = countries.find((p) => country.id === Number(id));

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries.map((country) => {
        console.log(country);
        return (
          <div className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              to={'/' + country.cca3}
            >
              {country.name.common}
            </Link>
          </div>
        );
      })}
    </div>

    //   <div>
    //     <h1>Country details</h1>
    //     <p>{country.name}</p>
    //     <img src={country.picture} alt="yolo" />
    //     <Link to={`/countries/${country.id + 1}`}>Next country</Link>
    //   </div>
  );
}
