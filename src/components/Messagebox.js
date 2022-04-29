import plus from '../images/icon-plus.svg';
import subtract from '../images/icon-minus.svg';
import icondelete from '../images/icon-delete.svg';
import reply from '../images/icon-reply.svg';
import avataramy from '../images/avatars/image-amyrobson.png';

function Messagebox() {
  return (
    <div>
      <div class='gridcontainer'>
        <div className='votebox'>
          <div class='plus'>
            <img src={plus}></img>
          </div>
          <div class='num'>6</div>
          <div class='subtract'>
            <img src={subtract}></img>
          </div>
        </div>
        <div class='avatar'>
          {' '}
          <img height='30px' src={avataramy}></img>
        </div>
        <div class='name'>Amy Robson</div>
        <div class='posttime'>3 weeks ago</div>
        <div class='reply'>
          {' '}
          <img src={reply}></img>
        </div>
        <div class='textarea'>
          <textarea></textarea>
        </div>
        <div class='editdelete'>
          <img src={icondelete}></img>
        </div>
      </div>
    </div>
  );
}

export default Messagebox;
