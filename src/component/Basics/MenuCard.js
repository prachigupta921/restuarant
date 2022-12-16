import React from 'react'

const MenuCard = ({menuData}) => {
   // console.log(menuData);
    return (
        <>
        <section className="main-card--cointainer">
        {menuData.map((curElem) => {
            return(
                <>
                <div>
                <div className="card-container" key={curElem.id}>
                   <div className="card">
                       <div className="card-body">
                           <span className="card-number card-circle">{curElem.id}</span>
                           <span className="card-author subtle">{curElem.name}</span>
                           <h2 className="card-title">{curElem.name}</h2>
                           <span className="card-description subtle">
                               I love Maggi realy oo yues loren ipsum dolor sit amet consectetur 
                               adipisicing elit.Blanditiis, at consectetur tatam voluptatibus
                               quibusdam iusto. Accuamus quas,solutam eius
                               necessitatibus fugiat in.
                           </span>
                           <div className="card-read">Read</div>
                       </div>
                       <img src={curElem.image} alt="images" className="card-media"/>
                       <span className="card-tag subtle">Order Now</span>
                       </div> 
               </div>
           </div>
           </>
             );
        })}
        </section>
     </>
    );
};

export default MenuCard;