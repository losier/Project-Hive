import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Link,
} from "@mui/material";
import { FavoriteBorderOutlined as FavoriteBorderOutlinedIcon } from "@mui/icons-material";

const Cards = ({
  id,
  name,
  owner_name,
  owner_avatar_url,
  owner_profile_url,
  repo_url,
  description,
  homepage,
  language,
  watchers,
}) => {
  return (
    <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        avatar={<Avatar src={owner_avatar_url} alt={owner_name} />}
        title={
          <Link
            href={owner_profile_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {owner_name}
          </Link>
        }
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          <Link href={repo_url} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: "auto" }}>
        <Typography variant="body2" color="textSecondary">
          {language}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Watchers: {watchers}
        </Typography>
        {homepage && (
          <Link href={homepage} target="_blank" rel="noopener noreferrer">
            Visit Homepage
          </Link>
        )}
        <FavoriteBorderOutlinedIcon />
      </CardActions>
    </Card>
  );
};

export default Cards;
