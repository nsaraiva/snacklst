import { useState } from 'react';

import { Snacklst }  from '../domains/entities/Snacklst.type';
import { GetNewUuid } from '../utils/uuid';


function SnacklstController(){
    const [snacklst, setSnacklst] = useState<Snacklst[]>([])
    
       function addItem(){        
        setSnacklst([...snacklst, {
            id: GetNewUuid(), 
            title: 'New Item', 
            votes: 0, 
            comments: []}]);        
        }
    
    console.log(snacklst);

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}

export default SnacklstController;
