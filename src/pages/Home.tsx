import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Typography, Box } from '@mui/material';
import SelectEstados from '../components/SelectEstados';
import SelectMunicipio from '../components/SelectMunicipio';
import InfoTable from '../components/InfoTable';

export default function Home() {
	return (
		<>
			<NavBar />

            <Typography variant="h4" gutterBottom m={3}>
                Seletor de estados e municípios
            </Typography>

            <Typography variant="body1" gutterBottom m={3}>
                Escolha um estado e um município para ver as informações vinculadas a ele.
            </Typography>

            <Container maxWidth="md">
                <Box
                    sx={{
                        mb: 3,
                    }}
                >
                    <SelectEstados />
                </Box>

                <Box
                    sx={{
                        mb: 3,
                    }}
                >
                    <SelectMunicipio />
                </Box>

                <Box
                    sx={{
                        mt: 10,
                    }}
                >
                    <InfoTable />
                </Box>
            </Container>

            <Footer />
		</>
	);
};
