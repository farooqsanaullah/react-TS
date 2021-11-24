
import './App.css';
import { CssProps } from './components/props-components/CcsProps';
import { ComponentAsChildrenProps } from './components/props-components/ComponentAsChildrenProps';
import { FunctionAsProps } from './components/props-components/FunctionAsProps';
import { Greet } from './components/props-components/Greet';
import { HeadingChildrenProps } from './components/props-components/HeadingChildrenProps';
import { InputComponentProps } from './components/props-components/InputComponentProps';
import { PersonListProps } from './components/props-components/PersonListProps';
import { PersonObjectProps } from './components/props-components/PersonObjectProps';
import { StatusUnionProps } from './components/props-components/StatusUnionProps';
function App() {
  let personObject =
  {
    firstName: 'Farooq',
    lastName: "Sanaullah"
  }

  let personList = [
    {
      firstName: 'Farooq',
      lastName: "Sanaullah"
    },
    {
      firstName: 'Hamza',
      lastName: "Sarwar"
    }]


  return (
    <div className="App">
      {/* <Greet name="Farooq" messageCount={10} isLoggedIn={true} /> */}
      {/* <PersonObjectProps name={personObject} /> */}
      {/* <PersonListProps names={personList}/> */}
      {/* <StatusUnionProps status={"loading"} /> */}
      {/* <HeadingChildrenProps >Placeholder text</HeadingChildrenProps>
      <ComponentAsChildrenProps>
      <HeadingChildrenProps >Placeholder text</HeadingChildrenProps>
      </ComponentAsChildrenProps> */}
      {/* start return void type of funcution props */}
      {/* <FunctionAsProps handleClick={() => { console.log("press click me button") }} /> */}
      {/* end return void type of funcution props */}

      <FunctionAsProps handleClick={(event, id) => { console.log("press click me button", event, id) }} />

      <InputComponentProps value="" handleChange={(event) => { console.log("input value" ,event.target.value)}}/>
      <CssProps styles={{border: "1px solid black",padding: "1rem"}}/>

    </div>
  );
}

export default App;
