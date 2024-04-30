import React, { useState } from "react";
import Image from "./image";
import { styled } from "@mui/material/styles";

const MyCustomDiv = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "red",
}));

const About = () => {
  const [first, setFirst] = useState(true);
  return (
    <MyCustomDiv>
      {first && (
        <Image
          src="/assets/images/avatar/avatar_1.jpg"
          alt="test"
          disabledEffect
          sx={{
            width: "10%",
          }}
          ratio="1/1"
        />
      )}
    </MyCustomDiv>
  );
};

export default About;
