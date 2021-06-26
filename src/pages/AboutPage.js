import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Minim amet est deserunt occaecat in elit amet. Eu minim et veniam
            mollit proident incididunt. Esse nulla officia non ullamco cupidatat
            non deserunt non do veniam reprehenderit. Cupidatat commodo
            adipisicing sunt excepteur fugiat sunt velit quis duis in cupidatat.
            Et veniam dolore amet ea esse incididunt enim anim eiusmod. Culpa
            dolor sunt officia voluptate excepteur exercitation enim
            reprehenderit reprehenderit dolor non aute esse.
          </p>
        </article>
      </Wrapper>
      ;
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
