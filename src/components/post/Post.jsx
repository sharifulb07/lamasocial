import  './post.css';
import { MoreVert } from '@material-ui/icons';

function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    {/* <img src="Assests/person/1.jpeg" alt="" className="postProfileImg" /> */}
                    <span className="postUsername">Safak Kocaoglu </span>
                    <span className="postDate">5 mins ago </span>


                </div>
                <div className="postTopRight">
        <MoreVert />



                </div>
            </div>
            <div className="postCenter"></div>
            <div className="postBottom"></div>
        </div>
      
    </div>
  )
}

export default Post;
