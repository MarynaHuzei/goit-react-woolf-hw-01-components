import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #23231e;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 60px;
  padding-left: 40px;
  margin-top: 50px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 30px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 10px;
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  margin-left: 20px;
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  color: #faecca;
`;
