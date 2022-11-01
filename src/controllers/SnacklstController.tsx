import React from 'react';
import { useState } from 'react';

import { Snacklst }  from '../domains/entities/Snacklst.type';
import { Uuid, GetNewUuid } from '../utils/uuid';


function SnacklstController(){
    const [snacklst, setSnacklst] = useState<Snacklst[]>([])
    
       function addItem(){        
        setSnacklst([...snacklst, {
            id: GetNewUuid(), 
            title: 'New Item', 
            votes: 0, 
            comments: []}]);        
        }

        function deleteItem(id: Uuid){
            setSnacklst(snacklst.filter(item => item.id !== id));
        }
    
    console.log(snacklst);

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <button onClick={() =>deleteItem(snacklst[0].id as Uuid)}>Delete Item</button>
        </div>
    );
}

export default SnacklstController;
