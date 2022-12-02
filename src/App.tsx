import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


function App() {
  return (
    <>
      <header>
        <Container maxWidth="xl" sx={{ p: 3 }}>
          <Header />
        </Container>
      </header>
      <main>
        <Container maxWidth="xl" sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <FilterForm />
            </Grid>
            <Grid item xs={10}>
              <Table />
            </Grid>
          </Grid>

        </Container>

      </main>
    </>
  );
}

export default App;
