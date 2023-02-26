import './App.css'
import { Outlet, ScrollRestoration } from "react-router-dom";
import { AppShell, Container, createStyles, Stack } from '@mantine/core';
import HeaderSearch from './components/reusables/HeaderSearch';
import FooterReusable from './components/reusables/FooterReusable';

const useStyles = createStyles((theme) => ({
  mainFlex: {
    width: '100%',
    maxWidth: '1500px'
  },
}));

function App() {
  const { classes } = useStyles();

  const []

  return (
    <div className="App">
      <AppShell
        padding="md"
        header={<HeaderSearch></HeaderSearch>}
        footer={<FooterReusable></FooterReusable>}
      >
        <Container>
          <Stack className={classes.mainFlex} spacing={48}>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
          </Stack>
        </Container>
      </AppShell>
    </div >
  )
}

export default App
