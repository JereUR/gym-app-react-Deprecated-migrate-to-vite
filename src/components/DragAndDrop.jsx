import React, { useRef } from "react";
import styled from "styled-components";
import uploadPdf from "../static/upload-pdf.json";

import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import { UploadAnimation } from "./UploadAnimation";

const { errorInput, primaryBlue, primaryRed } = Colors;

export const DragAndDrop = ({ pdf, setPdf, error }) => {
  const reference = useRef();
  const urlPdf = `${pdf}#view=FitH`;

  const handleDragOver = (e) => {
    e.preventDefault();
    document.querySelector(".drag-container").classList.add("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    document.querySelector(".drag-container").classList.remove("drag-over");
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
        <InputContainer>
          <Input
            type="file"
            accept="application/pdf"
            onChange={handlePdf}
            ref={reference}
            hidden
            id="pdf-input"
          />
          {pdf ? (
            <Pdf
              src={urlPdf}
              type="application/pdf"
              onClick={uploadFiles}
            ></Pdf>
          ) : (
            <DropZone className="drag-container">
              <P>Arrastra ó busca el archivo</P>
              <UploadAnimation
                uploadFiles={uploadFiles}
                animation={uploadPdf}
                height="15vw"
                width="45vw"
              />
            </DropZone>
          )}

          {error && <ErrorInput>{error}</ErrorInput>}
        </InputContainer>

        <ButtonChange type="button" onClick={changePdf}>
          Cambiar pdf
        </ButtonChange>
      </UploadArea>
    </DragContainer>
  );
};

const Br = styled.br``;

const ButtonChange = styled.button`
  font-family: ${FontFamily};
  background-color: ${primaryRed};
  color: #fff;
  border: none;
  width: 20%;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.1rem;
  margin-top: 1vw;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #c53137;
  }
`;

const DragContainer = styled.div`
  margin: 0 0 2vw 0;
`;

const DropZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 60vw;
  height: 30vw;
  border: 3px dashed ${primaryBlue};
  padding: 20px;
`;

const ErrorInput = styled.div`
  font-size: 12px;
  color: ${errorInput};
  text-align: left;
  margin-left: 2rem;
`;

const Input = styled.input``;

const InputContainer = styled.div`
  display: inline-grid;
  margin: 1rem;
  line-height: 2.5rem;
`;

const P = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 400;
  margin-top: -1rem;
  padding-bottom: 1rem;
`;

const Pdf = styled.embed`
  width: 60vw;
  height: 30vw;
`;

const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
