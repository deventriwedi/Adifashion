import react from 'react';

const CatItems=({filterItem,CatItems})=>{
    
return   <>
            
                <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                {
                    CatItems.map((CurrELem,index)=>{
                        return  <button className="btn btn-warning" key={index} onClick={() => filterItem(CurrELem)}>{CurrELem}</button>

                    })
                }
                    
                   
                    
                    
                </div>
            </div>


    </>


}

export default CatItems;