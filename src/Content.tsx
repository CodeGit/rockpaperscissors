/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { color } from "@mui/system";
import React from "react";

type node = {
    children: React.ReactNode
}

const styles = css({
    flexGrow:1,
    width:"100%",
    background: "white",
    minHeight: '86vh',
  });

  const ContentContainer = (props:node) => {
    return (
        <div css={styles}>
            {props.children}
        </div>
    );    
  };

  export default ContentContainer;