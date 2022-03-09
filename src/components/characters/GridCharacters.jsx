const GridCharacters = ({characters}) =>{
    return (<section className="cards">
        {characters.map((character) => {
           return( 
               <div className="card">
                   <div className="card-inner">
                       <div className="card-front">
                    <img src={character.img} alt ={character.name}/>
               </div>
               <div className="card-back">
                   <ul>
                       <li><strong>Character name: {character.name}</strong></li>
                       <li><strong>Actor name: {character.portrayed}</strong></li>
                   </ul>
               </div>
               </div>
           </div>
           )
        })}
    </section>)
}

export default GridCharacters