import React from 'react'
import capstone from '../Components/images/capstone.jpeg'
import ImgMediaCard from './Cards/Cards'
import { useHistory } from 'react-router-dom'
import '../Components/HomeComponent.css'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  contentSubheading: {
    fontWeight: 900,
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imgRight: {
    background: 'url(images/insuranceMainImg.svg)',
    backgroundSize: '105% 100%',
    backgroundPosition: 'left',
    width: 400,
    height: 350,
    borderRadius: '50%',
  },
  quoteBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0px 50px 0px',
    '& button': {
      width: 200,
    },
  },
  industryHeading: {
    fontWeight: 'bold',
  },
}))

const HomeComponent = () => {
  let history = useHistory()
  const classes = useStyles()
  return (
    <div className="div_outer">
      <div className="inner_content">
        <div className={classes.bannerContainer}>
          <div>
            <Typography variant={`h2`}>{`EZInsure`}</Typography>
            <Typography
              variant={`h2`}
              className={classes.contentSubheading}
            >{`Radically Simple`}</Typography>
            <div className="list">
              <ul>
                <li>
                  <Typography
                    variant={`h6`}
                  >{`Get Insured in 30 minutes`}</Typography>
                </li>
                <li>
                  <Typography variant={`h6`}>{`Lowest Prices`}</Typography>
                </li>
                <li>
                  <Typography
                    variant={`h6`}
                  >{`Customized Policies`}</Typography>
                </li>
                <li>
                  <Typography variant={`h6`}>{`Talk to an Expert`}</Typography>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.imgRight}>
            {/* <img src={capstone} alt="Loading Image..." /> */}
          </div>
        </div>
        <div className={classes.quoteBtnContainer}>
          <button
            id="quote"
            onClick={() => {
              history.push('/getaquote')
            }}
            className={'getAQuoteBtn'}
          >
            Get A Quote
          </button>
        </div>
        <Typography variant="h4" className={classes.industryHeading}>
          {`Industry Specific Coverage
            `}
        </Typography>
        <ImgMediaCard />
      </div>
    </div>
  )
}

export default HomeComponent
