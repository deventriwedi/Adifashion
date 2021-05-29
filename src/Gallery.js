import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./gallery.css";
import Data from "./Data";
import MenuItems from './MenuItems';
import CatItems from './CatItems';

const Gallery = () => {
        const CatItem= [...new Set (Data.map((CurrELem) => CurrELem.Category)),'all']
        
        
    const [items, setItems] = useState(Data);
    const [CategoryItems, SetCatItems]= useState(CatItem);
    const filterItem = (categItem) => {
console.log(categItem);
        if(categItem==='all'){
            setItems(Data);
            return;
        }

        const updatedItems = Data.filter((curElem) => {
           

            return curElem.Category === categItem;
        });

        

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Welcome To Adi's Fashion</h1>
            <hr />        
            <CatItems filterItem={filterItem} CatItems={CategoryItems} />
            
            

            {/* my main items section  */}
            <MenuItems items={items}/>
        </>
    )
}

export default Gallery;