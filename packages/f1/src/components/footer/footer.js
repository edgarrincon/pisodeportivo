import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

// simplest form (only email)

const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-2 footer-widget widget-three">
            <h6 className="widget-title">Menu</h6>
            <ul className="widget-list">
              <li>
                <Link className="widget-list-link" link="/Home/">
                  HomePage
                </Link>
              </li>
              <li>
                <Link className="widget-list-link" link="/entrevistas/">
                  Entrevistas
                </Link>
              </li>
              <li>
                <Link className="widget-list-link" link="/opinion/">
                  Opiniones
                </Link>
              </li>
              <li>
                <Link className="widget-list-link" link="/nosotros/">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link className="widget-list-link" link="/contactos/">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 footer-widget widget-four">
            <h6 className="widget-title">Connect</h6>
            <ul className="widget-list">
              <li>
                <Link
                  className="widget-list-link"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://www.facebook.com/awsminnovations"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="widget-list-link"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://twitter.com/awsmin"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="widget-list-link"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://www.instagram.com/awsmin/"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="widget-list-link"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://github.com/awsmin"
                >
                  YOUTUBE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--white);
  .footer-widget {
    margin-bottom: 1rem;
    .widget-title {
      color: var(--white);
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
    }
    .widget-list {
      list-style: none;
      padding-left: 0;
      li {
        margin-bottom: 0.5rem;
        .widget-list-link {
          text-decoration: none;
          transition: all 0.3s ease;
          color: var(--white);
          &:hover {
            color: var(--black);
          }
        }
      }
    }
  }
`;
