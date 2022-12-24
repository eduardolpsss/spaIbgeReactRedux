import { 
  Box,
  Container, 
  Typography, 
  Paper, 
} from '@mui/material'

export default function Footer() {
  return (
  <Paper sx={{marginTop: 'calc(10% + 60px)',
    width: '100%',
    position: 'fixed',
    bottom: 0
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Feito por Eduardo Pontes
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}