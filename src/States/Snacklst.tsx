import { useState } from 'react';

function Snacklst(){
interface Snacklst {
    id: number,
    title: string,
    votes: number,
    comments: string[],
}
    
  const snacklst = useState<Snacklst[]>([]);
}

export default Snacklst;