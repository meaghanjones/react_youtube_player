import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  //this is how we can add our variable into a string like this

  return (
    <div className="video-detail col-md-8">
      <iframe className="embed-responsive-item-16by9" src={url}></iframe>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>

  );
}

export default VideoDetail;
