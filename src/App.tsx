import { useState } from "react";
import { SelectEstado } from "./components/selectEstado";
import { SelectMunicipio } from "./components/selectMunicipio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { 
  Box,
  Container,
  Typography, 
  Grid, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  InputLabel, 
  MenuItem 
} from '@mui/material'
import Select from "react-select";

export default function App() {
  const [selectedUf, setSelectedUf] = useState("");

  return (
    <div className="App">
      <NavBar />

      <Typography variant="h4" gutterBottom m={3}>
        Seletor de estados e municípios
      </Typography>


      <Container maxWidth="md">
      <Box
        sx={{mb: 2.5}}
      >
        <SelectEstado onChange={setSelectedUf} />
      </Box>

      <Box
        sx={{mb: 2.5}}
      >
        {selectedUf != '' ? 
        (
          <Box>
            <SelectMunicipio uf={selectedUf} />
          </Box>
        
        ) 
        : 
        ( 
          <Box
            sx={{mb: 2.5}}
          >
            <Select
              placeholder="Selecione um municipio"
              isDisabled={true}
            />
          </Box>
        )}
      </Box>
      </Container>

      <Footer />
    </div>
  );
}
