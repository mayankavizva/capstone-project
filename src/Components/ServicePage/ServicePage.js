
import { Redirect } from "react-router"
import { useHistory } from "react-router-dom";
// import { Button } from '@material-ui/core';
import img1 from './image/bikeImg.png'
import img2 from './image/carImg.png'
import img3 from './image/autoImg.jpeg'
import img4 from './image/truckImg.jpeg'
import { padding, textAlign } from "@mui/system";


const ServicePage = () => {

  let history = useHistory()
  function clickHandlers(e) {
    e.preventDefault()
    history.push("/GetAQuote")
  }

  return (
    <>
      <div style={{ backgroundColor: "thistle", margin: 0, padding: 0, height: "100%" }}>
        <h1 style={{ textAlign: "center", padding: "50px" }}><strong>Our Services</strong></h1>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: "500px", margin: "20px", padding: "50px", marginLeft: "200px", marginRight: "100px" }}>
                <img src={img1} className="card-img-top" style={{ margin: "10px", padding: "10px" }} alt="loading" />
                <br />
                <div classNAme="card-body">
                  <h3 className="card-title">Bike Insurance</h3><br />
                  <p className="card-text">Just starting out? Get all the startup insurance coverage your company needs.Application
                    is easy and takes under ten minutes.</p>
                  <br /><br />
                  <a onClick={clickHandlers} className="btn btn-danger">Get A Quote</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{
                width: "500px", padding: "30px", marginLeft: "300px", marginRight: "100px"
                , marginBottom: "200px", marginTop: "20px", paddingBottom: "50px"
              }}>
                <img src={img2} className="card-img-top" style={{ margin: "10px", padding: "10px" }} alt="loading" />
                <div classNAme="card-body">
                  <h3 className="card-title">Car Insurance</h3>
                  <p className="card-text">A comprehensive car insurance policy, also known as motor package insurance, saves
                    you money when your car is damaged in an accident or natural calamity.It also covers your vehicle against
                    theft and burglary. At times, you may end up hurting others or damaging property in an accident.A car insurance
                    policy covers such third party liabilities as well.</p>
                  <a onClick={clickHandlers} className="btn btn-danger">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: "500px", margin: "20px", padding: "50px", marginLeft: "200px", marginRight: "100px" }}>
                <img src={img3} className="card-img-top" style={{ margin: "10px", padding: "10px" }} alt="loading" />
                <br />
                <div classNAme="card-body">
                  <h3 className="card-title">Auto Insurance</h3><br />
                  <p className="card-text">A comprehensive auto insurance policy,
                    also known as motor package insurance, saves you money when your auto is damaged in an accident or
                    natural calamity.It also covers your vehicle against theft and burglary. At times, you may end up
                    hurting others or damaging property in an accident.A auto insurance policy covers such third
                    party liabilities as well.</p>
                  <br /><br />
                  <a onClick={clickHandlers} className="btn btn-danger">Get A Quote</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "500px", padding: "30px", marginLeft: "300px", marginRight: "100px", marginBottom: "200px", marginTop: "20px", paddingBottom: "50px" }}>
                <img src={img4} className="card-img-top" style={{ margin: "10px", padding: "10px" }} alt="loading" />
                <div classNAme="card-body">
                  <h3 className="card-title">Truck Insurance</h3>
                  <p className="card-text">A comprehensive truck insurance policy,
                    also known as motor package insurance, saves you money when your truck is damaged in an accident or natural calamity.
                    It also covers your vehicle against theft and burglary. At times, you may end up hurting others or damaging property
                    in an accident.A truck insurance policy covers such third party liabilities as well.</p>
                  <a onClick={clickHandlers} className="btn btn-danger">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicePage;