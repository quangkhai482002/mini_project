import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { RouterLink } from "../../routes/components';
import { SimpleLayout } from "../../layouts/simple';

export function NotFoundView() {
  return (
    <SimpleLayout content={{ compact: true }}>
      <Container>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
          sure to check your spelling.
        </Typography>

        <Typography sx={{ color: 'text.secondary', fontSize: '5rem', my: { xs: 5, sm: 10 } }}>
          404
        </Typography>

        <Button component={RouterLink} href="/" size="large" variant="contained" color="inherit">
          Go to home
        </Button>
      </Container>
    </SimpleLayout>
  );
}
