import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 3px solid #23231e;
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #23231e;
  }

  & th {
    background-color: #23231e;
    font-weight: bold;
    color: #faecca;
  }

  & td {
    background-color: #23231e;
    color: #f4f0e6;
  }

  & td:hover,
  & td:hover ~ td {
    background-color: #171716;
  }
`;
