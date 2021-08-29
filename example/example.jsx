import { Highligther } from "@unlimited-react-components/react-highlight";
const App = (props) => {
const makeCode = () => {
  return `
  //creating themes
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
  };
    /*    this is a 
  comment */
  .
  .
  .
  function ThemedButton() {
    const theme = useContext(ThemeContext);  
    return (    
        <button style={{ 
            background: theme.background, 
            color: theme.foreground 
          }}>      
            I am styled by theme context!    
        </button>
    );
  }
  `;
}
  return (
    <Highligther 
        code={makeCode()}>
    </Highligther>
  );
};
export default App;
