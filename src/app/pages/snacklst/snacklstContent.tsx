import { Uuid } from '../../../utils/';
import { Snacklst } from '../../../domains/entities/';
import { Comment } from '../../../domains/entities/';

function SnacklstContent({snacklst, addItem, deleteItem, addComment, deleteComment, upVote, downVote}:
    {snacklst: Snacklst, addItem: () => void, deleteItem: (id: Uuid) => void, addComment: (id: Uuid, comment: Comment) => void, deleteComment: (id: Uuid, commentId: Uuid) => void, upVote: (id: Uuid) => void, downVote: (id: Uuid) => void}) {
   return(
       <div>
           <button onClick={addItem}>Add Item</button>
           <button onClick={() =>deleteItem(snacklst.items[0].id as Uuid)}>Delete Item</button>
           <button onClick={() =>addComment(snacklst.items[0].id as Uuid, {id: '45b63aac-967e-4bb6-9a6a-50f2d739cf49', text:'Comment...', userId:'Eu mesmo'})}>Add Comment</button>
           <button onClick={() =>deleteComment(snacklst.items[0].id as Uuid, snacklst.items[0].comments[0].id as Uuid )}>Remove Comment</button>
           <button onClick={() =>upVote(snacklst.items[0].id as Uuid)}>Give a like</button>
           <button onClick={() =>downVote(snacklst.items[0].id as Uuid)}>Remove like</button>
       </div>
   );
}

export default SnacklstContent;