import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

import { Colors } from "../constants/Colors";
import Modal from "./Modal";

const {
  primaryBlue,
  primaryRed,
  secondaryBlue,
  secondaryRed,
  backgroundText,
  colorText,
  errorInput,
} = Colors;

export const UserInfo = ({ user }) => {
  const [changeInfo, setChangeInfo] = useState(false);

  const handleModal = () => {
    setChangeInfo(!changeInfo);
  };

  return (
    <InfoContainer>
      <Modal
        state={changeInfo}
        setState={setChangeInfo}
        title="Cambiar información adicional"
      >
        <Content>
          <UploadInfoContainer></UploadInfoContainer>
        </Content>
      </Modal>
      <FirstInfo>
        <Label>Nombre</Label>
        <TextContainer>
          <Text>{user.username}</Text>
        </TextContainer>
        <Label>Apellido</Label>
        <TextContainer>
          <Text>{user.surname}</Text>
        </TextContainer>
        <Label>Fecha de Nacimiento</Label>
        <TextContainer>
          <Text>{user.date}</Text>
        </TextContainer>
        <Label>Email</Label>
        <TextContainer>
          <Text>{user.email}</Text>
        </TextContainer>
      </FirstInfo>
      <SecondInfo>
        <AdInfoTitle>
          Información Adicional
          <FaEdit size="1.4rem" onClick={handleModal} />
        </AdInfoTitle>
        <Label>Peso</Label>
        <TextContainer>
          {user.weight ? (
            <Text>{user.weight}Kg.</Text>
          ) : (
            <Text>Sin información</Text>
          )}
        </TextContainer>
        <Label>Altura</Label>
        <TextContainer>
          {user.height ? (
            <Text>{user.height}Cm.</Text>
          ) : (
            <Text>Sin información</Text>
          )}
        </TextContainer>
        <Label>Medicación</Label>
        <TextContainer>
          {user.medication.length > 0 ? (
            user.medication.map((el, index) => (
              <InfoItem key={index}>
                <TextMed>- {el}</TextMed>
              </InfoItem>
            ))
          ) : (
            <Text>Sin información</Text>
          )}
        </TextContainer>
        <Label>Lesiones/Tratamiento</Label>
        <TextContainer>
          {user.injuries.length > 0 ? (
            user.injuries.map((el, index) => (
              <InfoItem key={index}>
                <TextMed>
                  - {el.injury} -{" "}
                  {el.treatment ? `${el.treatment}` : "Sin tratamiento"}
                </TextMed>
              </InfoItem>
            ))
          ) : (
            <Text>Sin información</Text>
          )}
        </TextContainer>
        <Label>Enfermedades/Medicación</Label>
        <TextContainer>
          {user.diseases.length > 0 ? (
            user.diseases.map((el, index) => (
              <InfoItem key={index}>
                <TextMed>
                  - {el.disease} -{" "}
                  {el.medication.length > 0
                    ? el.medication.map((el) => `${el} | `)
                    : "Sin medicamento"}
                </TextMed>
              </InfoItem>
            ))
          ) : (
            <Text>Sin información</Text>
          )}
        </TextContainer>
      </SecondInfo>
    </InfoContainer>
  );
};

const AdInfoTitle = styled.h2`
  margin: 0 0 2vw 3vw;
  font-style: italic;
  color: ${secondaryBlue};
  text-decoration: underline;

  svg {
    margin-left: 1vw;
    color: ${secondaryBlue};
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 480px) {
    }
  }

  svg:hover {
    cursor: pointer;
    color: ${secondaryRed};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FirstInfo = styled.div``;

const InfoContainer = styled.div``;

const InfoItem = styled.li`
  display: block;

  @media screen and (max-width: 480px) {
  }
`;

const Label = styled.h3`
  margin-left: 5vw;
  margin-bottom: -0.5rem;
  font-style: italic;
  color: ${secondaryBlue};

  @media screen and (max-width: 480px) {
    margin-left: 8vw;
    margin-bottom: 1rem;
  }
`;

const SecondInfo = styled.div``;

const Text = styled.p`
  font-size: 1.3rem;
  padding: 1rem;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const TextMed = styled(Text)`
  padding-left: 1rem;
`;

const TextContainer = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 40vw;
  margin-left: 5vw;
  margin-bottom: 2vw;
  border-radius: 1rem;
  color: ${primaryRed};

  @media screen and (max-width: 480px) {
    width: 80vw;
    margin-bottom: 5vw;
    margin-left: 8vw;
  }
`;

const UploadInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
