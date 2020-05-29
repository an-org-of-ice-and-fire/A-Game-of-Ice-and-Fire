// @flow

import * as React from "react";
import { Link } from "react-router-dom";

function MainMenu(): React.Element<*> {
  return (
    <nav style={{ position: "absolute" }}>
      <ul>
        <li>
          <Link to="/newgame">New Game</Link>
        </li>
        <li>
          <Link to="/loadgame">Resume Game</Link>
        </li>
        <li>
          <Link to="/awoiaf">A Wiki of Ice and Fire</Link>
        </li>
      </ul>
    </nav>
  );
}

export { MainMenu };
