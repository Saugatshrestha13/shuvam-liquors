import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  const history = useHistory()
  return <Container onClick={() => history.push('/estimation')}>This website also provides estimation party plan facility.</Container>
};

export default Announcement;
