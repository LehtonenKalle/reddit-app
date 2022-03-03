import comment from '../assets/images/comment.png';
import like from '../assets/images/like.png'

export default function PostPreview({ postData }) {
  return (
    <button className='post-container'>
      <div className='post-thumbnail-container'>
        <h2 className='post-title'>{postData.title}</h2>
        <h3 className='subreddit'>{postData.subreddit_name_prefixed}</h3>
        <img className='thumbnail' src={postData.url} alt=''/>
      </div>
      <div className='post-info-container'>
        <div className='score-container'>
          <img className='like' src={like} alt='like icon'/>
          <h4 className='score'>{postData.score}</h4>
        </div>
        <div className='comments-container'>
          <img className='comment' src={comment} alt='comment icon'/>
          <h4 className='comments'>{postData.num_comments}</h4>
        </div>
        <h4 className='author'>Posted by {postData.author}</h4>
      </div>
    </button>
  )
}