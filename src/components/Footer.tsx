import { 
  Box,
  Container, 
  Typography, 
  Paper, 
  IconButton,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            m: 1
          }}
        >
          <Typography variant="body2" color="grey">
            Feito por Eduardo Pontes
          </Typography>

          <IconButton
            href="https://eduardopontes.netlify.app/"
            target={"_blank"}
            sx={{ ml: 1, color: 'grey'}}
          >
            <AccountCircleIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/eduardolpsss/"
            target={"_blank"}
            sx={{ ml: 0.5, color: 'grey'}}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="https://github.com/eduardolpsss/spaIbgeReactRedux"
            target={"_blank"}
            sx={{ ml: 0.5, color: 'grey' }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Container>
    </Paper>
  );
}