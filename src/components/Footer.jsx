import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const footerStyle = {
  root: {
    backgroundColor: "#f5f5f5",
    padding: "48px 0",
    marginTop: "auto",
  },
  link: {
    textDecoration: "none",
  },
};

function Footer() {
  return (
    <Box
      component="footer"
      className=" bottom-0 mt-10 dark:bg-black bg-white  dark:bg-opacity-[5%]"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Company
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="dark:text-white"
            >
              We are a leading provider of online listen music programs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Links
            </Typography>
            <List>
              <ListItem>
                <Link className="dark:text-white " to="/">
                  <Box sx={footerStyle.link}>Home</Box>
                </Link>
              </ListItem>

              <ListItem>
                <Link className="dark:text-white " to="/courses">
                  <Box sx={footerStyle.link}>Courses</Box>
                </Link>
              </ListItem>

              <ListItem>
                <Link className="dark:text-white " to="/">
                  <Box sx={footerStyle.link}>About Us</Box>
                </Link>
              </ListItem>

              <ListItem>
                <Link className="dark:text-white " to="/">
                  <Box sx={footerStyle.link}>Contact Us</Box>
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Address
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="dark:text-white"
            >
              123 Main St
              <br />
              Anytown, VN
              <br />
              12345
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className="dark:text-white"
            >
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default Footer;
