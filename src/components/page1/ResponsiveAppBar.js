import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {Link} from 'react-router-dom';
import "./ResponsiveAppBar.css";

const pages = ["Home", "About Us", "Contact Us"];
const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="body">
      <div>
        <AppBar style={{ background: "rgb(69, 139, 162" }} position="fixed">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <VolunteerActivismIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography
                fontSize="25px"
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: "100px",
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Supportify
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="larger"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <VolunteerActivismIcon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Supportify
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <div className="btn">
                <Button variant="outlined" className="btn1">
                  <Link to='./Login'>Login</Link>
                </Button>
                <Button variant="outlined" className="btn1"><Link to='/Signup'>Sign-Up</Link></Button>
              </div>
              
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="M" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="back">
          <br />
          <br />
          <br />
          <img
            src="https://imgproxy.epicpxls.com/si255A3lxtpuaqZRl-XcpC79V3KXGaQclRVbdVephEs/rs:fill:409:307:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by9kOTMwYzAz/YzBiYjAyM2Y3MDU4/ODkzNGNmZDI1MWFh/Mg.jpg"
            alt="img"
          />
          <h1>Give a helping</h1> <h1>hand to those</h1>
          <h1>who need it !!!</h1>
          <br />
          <p>
            To the Homeless & Hopeless People
            <br />
            Give a hand to make the better World
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <div className="heading1">
          <p>Need a change? Make a Donation</p>
        </div>
        <br />
        <div>
          <div className="card1">
            <Card
              sx={{
                width: 200,
                height: 250,
                border: "3px solid #e0e0e0",
                borderRadius: "15px",
                borderColor: "black",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="100"
                  image="https://img.freepik.com/premium-vector/donation-boxes-with-canned-food-illustration-freshly-prepared-food-packaged-sealed-jars-helping-people-need-poor-people-giving-out-charities-saving-from-hunger-vector-kindness_146957-1033.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="bold"
                    color="darkblue"
                  >
                    FOOD
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" color="primary" variant="contained">
                  Donate
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="card1">
            <Card
              sx={{
                width: 200,
                height: 250,
                border: "3px solid #e0e0e0",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="100"
                  image="https://thumbs.dreamstime.com/b/donation-box-clothes-box-warm-clothes-55013355.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="bold"
                    color="darkblue"
                  >
                    CLOTHES
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" color="primary" variant="contained">
                  Donate
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="card1">
            <Card
              sx={{
                width: 200,
                height: 250,
                border: "3px solid #e0e0e0",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="100"
                  image="https://www.creativefabrica.com/wp-content/uploads/2023/07/03/Blood-donation-set-in-doodle-style-Graphics-73600735-1-580x387.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="bold"
                    color="darkblue"
                  >
                    BLOOD
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" color="primary" variant="contained">
                  Donate
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="card1">
            <Card
              sx={{
                width: 200,
                height: 250,
                border: "3px solid #e0e0e0",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="100"
                  image="https://static.mygov.in/static/s3fs-public/mygov_1444633748190667.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="bold"
                    color="darkblue"
                  >
                    ORGAN
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" color="primary" variant="contained">
                  Donate
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <br />
        <br />
        <div className="heading1">
          <p>Help the Needy? Explore here...</p>
        </div>
        <br />
        <div>
          <div className="card1">
            <Card
              sx={{
                maxWidth: 300,
                height: 250,
                border: "3px solid #e0e0e0",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="100"
                  image="https://www.utep.edu/extendeduniversity/utepconnect/blog/august-2018/ways-to-afford-your-return-to-school.jpg"
                  alt="green iguana"
                  borderColor="black"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="bold"
                    color="darkblue"
                  >
                    EDUCATION
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" color="primary" variant="contained">
                  Donate
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="card1">
            <Card
              sx={{
                width: 200,
                height: 250,
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="100"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE9oDwhtABXxCnGM4Fpu4tiUcf6BptbbG4A&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="bold"
                    color="darkblue"
                  >
                    ORPHANS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" color="primary" variant="contained">
                  Donate
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="card1">
            <Card
              sx={{
                width: 200,
                height: 250,
                border: "3px solid #e0e0e0",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="100"
                  image="https://i0.wp.com/ketto.blog/wp-content/uploads/2023/10/old-age-homes-in-vijayawada.jpg?fit=1024%2C576&ssl=1"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="bold"
                    color="darkblue"
                  >
                    OLD AGE
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" color="primary" variant="contained">
                  Donate
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className="card1">
            <Card
              sx={{
                width: 200,
                height: 250,
                border: "3px solid #e0e0e0",
                borderRadius: "10px",
                borderColor: "black",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  width="100"
                  image="https://doc.utimf.com/v1/AUTH_5b9dd00b-8132-4a21-a800-711111810cee/UTIContainer/image1%20(1)20201104-123022.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="bold"
                    color="darkblue"
                  >
                    HEALTH
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button size="small" color="primary" variant="contained">
                  Donate
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <br />
        <br />
        <Box  className="foot"
          component="footer"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            p: 6,
          }}>
          <Container width="100%">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are XYZ company, dedicated to providing the best service to
                  our customers.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Main Street, Anytown, USA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: info@example.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: +1 234 567 8901
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Follow Us
                </Typography>
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Container>
        </Box>
        <br />
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
