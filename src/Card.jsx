import profilePic from './assets/react.svg'

function Card() {
    return(
     <div className="card">

        <img className='card-image' src= {profilePic} alt='profile picture'>
        </img>
        <h2> Bro code </h2>
        <p> i make youtube and play Video</p>
     </div>
    ); 
  
}
    
export default Card 