import React, { useRef } from "react";
import styled from "styled-components";

import { Colors } from "../constants/Colors";
import { UploadAnimation } from "./UploadAnimation";

const { errorInput } = Colors;

export const DragAndDrop = ({ pdf, setPdf, error }) => {
  const handlePdf = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setPdf(e.target.result);
    };
  };

  const reference = useRef();

  const uploadFiles = () => {
    reference.current.click();
  };

  const changePdf = () => {
    setPdf(null);
    document.getElementById("pdf-input").value = null;
  };

  return (
    <DragContainer>
      <Br />
      <UploadArea>
        <Input
          type="file"
          accept="application/pdf"
          onChange={handlePdf}
          ref={reference}
          style={{ display: "none" }}
          id="pdf-input"
        />
        {pdf ? (
          <Pdf src={pdf} type="application/pdf" onClick={uploadFiles}></Pdf>
        ) : (
          <UploadAnimation uploadFiles={uploadFiles} />
        )}
        {error && <ErrorInput>{error}</ErrorInput>}
        <ButtonChange type="button" onClick={changePdf}>
          Cambiar pdf
        </ButtonChange>
      </UploadArea>
    </DragContainer>
  );
};

const DragContainer = styled.div``;

const Br = styled.br``;

const UploadArea = styled.div``;

const Input = styled.input``;

const Pdf = styled.embed`
  width: 40vw;
  height: 20vw;
`;

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const ButtonChange = styled.button``;
