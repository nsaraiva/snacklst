import SnacklstController from '../../controllers/SnacklstController';
import { Comment } from '../../../domains/entities';
import { Uuid } from '../../../utils/';
import SnacklstContent from './snacklstContent';



function Snacklst() {
  
    return (
      <div className="App">
        <SnacklstController>
          <SnacklstContent addItem={function (): void {
            throw new Error('Function not implemented.');
          } } deleteItem={function (id: Uuid): void {
            throw new Error('Function not implemented.');
          } } addComment={function (id: Uuid, comment: Comment): void {
            throw new Error('Function not implemented.');
          } } deleteComment={function (id: Uuid, commentId: Uuid): void {
            throw new Error('Function not implemented.');
          } } upVote={function (id: Uuid): void {
            throw new Error('Function not implemented.');
          } } downVote={function (id: Uuid): void {
            throw new Error('Function not implemented.');
          } } snacklst={{
            id: '',
            userId: '',
            title: '',
            items: []
          }} />
        </SnacklstController>
      </div>
    );
  }

  export default Snacklst;