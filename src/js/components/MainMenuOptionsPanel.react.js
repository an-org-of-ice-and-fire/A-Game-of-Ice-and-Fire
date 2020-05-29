// @flow

import { StaticAssets } from "App";

import * as React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function MainMenuOptionsPanel(): React.Element<*> {
  return (
    <div className={"MainMenuOptionsPanel-root"}>
      <nav>
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
    </div>
  );
}

export { MainMenuOptionsPanel };
