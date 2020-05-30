// @flow

import * as React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";

function MainMenuOptionsPanel(): React.Element<*> {
  return (
    <>
      <Card className={"MainMenuOptionsPanel-root"}>
        <Card.Body>
          <div className={"MainMenuOptionsPanel-header"}>
            A Game of Ice and Fire
          </div>
          <ButtonGroup
            aria-label="Basic example"
            className={"MainMenuOptionsPanel-buttonGroup"}
          >
            <Button href="/newgame" variant="dark">
              New Game
            </Button>
            <Button href="/loadgame" variant="dark">
              Resume Game
            </Button>
            <Button href="/awoiaf" variant="dark">
              A Wiki of Ice and Fire
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export { MainMenuOptionsPanel };
