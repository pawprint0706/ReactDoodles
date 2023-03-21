import styled from 'styled-components';
import GridLayout from 'react-grid-layout';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

const Main = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  place-content: center stretch;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
`;

const Header = styled.div`
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: gray;
  font-size: 30px;
  font-weight: bold;
`;

const Footer = styled.div`
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: gray;
  font-size: 30px;
  font-weight: bold;
`;

const WidgetA = styled.div`
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: red;
  
`;
const WidgetAParam = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const WidgetB = styled.div`
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: yellow;
`;
const WidgetBParam = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const WidgetC = styled.div`
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: green;
`;
const WidgetCParam = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const WidgetD = styled.div`
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: purple;
`;
const WidgetDParam = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1, isResizable: false },
    { i: "b", x: 1, y: 0, w: 2, h: 2, isResizable: false },
    { i: "c", x: 3, y: 0, w: 2, h: 1, isResizable: false },
    { i: "d", x: 0, y: 2, w: 4, h: 1, isResizable: false },
  ];
  return (
    <Main>
      <Header>Header</Header>
        <GridLayout
          className="layout"
          layout={layout}
          cols={6}
          rowHeight={276}
          width={1920}
          isBounded={true}
        >
          <WidgetA key="a"><WidgetAParam>A<br/>1x1</WidgetAParam></WidgetA>
          <WidgetB key="b"><WidgetBParam>B<br/>2x2</WidgetBParam></WidgetB>
          <WidgetC key="c"><WidgetCParam>C<br/>2x1</WidgetCParam></WidgetC>
          <WidgetD key="d"><WidgetDParam>D<br/>4x1</WidgetDParam></WidgetD>
        </GridLayout>
      <Footer>Footer</Footer>
    </Main>
  );
}

export default App;
