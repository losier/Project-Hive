import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Grid } from "@mui/material";

const CardContainer = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/losier/repos"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);
  return (
    <Grid container rowGap={2} columnSpacing={2}>
      {repos.map((repo) => (
        <Grid item xs={12} sm={6} md={4} key={repo.id}>
          <Cards
            id={repo.id}
            name={repo.name}
            owner_name={repo.owner.login}
            owner_avatar_url={repo.owner.avatar_url}
            owner_profile_url={repo.owner.html_url}
            repo_url={repo.html_url}
            description={repo.description}
            homepage={repo.homepage}
            language={repo.language}
            watchers={repo.watchers}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContainer;
