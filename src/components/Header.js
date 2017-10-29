import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import styled from "styled-components";

const Wrapper = styled.div`margin-bottom: 4em;`;

export default ({ title }) => (
  <Wrapper>
    <AppBar position="static" color="#fff">
      <Toolbar>
        <Typography type="title" color="inherit">
          Chrono
        </Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  </Wrapper>
);
