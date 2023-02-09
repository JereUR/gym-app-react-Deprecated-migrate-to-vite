import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import { Colors } from "../constants/Colors";

import uploadPhoto from "../static/upload-photo.json";

const { primaryRed, errorInput } = Colors;

export const UploadAnimation = ({ uploadFiles }) => {
  const uploadPhotoData = {
    loop: true,
    autoplay: true,
    animationData: uploadPhoto,
  };

  return (
    <AnimationContainer onClick={uploadFiles}>
      <Lottie options={uploadPhotoData} height={"25vw"} width={"25vw"} />
    </AnimationContainer>
  );
};

const AnimationContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`;
