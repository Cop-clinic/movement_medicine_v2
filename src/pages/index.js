import * as React from 'react';
import Section from '../components/section';
import TitleRow from '../components/titleRow';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import ContactWidget from '../components/contactWidget';
import HorizontalRule from '../components/horizontalRule';
import FaviconSmall from '../static/favicon/favicon-16x16.png';
import FaviconLarge from '../static/favicon/favicon-32x32.png';
import FaviconApple from '../static/favicon/apple-touch-icon.png';
// import FaviconManifest from '../static/favicon/site.webmanifest';
import FaviconShortcut from '../static/favicon/favicon.ico';
// import FaviconMSConfig from '../static/favicon/browserconfig.xml';

export const Head = () => {
  return (
    <>
      <title>COP Clinic</title>

      <link rel='apple-touch-icon' sizes='180x180' href={FaviconApple} />
      <link rel='icon' type='image/png' sizes='32x32' href={FaviconLarge} />
      <link rel='icon' type='image/png' sizes='16x16' href={FaviconSmall} />
      {/* <link rel='manifest' href={FaviconManifest} /> */}
      <link rel='shortcut icon' href={FaviconShortcut} />
      <meta name='msapplication-TileColor' content='#00aba9' />
      {/* <meta name='msapplication-config' content={FaviconMSConfig} /> */}
      <meta name='theme-color' content='#ffffff' />
    </>
  );
};

const IndexPage = () => {
  return (
    <div>
      <Layout contactUsButtonVisible>
        <HorizontalRule />
        <Section id='services' bgcolor='bg-white'>
          <TitleRow text='Services' />
          <Row xs='2' md='3'>
            <Col className='my-3'>
              <Link to='/services/sciatica'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='sciatica'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Sciatica</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/backpain'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='back pain'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Back Pain & Neck Pain</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/arthritis'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='arthritis'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Arthritic Pain</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/shoulderpain'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='shoulder pain'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Shoulder Pain</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/trappednerve'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='trapped nerves'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Trapped Nerves</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='my-3'>
              <Link to='/services/injuryrehab'>
                <Card className='text-center'>
                  <StaticImage
                    src='../images/backache-1620045.jpg'
                    alt='injury rehabilitation'
                    layout='constrained'
                    placeholder='blurred'
                  />
                  <Card.Body>
                    <Card.Text>Injury Rehabilitation</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row className='my-3'>
            <p>
              We are able to help and treat a much wider variety of problems
              than above. If you are not sure if we can help you with your
              problem, please call or contact us and we can advise you before
              making a booking.
            </p>
          </Row>
        </Section>
        <HorizontalRule />
        <Section id='location' bgcolor='bg-white'>
          <TitleRow text='Find Us' />
          <Row className='gy-5'>
            <Col xs='12' lg='6'>
              <StaticImage
                src='../images/building.jpg'
                alt='map'
                layout='constrained'
                placeholder='blurred'
              />
            </Col>
            <Col xs='12' lg='6'>
              <Row className='pb-3'>
                <Col>
                  <a
                    href='https://www.google.com/maps/place/Duncan+Court,+22+Pallister+Rd,+Clacton-on-Sea+CO15+1PG/@51.7886192,1.1538294,17z/data=!3m1!4b1!4m5!3m4!1s0x47d96ccc0704389f:0x1fad504667380c74!8m2!3d51.7886192!4d1.1560181'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <StaticImage
                      src='../images/map.png'
                      alt='map'
                      layout='constrained'
                      placeholder='blurred'
                    />
                  </a>
                </Col>
              </Row>
              <ContactWidget
                widgetIcon={<FontAwesomeIcon icon={faMapMarkerAlt} size='3x' />}
                widgetText='22 Pallister Road, Clacton-on-Sea, CO15 1PG'
                widgetUrl='https://www.google.com/maps/place/Duncan+Court,+22+Pallister+Rd,+Clacton-on-Sea+CO15+1PG/@51.7886192,1.1538294,17z/data=!3m1!4b1!4m5!3m4!1s0x47d96ccc0704389f:0x1fad504667380c74!8m2!3d51.7886192!4d1.1560181'
                newTab={true}
              />
              <ContactWidget
                widgetIcon={<FontAwesomeIcon icon={faPhone} size='3x' />}
                widgetText='01255 781388'
                widgetUrl='tel:+01255781388'
                newTab={false}
              />
              <ContactWidget
                widgetIcon={<FontAwesomeIcon icon={faEnvelope} size='3x' />}
                widgetText='contact@cop-clinic.co.uk'
                widgetUrl='mailto:contact@cop-clinic.co.uk'
                newTab={false}
              />
            </Col>
          </Row>
        </Section>
      </Layout>
    </div>
  );
};

export default IndexPage;
