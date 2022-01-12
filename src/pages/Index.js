import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Neeraj Mula's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">HI THERE!</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more. It&apos;s a bit empty right now.
        Hopefully that&apos;ll change with time. Currently this website is heavily based on
        Michael D&apos;Angelo&apos;s personal website so expect a lot of change in the near future.
        Credit goes to him for providing such a great looking template.
      </p>
    </article>
  </Main>
);

export default Index;
