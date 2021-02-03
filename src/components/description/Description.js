import React from 'react';
import styled from 'styled-components';

const DescriptionWrapper = styled.p`
  padding-bottom: 2rem;
  text-align: center;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  font-weight: lighter;

  @media screen and (min-width: 40rem) {
    text-align: left;
    font-size: var(--bodyTextSize);
    line-height: var(--bodyLineHeight);
    max-width: 75%;
    padding-bottom: 2.5rem;
  }

  @media screen and (min-width: 69rem) {
    max-width: 65%;
  }
`;

const Description = () => (
  <DescriptionWrapper className="description">
    Upload your audio to Pod with a single click. We’ll then distribute your
    podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
  </DescriptionWrapper>
);

export default Description;
