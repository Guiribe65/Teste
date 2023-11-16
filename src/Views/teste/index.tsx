import { Button } from "@mui/material";
import React from "react";

function ComboBox(): JSX.Element {
  const [onClickChange, setOnClickChange] = React.useState(true);

  return (
    <>
      <Button
        onClick={() => {
          setOnClickChange(!onClickChange);
        }}
      >
        Primary
      </Button>
      <Button disabled={onClickChange}>Disabled</Button>
    </>
  );
}

export default ComboBox;
