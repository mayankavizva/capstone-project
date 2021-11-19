import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Cards/Cards.css";
export default function ImgMediaCard() {
  return (
    <div>
      <div className="cards">
        <Card sx={{ maxWidth: 300 }} className="innerDiv">
          <div>
            <CardMedia component="img" alt="" height="140" image="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Startup
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Just starting out? Get all the startup insurance coverage your
                company needs. Application is easy and takes under ten minutes.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="fw-bold bt" size="small">
                Learn More
              </Button>
            </CardActions>
          </div>
        </Card>
        <Card sx={{ maxWidth: 300 }} className="innerDiv">
          <div>
            <CardMedia component="img" alt="" height="140" image="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Growth Stage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Scaling up? Investment of $50m and above? Our Growth Stage
                package is your tailored all-in-one solution.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="fw-bold bt" size="small">
                Learn More
              </Button>
            </CardActions>
          </div>
        </Card>
        <Card sx={{ maxWidth: 300 }} className="innerDiv">
          <div>
            <CardMedia component="img" alt="" height="140" image="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Law
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full protection for your practice with A+ rated, best-in-class
                legal liability coverage.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="fw-bold bt" size="small">
                Learn More
              </Button>
            </CardActions>
          </div>
        </Card>
        <Card sx={{ maxWidth: 300 }} className="innerDiv">
          <div>
            <CardMedia component="img" alt="" height="140" image="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Private Company
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Haven’t received funding but still need D&O and EPL Insurance?
                Our fully digital solution has best-in-class coverage and
                pricing.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="fw-bold bt" size="small">
                Learn More
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    </div>
  );
}
