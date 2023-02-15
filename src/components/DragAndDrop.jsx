import React, { useRef } from "react";
import styled from "styled-components";

import { Colors } from "../constants/Colors";
import { UploadAnimation } from "./UploadAnimation";

const { errorInput } = Colors;

export const DragAndDrop = ({ pdf, setPdf, error }) => {
  const reference = useRef();
  const urlPdf = `${pdf}#view=FitH`;

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(e.dataTransfer.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setPdf(e.target.result);
    };
  };

  const handlePdf = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setPdf(e.target.result);
    };
  };

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
      <UploadArea onDragOver={handleDragOver} onDrop={handleDrop}>
        <Input
          type="file"
          accept="application/pdf"
          onChange={handlePdf}
          ref={reference}
          hidden
          id="pdf-input"
        />
        {pdf ? (
          <Pdf src={urlPdf} type="application/pdf" onClick={uploadFiles}></Pdf>
        ) : (
          <DropZone>
            <P>Arrastra y suelta el archivo</P>
            <UploadAnimation uploadFiles={uploadFiles} />
            <P>Ó</P>
            <ButtonSelect onClick={uploadFiles}>
              Selecciona archivo
            </ButtonSelect>
          </DropZone>
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

const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input``;

const Pdf = styled.embed`
  width: 60vw;
  height: 30vw;
`;

const DropZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 360px;
  border: 3px dashed rgb(117, 112, 112);
  padding: 20px;
`;

const P = styled.p``;

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 2rem;
`;

const ButtonSelect = styled.button``;

const ButtonChange = styled.button``;
