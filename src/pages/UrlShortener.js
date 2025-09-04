import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

function UrlShortener() {
  const [url, setUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) return;

    const code = customCode || Math.random().toString(36).substring(2, 8);
    const shortUrl = `${window.location.origin}/${code}`;

    setShortenedUrls((prev) => [
      ...prev,
      { original: url, short: shortUrl },
    ]);

    setUrl("");
    setCustomCode("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          URL Shortener
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Enter a URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <TextField
            label="Custom Code (optional)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customCode}
            onChange={(e) => setCustomCode(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Shorten
          </Button>
        </Box>

        {shortenedUrls.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Shortened URLs</Typography>
            <List>
              {shortenedUrls.map((item, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={
                      <>
                        <strong>Original:</strong>{" "}
                        <a href={item.original} target="_blank" rel="noreferrer">
                          {item.original}
                        </a>
                      </>
                    }
                    secondary={
                      <>
                        <strong>Short:</strong>{" "}
                        <a href={item.short} target="_blank" rel="noreferrer">
                          {item.short}
                        </a>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default UrlShortener;
