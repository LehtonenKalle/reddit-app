export default function PostPreview({ postData }) {
  return (
    <button>
      <h2>{postData.title}</h2>
      <img src={postData.thumbnail} alt='' />
      <h3 className='score'>Score: {postData.score}</h3>
      <h3 className='comments'>Comments: {postData.num_comments}</h3>
      <h3 className='author'>Posted by {postData.author}</h3>
    </button>
  )
}