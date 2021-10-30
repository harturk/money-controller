import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

/* <h1 className="title">Hello World</h1> 

.title {
    font-size: 64px;
    color: #8257E6;
};

*/
/*const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`; */

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
