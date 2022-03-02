export default function PostPreview({ postData }) {
  return (
    <button className='post-container'>
      <div className='post-thumbail-container'>
        <h2>{postData.title}</h2>
        <img className='thumbnail' src={postData.thumbnail} alt=''/>
      </div>
      <div className='post-info-container'>
        <h3 className='score'>Score: {postData.score}</h3>
        <h3 className='comments'>Comments: {postData.num_comments}</h3>
        <h3 className='author'>Posted by {postData.author}</h3>
      </div>
    </button>
  )
}