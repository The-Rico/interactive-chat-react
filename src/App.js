import Messagebox from './components/Messagebox.js';
import Addcomment from './components/Addcomment.js';
import './index.css';
import data from './data.json';

function App(props) {
  return (
    <div className='container'>
      <Messagebox
        avatar={data.comments[0].user.image.png}
        textarea={data.comments[0].content}
        score={data.comments[0].score}
        disabled={true}
        username={data.comments[0].user.username}
        active={data.comments[0].createdAt}
      />
      <br />
      <Messagebox
        avatar={data.comments[1].user.image.png}
        textarea={data.comments[1].content}
        score={data.comments[1].score}
        disabled={true}
        username={data.comments[1].user.username}
        active={data.comments[1].createdAt}
      />
      <br />
      <Messagebox
        avatar={data.comments[1].replies[0].user.image.png}
        textarea={data.comments[1].replies[0].content}
        score={data.comments[1].replies[0].score}
        disabled={true}
        username={data.comments[1].replies[0].user.username}
        active={data.comments[1].replies[0].createdAt}
      />
      <br />
      <Messagebox
        avatar={data.comments[1].replies[1].user.image.png}
        textarea={data.comments[1].replies[1].content}
        score={data.comments[1].replies[1].score}
        disabled={true}
        username={data.comments[1].replies[1].user.username}
        active={data.comments[1].replies[1].createdAt}
      />
      <br />
      <Addcomment />
    </div>
  );
}

export default App;
