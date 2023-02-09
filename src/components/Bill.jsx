import React from "react";
import styled from "styled-components";

import { user } from "../App";
import { Colors } from "../constants/Colors";
import { GrDocumentPdf } from "react-icons/gr";
import { FiDownload } from "react-icons/fi";

const {
  primaryRed,
  primaryBlue,
  secondaryBlue,
  secondaryRed,
  backgroundText,
  colorText,
} = Colors;

export const Bill = () => {
  return (
    <BillContainer>
      <NextPaymentContainer>
        <NoticeTitleNext>Próximo Pago:</NoticeTitleNext>
        {user.payment.nextPayment ? (
          <Notice>
            El próximo deberá realizarse el día {user.payment.nextPayment.day}{" "}
            de {user.payment.nextPayment.month} del año{" "}
            {user.payment.nextPayment.year}.
          </Notice>
        ) : (
          <NoData>Sin información.</NoData>
        )}
      </NextPaymentContainer>
      <PaymentsContainer>
        <NoticeTitlePayment>Pagos realizados:</NoticeTitlePayment>
        {user.payment.payments.length > 0 ? (
          user.payment.payments.map((el, index) => (
            <BillItemContainer key={index}>
              <NamePayment>
                <GrDocumentPdf size="1.5rem" />
                Pago mes {el.month} del año {el.year}
              </NamePayment>
              <BillItem href={el.pdf} target="_blank" rel="noreferrer">
                {el.pdf} <FiDownload size="1.2rem" />
              </BillItem>
            </BillItemContainer>
          ))
        ) : (
          <NoData>Sin pagos disponibles.</NoData>
        )}
      </PaymentsContainer>
    </BillContainer>
  );
};

const BillContainer = styled.div``;

const NextPaymentContainer = styled.div`
  margin: 7vw 12vw 7vw 12vw;
  padding: 2vw;
  border-radius: 2rem;
  background-color: ${backgroundText};
  box-shadow: 0 0 4px 4px ${secondaryRed};
`;

const NoticeTitleNext = styled.h1`
  color: ${primaryRed};
`;

const Notice = styled.p`
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-left: 4vw;
  font-style: italic;
`;

const NoData = styled.p`
  margin-top: 2rem;
  margin-left: 4vw;
  font-size: 1.3rem;
  font-style: italic;
`;

const PaymentsContainer = styled(NextPaymentContainer)`
  box-shadow: 0 0 4px 4px ${secondaryBlue};
`;

const NoticeTitlePayment = styled(NoticeTitleNext)`
  color: ${primaryBlue};
`;

const BillItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colorText};
  margin: 2vw 5vw 1vw 5vw;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 6px 5px #ccc;
`;

const NamePayment = styled.p`
  font-size: 1.3rem;

  svg {
    margin-right: 1rem;
  }
`;

const BillItem = styled.a`
  margin-top: 1.3rem;
  text-decoration: none;

  svg {
    margin-left: 5px;
  }
`;
