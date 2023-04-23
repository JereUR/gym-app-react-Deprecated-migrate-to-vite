import React, { useState } from "react";
import styled from "styled-components";
import { toast, Toaster } from "react-hot-toast";

import { Colors } from "../constants/Colors";
import { FontFamily } from "../constants/Fonts";
import { ViewUserInfo } from "./ViewUserInfo";
import { FetchGetData } from "../helpers/FetchGetData";
import routes from "../static/routes.json";

const { primaryRed, primaryBlue } = Colors;

export const SeeUser = ({ users }) => {
  const [forData, setForData] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);
  const [user, setUser] = useState(null);

  const handleFor = (e) => {
    setForData(e.target.value);
    setViewDetails(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await FetchGetData(`${routes.USER_INFO}${forData}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((e) => {
        toast.error(e.messsage, {
          position: "top-right",
          duration: 6000,
          style: {
            background: "rgba(250, 215, 215)",
            fontSize: "1rem",
            fontWeight: "500",
          },
        });
      });

    setViewDetails(true);
  };

  return (
    <UserInfo>
      <Form onSubmit={handleSubmit}>
        <ForPartContainer>
          <InputContainer>
            <Label>Ver datos de:</Label>
            <Select onChange={handleFor} id="for-data">
              <Option value="null">Seleccione un usuario</Option>
              {users !== null &&
                users.map((el, index) => (
                  <Option key={index} value={el.email}>
                    {el.username} {el.surname} - {el.email}
                  </Option>
                ))}
            </Select>
          </InputContainer>
        </ForPartContainer>
        <ButtonSubmit type="submit">Ver Información</ButtonSubmit>
      </Form>
      {viewDetails && user !== null && <ViewUserInfo user={user} />}
      <Toaster />
    </UserInfo>
  );
};

const ButtonSubmit = styled.button`
  font-family: ${FontFamily};
  background-color: ${primaryRed};
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 2rem;
  padding: 10px 20px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 100%;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
    background-color: ${primaryBlue};
  }
`;

const Form = styled.form`
  padding: 0 5vw 0 5vw;
`;

const ForPartContainer = styled.div``;

const InputContainer = styled.div`
  display: inline-grid;
  margin: 1rem;
  line-height: 2.5rem;
`;

const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
`;

const Option = styled.option`
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  background-image: none;
  border: none;
  outline: none;
  padding: 0;

  font-family: ${FontFamily};
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
  width: 30vw;
  padding: 10px;
  border: 2px solid ${primaryBlue};
  border-radius: 4px;

  background-image: url('data:image/svg+xml;utf8,<svg fill="%23000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;

  @media screen and (max-width: 480px) {
    width: 60vw;
    font-size: 1.1rem;
    max-width: 60vw;
  }

  :focus {
    border-color: ${primaryRed};
    box-shadow: 0 0 0 3px rgba(65, 157, 199, 0.5);
  }

  :hover {
    cursor: pointer;
  }

  ::-ms-expand {
    display: none;
  }
`;

const UserInfo = styled.div``;
