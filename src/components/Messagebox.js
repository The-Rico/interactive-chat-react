import { useState } from 'react';

import plus from '../images/icon-plus.svg';
import subtract from '../images/icon-minus.svg';
import icondelete from '../images/icon-delete.svg';
import reply from '../images/icon-reply.svg';

function Messagebox(props) {
  const [score, setScore] = useState(0);

  return (
    <div>
      <div className='gridcontainer'>
        <div className='votebox'>
          <div onClick={() => setScore(score + 1)} className='plus'>
            <img alt='add' src={plus}></img>
          </div>
          <div className='num'>{props.score}</div>
          <div onClick={() => setScore(score - 1)} className='subtract'>
            <img alt='subtract' src={subtract}></img>
          </div>
        </div>
        <div className='avatar'>
          <img alt='avatar' height='30px' src={props.avatar}></img>
        </div>
        <div className='name'>{props.username}</div>
        <div className='posttime'>{props.active}</div>
        <div className='reply'>
          <img alt='reply' src={reply}></img> Reply
        </div>
        <div className='textarea'>
          <textarea
            value={props.textarea}
            maxLength='200'
            rows='4'
            placeholder='Add a comment...'
            disabled={props.disabled}
          ></textarea>
        </div>
        <div className='editdelete'>
          <img alt='delete' src={icondelete}></img>
        </div>
      </div>
    </div>
  );
}

export default Messagebox;
