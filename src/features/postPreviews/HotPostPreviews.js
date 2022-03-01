import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isLoading, loadHotPostPreviews, selectAllPreviews } from './hotPostPreviewsSlice';
import PostPreview from '../../components/PostPreview';

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
    <section className='post-container'>
      {hotPostPreviews.map((post, index) => (
        <div key={index}>
          <PostPreview postData={post.data}/>
        </div>
      ))}
    </section>
  )
}

export default HotPostPreviews;