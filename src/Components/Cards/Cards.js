import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import '../Cards/Cards.css'
export default function ImgMediaCard() {
  return (
    <div className="cards">
      <Card sx={{ maxWidth: 300 }} className="innerDiv">
        <div>
          <CardMedia  ><img src="images/bikeImg.png" alt="Loading" height="140"/></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bike Insurance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Just starting out? Get all the startup insurance coverage your
              company needs. Application is easy and takes under ten minutes.
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="fw-bold bt" size="small">
              <a href="https://www.bankbazaar.com/two-wheeler-insurance/guide/a-beginner-guide-to-two-wheeler-insurance.html">Learn More</a>
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="innerDiv">
        <div>
          <div>
          <CardMedia  ><img src="images/carImg.png" alt="Loading" height="140"/></CardMedia>
          </div>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Car Insurance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Scaling up? Investment of $50m and above? Our Growth Stage package
              is your tailored all-in-one solution.
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="fw-bold bt" size="small">
            <a href="https://www.investopedia.com/articles/pf/08/beginner-guide-auto-insurance.asp">Learn More</a>
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="innerDiv">
        <div>
        <CardMedia  ><img src="images/third-party-insurance.svg" alt="Loading" height="140"/></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Third Party
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Full protection for your practice with A+ rated, best-in-class
              legal liability coverage.
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="fw-bold bt" size="small">
             <a href="https://www.iffcotokio.co.in/motor-insurance/what-is-third-party-insurance-cover-and-how-it-works" >Learn More</a>
            </Button>
          </CardActions>
        </div>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="innerDiv">
        <div>
        <CardMedia  ><img src="images/insuranceClaim.jpeg" alt="Loading" height="140" width="300"/></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Claim Insurance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Haven’t received funding but still need D&O and EPL Insurance? Our
              fully digital solution has best-in-class coverage and pricing.
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="fw-bold bt" size="small">
              <a href="https://www.thebalance.com/understanding-insurance-claims-2645921">Learn More</a>
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  )
}
