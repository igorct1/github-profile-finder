import React from "react";
import styles from "./Card.module.css";
import { MapPin, Gear, TwitterLogo, GithubLogo } from "phosphor-react";
import moment from "moment";

export const Card = ({ userData }) => {
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return moment(date).format("D MMM YYYY");
  }

  return (
    <div className={styles.cardGrid}>
      <div className={styles.cardImg}>
        <img src={userData.avatar_url} alt="" />
      </div>
      <div className={styles.profileWrapper}>
        <div className={styles.profileInfo}>
          <h2>{userData.name}</h2>
          <p>{formatDate(userData.created_at)}</p>
        </div>
        <p>@{userData.login}</p>
        {userData.bio ? (
          <h4>{userData.bio}</h4>
        ) : (
          <h4>This profile has no bio.</h4>
        )}
      </div>

      <div className={styles.profileCard}>
        <div className={styles.repo}>
          <h2>Repos</h2>
          <p>{userData.public_repos}</p>
        </div>
        <div className={styles.followers}>
          <h2>Followers</h2>
          <p>{userData.followers}</p>
        </div>
        <div className={styles.following}>
          <h2>Following</h2>
          <p>{userData.following}</p>
        </div>
      </div>
      <div className={styles.profileSocial}>
        <div>
          <MapPin size={24} color="#4b6a9b" />
          <h3>{userData.location}</h3>
        </div>
        <div>
          <Gear size={24} color="#4b6a9b" />
          <a target="__blank" href={userData.blog}>
            {userData.blog}
          </a>
        </div>
        <div>
          <TwitterLogo size={24} color="#4b6a9b" />
          {userData.twitter_username ? (
            <h3>{userData.twitter_username}</h3>
          ) : (
            <h3 className={styles.notFound}>not found.</h3>
          )}
        </div>
        <div>
          <GithubLogo size={24} color="#4b6a9b" />
          <a target="__blank" href={userData.html_url}>
            {userData.html_url}
          </a>
        </div>
      </div>
    </div>
  );
};
