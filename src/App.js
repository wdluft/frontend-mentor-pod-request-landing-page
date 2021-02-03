import styled from 'styled-components';
import EmailForm from './components/form/EmailForm';
import mobileBgImg from './assets/mobile/image-host.jpg';
import Header from './components/header/Header';
import Heading from './components/heading/Heading';
import Description from './components/description/Description';
import Platforms from './components/platforms/Platforms';
import BgPatternDots from './assets/desktop/bg-pattern-dots.svg';
import TabletBgImg from './assets/tablet/image-host.jpg';
import DesktopBgImg from './assets/desktop/image-host.jpg';

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 3.875rem 1.5rem;

  /* mobile bg image */
  @media screen and (max-width: 40rem) {
    ::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url(${mobileBgImg});
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 10%;
      z-index: -10;
    }
  }

  @media screen and (min-width: 40rem) {
    padding: 3.125rem 2.5rem;

    /* tablet bg image */
    ::before {
      content: '';
      position: absolute;
      background-image: url(${TabletBgImg});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -10;
      top: 0;
      right: 0;
      width: 63vw;
      height: 75vh;
    }

    /* bottom dots */
    ::after {
      content: '';
      position: absolute;
      width: 232px;
      height: 104px;
      background-image: url(${BgPatternDots});
      bottom: 0;
      left: 1.875rem;
    }

    .content {
      background: var(--black);
      display: grid;
      padding: 5.75rem 2rem 0 0;
      max-width: 82vw;

      grid-template-areas:
        'heading'
        'description'
        'emailform'
        'platforms';

      .heading {
        grid-area: heading;
      }
      .description {
        grid-area: description;
      }
      .emailform {
        grid-area: emailform;
      }
      .platforms {
        grid-area: platforms;
      }
    }
  }

  @media screen and (min-width: 69rem) {
    padding: 6.375rem 10.25rem 0 10.25rem;

    /* desktop bg image */
    ::before {
      content: '';
      position: absolute;
      background-image: url(${DesktopBgImg});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -10;
      top: 130px;
      right: 0;
      width: 888px;
      height: 640px;
    }

    /* bottom dots */
    ::after {
      bottom: auto;
      top: 718px;
      right: 0;
      left: auto;
    }

    .content {
      padding-top: 5.5rem;
      background: var(--black);
      max-width: 52vw;
    }
  }
`;

function App() {
  return (
    <AppWrapper className="App">
      <Header />

      <div className="content">
        <Heading />
        <Description />
        <Platforms />
        <EmailForm />
      </div>
    </AppWrapper>
  );
}

export default App;
