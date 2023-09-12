import React, { useMemo } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const hadleSearch = (e) =>{
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  const filteredHeroes = useMemo(() => getHeroesByName(q),[q]);

  return (
    <div>
        <h1>Search Screen</h1>
        <hr />

        <div className='row'>
            <div className='col-5'>
                <h4>Search Form</h4>
                <hr />

                <form onSubmit={hadleSearch}>
                  <input
                    type="text"
                    placeholder="Find your hero"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ handleInputChange }
                  />
                  <button
                    type='submit'
                    className='btn m-1 btn-block btn-outline-primary'
                  >
                    Search...
                  </button>
                </form>

            </div>
            <div className='col-7'>
               <h4>Results</h4>
               <hr />

              {
                (q === '')
                && 
                <div className='alert alert-info'>
                  Search a hero
                </div>
              }

              {
                (q !== '' && filteredHeroes.length === 0)
                && 
                <div className='alert alert-danger'>
                  There is no a hero whit { q }
                </div>
              }

               {
                filteredHeroes.map(hero =>(
                  <HeroCard
                    key={hero.id}
                    {...hero}
                  />
                ))
               }
            </div>
        </div>
    </div>
  )
}
