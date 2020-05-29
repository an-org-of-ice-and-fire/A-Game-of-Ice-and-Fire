// @flow

import { StaticAssets } from "App";

import * as React from "react";
import Image from "react-bootstrap/Image";

function MainMenuBackground(): React.Element<*> {
  return (
    <Image
      className={"MainMenuBackground-root"}
      src={StaticAssets.mainMenuBackground}
    />
  );
}

export { MainMenuBackground };
