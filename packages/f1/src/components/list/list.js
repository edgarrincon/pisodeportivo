import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  let title = "Piso Deportivo";
  if (data.isAwsmJobOpeningsArchive) {
    title = "Career";
  }

  return (
    <Container>
      {/* If the list is a blog posts, we render a title. */}
      {data.isPostArchive && <Header>{title}</Header>}
      {/* If the list is a AWSM Job career page, we render a title. */}
      {data.isAwsmJobOpeningsArchive && <Header>{title}</Header>}
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.isAwsmJobOpeningsArchive && (
        <section className="section job-listing">
          <div className="container">
            <div className="row">
              {/* Iterate over the items of the list. */}
              {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Item key={item.id} item={item} />;
              })}
            </div>
          </div>
        </section>
      )}
      {!data.isAwsmJobOpeningsArchive && (
        <>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}
        </>
      )}

      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 1360px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
`;

const Header = styled.h1`
  display: flex;
  font-size: 7.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
  height: 50vh;
  background-image: url("https://raw.githubusercontent.com/edgarrincon/pisodeportivo/main/packages/f1/src/components/imagenes/cr7.jpeg");

  min-height: 700px;

  /* Set background image to fixed (don't scroll along with the page) */
  background-attachment: fixed;

  /* Center the background image */
  background-position: center;

  /* Set the background image to no repeat */
  background-repeat: no-repeat;

  /* Scale the background image to be as large as possible */
  background-size: cover;
`;
