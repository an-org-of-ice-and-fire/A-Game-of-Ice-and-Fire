// @flow

import { MainMenuBackground, MainMenuOptionsPanel } from "App";

import * as React from "react";

function MainMenu(): React.Element<*> {
  return (
    <>
      <MainMenuBackground />
      <MainMenuOptionsPanel />
    </>
  );
}

export { MainMenu };
