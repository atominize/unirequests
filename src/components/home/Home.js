import { Container, Typography } from "@material-ui/core";

import useStyles from "../../styles";

const Home = () => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.container}>
        <Container maxWidth="md" align="center">
          <Typography variant="h4" color="primary">
            Welcome To UniRequests
          </Typography>
          <Typography variant="h6" color="textSecondary">
            We Help You To Obtain Your Documents From KNUST. Documents Such As
            Transcripts, Certified Copies Of Certificates And Transcripts,
            Recommendation Letters And English Proficiency.
          </Typography>
        </Container>
      </div>
    </main>
  );
};

export default Home;
