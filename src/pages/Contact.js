import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <Paper>
      <div className="right-paper-cont">
        <div className="title-head">
          <span></span>
          <Typography variant="h5">Contact</Typography>
        </div>
      </div>
      <Container maxWidth="sm">
        <form className="container">
          <TextField
            label="Full Name"
            placeholder="Enter Your Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "30px" }}
          />
          <TextField
            label="Email"
            placeholder="Enter Your Email"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "30px" }}
          />
          <TextField
            label="Message"
            placeholder="Enter Your Message"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            style={{ marginBottom: "30px" }}
          />
          <Button color="primary" variant="contained">
            Send
          </Button>
        </form>
      </Container>
    </Paper>
  );
};
