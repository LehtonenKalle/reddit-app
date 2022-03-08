import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isLoading, loadPostPreviews, selectAllPreviews } from './postPreviewsSlice';
import PostPreview from '../../../components/PostPreview';
import '../../../styles/PostPreviews.css'

const PostPreviews = () => {
  const dispatch = useDispatch();
  const isLoadingPreviews = useSelector(isLoading);
  const postPreviews = useSelector(selectAllPreviews);


  useEffect(() => {
    dispatch(loadPostPreviews(''));
  }, [dispatch])

  if (isLoadingPreviews) {
    return (
      <h2>Loading Posts...</h2>
    )
  }
  
  return (
    <section className='posts-container'>
      {postPreviews.map((post, index) => (
        <div key={index}>
          <PostPreview postData={post.data}/>
        </div>
      ))}
    </section>
  )
}

export default PostPreviews;