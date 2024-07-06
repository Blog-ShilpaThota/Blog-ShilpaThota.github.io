import React, { useEffect, useState } from "react";
import axios from "axios";
import getAccessToken from '../utils/GoogleSignIn'; // Import the function from step 1
import Heading from "../components/Heading/Heading";

const YouTubePlaylists = ({ channelId }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const token = await getAccessToken();
      if (!token) {
        setError('Failed to get access token');
        setLoading(false);
        return;
      }

      try {
        const playlistResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlists`,
          {
            params: {
              part: "snippet,contentDetails",
              mine: true,
              key:process.env.REACT_APP_YOUTUBE_API_KEY,
              maxResults: 50,
              access_token:token
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const playlists = playlistResponse.data.items;

        const fetchVideos = async (playlistId) => {
          const videosResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems`,
            {
              params: {
                part: "snippet,contentDetails",
                playlistId: playlistId,
                maxResults: 10,
              },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return videosResponse.data.items;
        };

        const playlistsWithVideos = await Promise.all(
          playlists.map(async (playlist) => {
            const videos = await fetchVideos(playlist.id);
            return { ...playlist, videos };
          })
        );

        setPlaylists(playlistsWithVideos);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, [channelId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching playlists: {error.message}</div>;
  }

  if (playlists.length === 0) {
    return <div>No playlists found for this channel.</div>;
  }

  return (
    <div className="nc-YouTubePlaylists">
      <div className="container">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="mb-8">
            <Heading isCenter='true' desc='' >{playlist.snippet.title}</Heading>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {playlist.videos.map((video) => (
                <li key={video.id} className="mb-4">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.snippet.title}
                  ></iframe>
                  <h3 className="text-lg font-semibold mt-2">
                    {video.snippet.title}
                  </h3>
                  <p className="text-gray-700">{video.snippet.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubePlaylists;
