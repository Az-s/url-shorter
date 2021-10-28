import { Typography, Grid } from '@mui/material';
import InputForm from './components/InputForm/InputForm';
import ShorterButton from './components/Button/ShorterButton';
import ShorterLink from './components/ShorterLink/ShorterLink';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography variant="h3" gutterBottom component="div" mt={5}>
        Shorten your link!
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        autoComplete="off"
        mt={3}
      >
        <Grid item >
          <InputForm />
        </Grid>
        <Grid>
          <ShorterButton />
        </Grid>
      </Grid>
      <ShorterLink />
    </div>
  );
}

export default App;
