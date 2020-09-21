import React from 'react';

const VideoDetails = ({video}) =>{
    if(!video){
        return<div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc);

    return(
        <div>
            <div className="ui embed" >
                <iframe title="Video Title" src= { videoSrc } />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="">{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetails;