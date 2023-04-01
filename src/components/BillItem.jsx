import React, { useState } from "react";
import styled from "styled-components";
import { GrDocumentPdf } from "react-icons/gr";
import { Document, Page, Text, View, Image, usePDF } from "@react-pdf/renderer";

import logo from "../assets/logo.png";
import seal from "../assets/payment-seal.png";
import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";

const { primaryBlue, secondaryBlue, colorText } = Colors;

export const BillItem = ({ bill, username, surname, email }) => {
  const [viewPdf, setViewPdf] = useState(false);

  const doc = (
    <Document>
      <Page
        size="A5"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: "center",
            backgroundColor: "white",
            padding: 1,
          }}
        >
          <Image
            src={logo}
            alt="random image"
            style={{ maxWidth: "150px", maxHeight: "auto", top: "-10vw" }}
          />
          <Text
            style={{
              color: `${primaryBlue}`,
              fontSize: "36px",
              alignItems: "center",
              margin: "auto auto 10vw auto",
              fontWeight: "bold",
            }}
          >
            Pago {bill.month} - {bill.year}
          </Text>

          <Text style={{ textAlign: "justify", marginTop: "30px" }}>
            Destinatario: {username} {surname}.
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "30px" }}>
            Email: {email}.
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "30px" }}>
            Fecha: {bill.day} de {bill.month} del {bill.year}.
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "30px" }}>
            Monto: ${bill.mount}.
          </Text>
          <Image
            src={seal}
            alt="random image"
            style={{
              maxWidth: "120px",
              maxHeight: "120px",
              marginLeft: "60%",
            }}
          />
        </View>
      </Page>
    </Document>
  );

  const [instance, updateInstance] = usePDF({ document: doc });

  const handlePdf = () => {
    updateInstance({ document: doc });
    setViewPdf(!viewPdf);
  };

  return (
    <Container>
      <BillItemContainer>
        <Namebill>
          <GrDocumentPdf size="1.5rem" />
          Pago {bill.month} - {bill.year}
        </Namebill>
        <BillButton type="button" onClick={handlePdf}>
          {viewPdf ? "X" : "Ver/Descargar PDF (Solo PC)"}
        </BillButton>
      </BillItemContainer>
      {viewPdf && (
        <PdfContainer>
          <Pdf src={instance.url} type="application/pdf"></Pdf>
        </PdfContainer>
      )}
    </Container>
  );
};

const BillButton = styled.button`
  font-family: ${FontFamily};
  background-color: ${primaryBlue};
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.3rem;
  padding: 10px 20px;
  margin: 1vw 1vw 1vw 0;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${secondaryBlue};
  }
`;

const BillItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colorText};
  margin: 2vw 5vw 1vw 5vw;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px #ccc;

  @media screen and (max-width: 480px) {
    margin: 8vw 1vw 5vw 1vw;
    display: block;
  }
`;

const Container = styled.div``;

const Namebill = styled.p`
  font-size: 1.3rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const Pdf = styled.embed`
  width: 50vw;
  height: 25vw;

  @media screen and (max-width: 1400px) {
    width: 60vw;
    height: 30vw;
  }

  @media screen and (max-width: 930px) {
    width: 70vw;
    height: 35vw;
  }
`;

const PdfContainer = styled.div`
  text-align: center;
`;
