import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isLoading, loadHotPostPreviews, selectAllPreviews } from '../hotPosts/hotPostPreviewsSlice';
import PostPreview from '../../../components/PostPreview';
import '../../../styles/PostPreviews.css'

const HotPostPreviews = () => {
  const dispatch = useDispatch();
  const isLoadingPreviews = useSelector(isLoading);
  const hotPostPreviews = useSelector(selectAllPreviews);

  console.log(isLoadingPreviews);
  console.log(hotPostPreviews);

  useEffect(() => {
    dispatch(loadHotPostPreviews());
  }, [dispatch])

  if (isLoadingPreviews) {
    return (
      <h2>Loading Posts...</h2>
    )
  }
  
  return (
    <section className='posts-container'>
      {hotPostPreviews.map((post, index) => (
        <div key={index}>
          <PostPreview postData={post.data}/>
        </div>
      ))}
    </section>
  )
}

export default HotPostPreviews;