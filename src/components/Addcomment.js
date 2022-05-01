import { useState } from 'react';

function Addcomment(props) {
  return (
    <div class='containerForComment'>
      <div class='avatarForComment'>
        <img
          alt='avatar'
          height='30px'
          src='./images/avatars/image-juliusomo.png'
        ></img>
      </div>
      <div class='textBox'>
        <textarea
          maxLength='200'
          rows='4'
          placeholder='Add a comment...'
        ></textarea>
      </div>
      <div class='submitButton'>
        <button>SEND</button>
      </div>
    </div>
  );
}
export default Addcomment;
