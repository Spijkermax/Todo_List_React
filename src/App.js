import './App.css';
import TodoList from './todos/TodoList';
import Grid from '@material-ui/core/Grid';
import Logo from './Photo_Resources/logonew.png';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
      <Grid item xs = {12}>
        <img src={Logo} width="150px" height="150px"/>
        <h1>The Flat App</h1>
      </Grid>
      <Grid item xs = {3}>
      <TodoList/>
      </Grid>
      <Grid item xs = {3}>
        Shopping list
      </Grid>
      <Grid item xs = {6}>
        Flatmates
      </Grid>
     </Grid>
    </div>
  );
}

export default App;
