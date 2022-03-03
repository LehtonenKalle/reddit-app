import comment from '../assets/images/comment-black.png';
import upArrow from '../assets/images/up-arrow.png'

export default function PostPreview({ postData }) {
  return (
    <button className='post-container'>
      <div className='post-thumbnail-container'>
        <h2>{postData.title}</h2>
        <h3 className='subreddit'>{postData.subreddit_name_prefixed}</h3>
        <img className='thumbnail' src={postData.url} alt=''/>
      </div>
      <div className='post-info-container'>
        <div className='score-container'>
          <img className='upvote' src={upArrow} alt='upvote icon'/>
          <h3 className='score'>{postData.score}</h3>
        </div>
        <div className='comments-container'>
          <img className='comment' src={comment} alt='comment icon'/>
          <h3 className='comments'>{postData.num_comments}</h3>
        </div>
        <h3 className='author'>Posted by {postData.author}</h3>
      </div>
    </button>
  )
}