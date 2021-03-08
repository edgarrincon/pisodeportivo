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
          <div className="footer-links">
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>MENU</h2>
                <Link link="/home/">HomePage</Link>
                <Link link="/entrevistas">Entrevistas</Link>
                <Link link="/opinion">Opiniones</Link>
                <Link link="/nosotros">Nosotros</Link>
                <Link link="/contactos">Contactos</Link>
              </div>
              <div className="footer-link-items">
                <h2>Contact Us</h2>
                <Link link="/contactos">Contact</Link>
                <Link link="/nosotros">Support</Link>
              </div>
            </div>
          </div>
          <section className="social-media">
            <div className="social-media-wrap">
              <div className="footer-logo">
                <Link to="/" className="social-logo">
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
            </div>
          </section>
        </div>
        );
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

  .footer-subscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
  }

  .footer-subscription > p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .footer-subscription-heading {
    margin-bottom: 24px;
    font-size: 24px;
  }

  .footer-subscription-text {
    margin-bottom: 24px;
    font-size: 20px;
  }

  .footer-input {
    padding: 8px 24px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    margin-bottom: 16px;
    border: 1px solid #fff;
  }

  .footer-links {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
  }

  .footer-link-wrapper {
    display: flex;
  }

  .footer-link-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
  }

  .footer-link-items h2 {
    margin-bottom: 16px;
  }

  .footer-link-items > h2 {
    color: #fff;
  }

  .footer-link-items a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
  }

  .footer-link-items a:hover {
    color: #e9e9e9;
    transition: 0.3s ease-out;
  }

  .footer-email-form h2 {
    margin-bottom: 2rem;
  }

  .footer-input::placeholder {
    color: #b1b1b1;
  }

  /* Social Icons */
  .social-icon-link {
    color: #fff;
    font-size: 24px;
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
    margin: 40px auto 0 auto;
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

    .footer-input {
      width: 100%;
    }

    .btn {
      width: 100%;
    }

    .footer-link-wrapper {
      flex-direction: column;
    }

    .social-media-wrap {
      flex-direction: column;
    }
  }
`;
