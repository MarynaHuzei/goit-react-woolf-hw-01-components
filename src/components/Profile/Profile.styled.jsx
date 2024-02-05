import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 340px;
  margin: 0 auto;
  padding: 70px 50px;
  background-color: #23231e;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  width: 240px;
  height: 220px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f4f0e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 100px;
  display: block;
  margin: 0 auto 20px;
  border-radius: 50%;
  border: 1px solid #e6e3dc;
`;

export const Name = styled.p`
  text-align: center;
  color: #23231e;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  text-align: center;
  color: #23231e;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  text-align: center;
  color: #23231e;
`;

export const Stats = styled.ul`
  width: 262px;
  height: 100px;
  background-color: #faecca;
  margin: 0 auto;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
  flex: 1;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
`;
