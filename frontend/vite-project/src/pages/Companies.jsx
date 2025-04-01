import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';


const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/companies');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Company Showcase</Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:8000${company.imageUrl}`}
                alt={company.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {company.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompanyShowcase;