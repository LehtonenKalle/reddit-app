import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isLoading, loadPostPreviews, selectAllPreviews, selectFilteredAllPreviews } from './postPreviewsSlice';
import PostPreview from '../../../components/PostPreview';
import '../../../styles/PostPreviews.css'
import { useParams } from 'react-router-dom';

const PostPreviews = ({ page }) => {
  const params = useParams();
  const path = params['*'];

  const dispatch = useDispatch();
  const isLoadingPreviews = useSelector(isLoading);
  const postPreviews = useSelector(selectAllPreviews);
  const filteredPostPreviews = useSelector(selectFilteredAllPreviews);
  console.log(filteredPostPreviews);

  useEffect(() => {
    dispatch(loadPostPreviews(path));
  }, [path]);

  if (isLoadingPreviews) {
    return (
      <h2>Loading Posts...</h2>
    )
  }
  
  return (
    <section className='posts-container'>
      {filteredPostPreviews.map((post, index) => (
        <div key={index}>
          <PostPreview postData={post.data}/>
        </div>
      ))}
    </section>
  )
}

export default PostPreviews;