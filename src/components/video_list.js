import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		//make sure each item has unique property when iterating
		return <VideoListItem key={video.etag} video = {video} />
	})
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList;