import react from 'react';

const CatItems=({filterItem,CatItems})=>{
    
return   <>
            
                <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around width=device-width">
                {
                    CatItems.map((CurrELem,index)=>{
                        return( 
                        <>
                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={index}>
                                

                                    {/* menu items description */}
                                    <div className="col-12 col-md-12 col-lg-8">
                                        <div className="main-title pt-4 pb-3">
                                        <button className="btn btn-warning" key={index} onClick={() => filterItem(CurrELem)}>{CurrELem}</button>

                                        </div>
                                        
                                    </div>
                                </div>
                            
                         
</>
                        )
                    })
                }
                    
                   
                    
                    
                </div>
            </div>


    </>


}

export default CatItems;