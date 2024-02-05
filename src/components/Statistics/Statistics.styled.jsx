import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding: 60px 60px;
  background-color: #23231e;
`;

export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  background-color: #f4f0e6;
  font-size: 20px;
  font-weight: 700;
`;

export const StatList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const StatItem = styled.li`
  padding: 10px 5px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #f4f0e6;
`;

export const Percentage = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin-top: 5px;
  color: #faecca;
`;
