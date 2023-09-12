import React, { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {

  const navigate = useNavigate();
  
  const {heroId} = useParams();

  const hero = useMemo(() => getHeroById(heroId),[heroId]);

  useEffect(() => {
    if (!hero) {
      navigate("/");
    }
  });

  const {
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
  } = hero

  const hadleReturn = () =>{
    if(publisher === 'Marvel Comics'){
      navigate("/marvel");
    }else{
      navigate("/dc");
    }
    
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={`../assets/${heroId}.jpg`}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b> Alter ego: </b> {alter_ego}</li>
          <li className='list-group-item'><b> Publisher: </b> {publisher}</li>
          <li className='list-group-item'><b> First appearance: </b> {first_appearance}</li>
        </ul>

        <h5>characters</h5>
        <p>{characters}</p>

        <button
        className='btn btn-outline-info'
        onClick={hadleReturn}>
          Return
        </button>

      </div>
    </div>
  )
}

export default HeroScreen;