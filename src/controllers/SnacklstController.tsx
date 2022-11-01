import React from 'react';
import { useState } from 'react';

import { Snacklst, Comment }  from '../domains/entities/Snacklst.type';
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
    
        function addComment(id: Uuid, comment: Comment){
            setSnacklst(snacklst.map(item => {
                if(item.id === id){
                    item.comments.push(comment);
                }
                return item;
            }));
        }
        
    console.log(snacklst);

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <button onClick={() =>deleteItem(snacklst[0].id as Uuid)}>Delete Item</button>
            <button onClick={() =>addComment(snacklst[0].id as Uuid, {id: 'TestId', text: 'Comentário', userId: 'Eu mesmo'})}>Add Comment</button>
        </div>
    );
}

export default SnacklstController;
