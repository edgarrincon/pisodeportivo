import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

// simplest form (only email)

const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        <div className="footer-container">
          <section className="social-media">
            <div className="social-media-wrap">
              <div className="footer-logo">
                <Link link="/home/" className="social-logo">
                  <h2>Piso Deportivo</h2>
                </Link>
              </div>
              <small className="website-rights">© 2020</small>
              <div className="social-icons">
                <Link
                  className="social-icon-link"
                  aria-label="Facebook"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://www.instagram.com/awsmin/"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="social-icon-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://www.instagram.com/awsmin/"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="social-icon-link"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://www.instagram.com/awsmin/"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </Link>
                <Link
                  className="social-icon-link"
                  target="_blank"
                  rel="nofollow noopener"
                  link="https://www.instagram.com/awsmin/"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </Link>
              </div>
              <div className="footer-dev">
                <Link
                  link="https://www.instagram.com/awsmin/"
                  className="social-logo"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <p>Desarrollado por </p>

                  <h4> Standards Apps</h4>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`
  .footer-container {
    background-color: var (--brand);
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-logo {
    display: flex;
  }

  .footer-dev {
    display: flex;
  }

  /* Social Icons */
  .social-icon-link {
    color: var(--black);
    font-size: 50px;
  }

  .social-media {
    max-width: 1000px;
    width: 100%;
  }

  .social-media-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 40px auto;
    flex-direction: column;
  }

  .social-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  }

  .social-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .website-rights {
    color: #fff;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 820px) {
    .footer-links {
      padding-top: 2rem;
    }

    .footer-link-wrapper {
      flex-direction: column;
    }

    .social-media-wrap {
      flex-direction: column;
    }
  }
`;
