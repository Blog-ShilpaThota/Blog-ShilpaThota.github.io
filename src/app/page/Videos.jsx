import React from "react";
import Heading from "../../components/Heading/Heading";
import YouTubeVideos from "../../utils/YoutubeVideos";

const Videos = () => {
  const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;
  return (
    <div className={`nc-Repositories `}>
      <div className="w-full">
        <Heading desc="Updated New Content | Interactive Videos | Interesting Content" isCenter>
        Youtube Videos
      </Heading>
        <YouTubeVideos channelId={channelId} />
            </div>
    </div>
  );
};

export default Videos;
