import React from 'react';

//instead of the line number 5 we can use ES6 syntax and pass the props argument like following {video}. It is identical to the line 5
const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect= props.onVideoSelect;
 return (
   <li onClick = {()=>onVideoSelect(video)} className="list-group-item">
   <div className="video-list media">
     <div className="media-left">
       <img className="media-object" src={video.snippet.thumbnails.default.url}/>
     </div>

     <div className="media-body">
       <div className="media-heading">{video.snippet.title}</div>
     </div>
   </div>
   </li>
);
};


export default VideoListItem;
