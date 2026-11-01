import { useState } from 'react';
import SearchVillains from '../components/SearchVillains';
// import Bad_apple_colour from '../images/Bad_apple_colour.png';
// import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import BlurText from '../component/BlurText';

function Home() {
  const [results, setResults] = useState([]);

  const quickStats = [
    { label: 'Villains tracked', value: '120+' },
    { label: 'Power ratings', value: '4 metrics' },
    { label: 'Compare mode', value: 'Live' }
  ];

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <BlurText
            text="Welcome to WickedStats"
            delay={100}
            animateBy="words"
            className="hero-title"
          />
          <h1 className="home-title">Villain Home</h1>
          <p className="home-subtitle">
            Search iconic antagonists, compare their power profiles, and spot the traits that make them dangerous.
          </p>
        </div>

        <div className="hero-panel">
          {quickStats.map(stat => (
            <div key={stat.label} className="stat-box">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="search-panel">
        <SearchVillains setResults={setResults} />
      </section>

      <section className="results-panel">
        <div className="section-header">
          <h2>Villain roster</h2>
        </div>

        {results.length > 0 ? (
          <div className="villain-grid">
            {results.map((villain, index) => (
              <div className="search-card" key={`${villain.name}-${index}`} value={index}>
                <h3>{villain.name}</h3>
                <img src={villain?.images?.sm} alt={villain.name} />
                <div className="villain-stats">
                  <p><span>Power</span> {villain?.powerstats?.power}</p>
                  <p><span>Speed</span> {villain?.powerstats?.speed}</p>
                  <p><span>Strength</span> {villain?.powerstats?.strength}</p>
                  <p><span>Intelligence</span> {villain?.powerstats?.intelligence}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            Search a villain name to see a roster of results here.
          </div>
        )}
      </section>

      <section className="info-section">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center">
              {/* <Image src={Bad_apple_colour} alt="Bad Apple color logo" className="api-graphic" /> */}
            </Col>

            <Col md={8}>
              <div className="info-container">
                <h1>About API</h1>
                <p>
                  The API endpoint <b>https://superhero-search.p.rapidapi.com/api/villains</b> is a service available through
                  RapidAPI that allows developers to retrieve villain character data from comic universes such as Marvel and DC.
                  It returns JSON responses containing names, images, biographies, and power attributes, which are ideal for building
                  searchable villain dashboards and comparison tools.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;


