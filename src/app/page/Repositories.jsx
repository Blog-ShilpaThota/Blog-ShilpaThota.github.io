import React, { useEffect, useState } from "react";
import axios from "axios";
import Card3SmallRepo from "../../components/Card3Small/Card3SmallRepo";
import Heading from '../../components/Heading/Heading';

const Repositories = (className = "w-full") => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'your-username' with your GitHub username
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/shilpathota/repos?type=public",
          {
            headers: {
              Authorization: process.env.REACT_APP_GIT_API_KEY,
            },
          }
        );
        console.log(response.data);
        setRepos(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching repositories</div>;
  }

  return (
    <div className={`nc-Repositories rounded-3xl overflow-hidden ${className}`}>
      <Heading desc="Latest Technology | Innovative System Design | Best Solutions" isCenter>
        GitHub Repositories
      </Heading>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {repos.map((repo) => (
        <Card3SmallRepo
          className="p-4 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl shadow-md"
          key={repo.id}
          post={{title:repo.name,href:repo.html_url,id:repo.id, description:repo.description}}
        />
      ))}
    </div>
  </div>
  );
};

export default Repositories;
