import { useState, cloneElement } from 'react';

import { Snacklst, Item, Comment }  from '../../domains/entities/';
import { Uuid, getNewUuid } from '../../utils/';

function SnacklstController({children}: {children: JSX.Element}) {
    const [snacklst, setSnacklst] = useState<Snacklst>({
                id: getNewUuid(),
                userId: getNewUuid(),
                title: 'Teste',
                items: [],
            })
    
    // function newSnacklst(){
    //     setSnacklst({
    //         id: GetNewUuid(),
    //         userId: GetNewUuid(),
    //         title: 'Teste',
    //         items: [],
    //     })
    // }

    function addItem(title: string): void{
        if(!snacklst) return;
        const newItem = {
            id: getNewUuid(), 
            title: 'Novo item', 
            votes: 0, 
            comments: []};

        setSnacklst({...snacklst, items: [newItem]});
    }
       
    // function addItem(): void {        
    // setSnacklst([...snacklst, {
    //     id: GetNewUuid(), 
    //     title: 'New Item', 
    //     votes: 0, 
    //     comments: []}]);        
    // }

    function deleteItem(id: Uuid): void{
        const newSnacklstItems: Item[] = snacklst.items.filter(item => item.id !== id);
        setSnacklst({...snacklst, items: newSnacklstItems});

        
    }

    function addComment(id: Uuid, comment: Comment): void { 
        const newItemComment: Item[] = snacklst.items.map(item => {
            if(item.id === id){
                item.comments.push(comment);
            }
            return item;
        });
        setSnacklst({...snacklst, items: newItemComment});
    }

    function deleteComment(id: Uuid, commentId: Uuid): void{
        const itemCommentsUpdated: Item[] = snacklst.items.map(item => {
            if(item.id === id){
                item.comments = item.comments.filter(comment => comment.id !== commentId);
            }
            return item;
        });

        setSnacklst({...snacklst, items: itemCommentsUpdated});
    }

    function upVote(id: Uuid): void{
        const newItemVote: Item[] = snacklst.items.map(item => {
            if(item.id === id){
                item.votes++;
            }
            return item;
        });
        setSnacklst({...snacklst, items: newItemVote});
    }

    function downVote(id: Uuid): void{
        const removeItemVote: Item[] = snacklst.items.map(item => {
            if(item.id === id){
                item.votes--;
            }
            return item;
        });
        setSnacklst({...snacklst, items: removeItemVote});
    }
        
    console.log(snacklst);

    return cloneElement(children, {snacklst, addItem, deleteItem, addComment, deleteComment, upVote, downVote});
}

export default SnacklstController;
