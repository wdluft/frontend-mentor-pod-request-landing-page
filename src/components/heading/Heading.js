import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.h1`
  font-size: 1.625rem;
  line-height: 2.375rem;
  font-weight: lighter;
  text-align: center;
  padding-bottom: 1rem;
  color: var(--green);

  span {
    color: var(--white);
  }

  @media screen and (min-width: 40rem) {
    font-size: 3rem;
    line-height: 3.5rem;
    text-align: left;
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 69rem) {
    font-size: 3.25rem;
    line-height: 3.875rem;
    padding-bottom: 1.5rem;
  }
`;

const Heading = () => (
  <HeadingWrapper className="heading">
    Publish your podcasts <br /> <span> everywhere.</span>
  </HeadingWrapper>
);

export default Heading;
