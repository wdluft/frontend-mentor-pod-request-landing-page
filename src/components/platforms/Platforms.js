import React from 'react';
import styled from 'styled-components';
import SpotifyLogo from '../../assets/desktop/spotify.svg';
import ApplePodcastLogo from '../../assets/desktop/apple-podcast.svg';
import GooglePodcastsLogo from '../../assets/desktop/google-podcasts.svg';
import PocketCastsLogo from '../../assets/desktop/pocket-casts.svg';

const PlatformsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.375rem 3rem;

  @media screen and (min-width: 40rem) {
    padding: 0 0 3rem 0;
    justify-content: flex-start;

    .platform {
      margin-right: 2.5rem;
    }

    .spotify {
      width: 96px;
      height: 29px;
    }

    .apple {
      width: 78px;
      height: 29px;
    }

    .google {
      width: 125px;
      height: 18px;
      margin-right: 1.75rem;
    }

    .pocket {
      width: 129px;
      height: 26px;
    }
  }
`;

const Platforms = () => (
  <PlatformsWrapper className="platforms">
    <img
      src={SpotifyLogo}
      className="spotify platform"
      alt="Spotify"
      width="56"
      height="17"
    />
    <img
      src={ApplePodcastLogo}
      className="apple platform"
      alt="Apple Podcast"
      width="45"
      height="17"
    />
    <img
      src={GooglePodcastsLogo}
      className="google platform"
      alt="Google Podcasts"
      width="73"
      height="11"
    />
    <img
      src={PocketCastsLogo}
      className="pocket platform"
      alt="Pocket Casts"
      width="77"
      height="15"
    />
  </PlatformsWrapper>
);

export default Platforms;
