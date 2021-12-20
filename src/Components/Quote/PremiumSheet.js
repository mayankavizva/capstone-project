import React from 'react';
import "./PremiumSheet.css";
function PremiumSheet() {
    return (
        <div>
            <h1 style={{fontSize:"30px"},{alignContent:"center"}}>Premium Sheet</h1>
             <br/>
            <h2 className="header22" style={{fontSize:"22px"},{alignContent:"center"}}>Policy Information</h2>
            <h3 style={{fontSize:"20px"}}>Policy Number : 5556798093213</h3>
            <br />
            <br/>
            <h1 className="header33" style={{fontSize:"22px"}}>General Information</h1>
            <table >
                <tr>
                    <th>Policy Owner Name</th>
                    <th>Gender</th>
                    <th>Residence of the Insured</th>
                    <th>Premium Amount(per Annum)</th>
                    <th>Type Of Insurance</th>
                </tr>
                <tr>
                    <td>Vaibhav Jadon</td>
                    <td>Male</td>
                    <td>Basai Enclave,Gurgaon</td>
                    <td>22000 INR</td>
                    <th>Individual</th>
                </tr>
            </table>
            <br/>
            <form>
                <h1></h1>
            </form>
            {/* <table>
                <tr>
                    <th>Policy No</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Date Of Purchase</th>
                    <th>Price(Total)</th>
                </tr>
                <tr>
                    <td>101</td>
                    <td>Computer</td>
                    <td>200</td>
                    <td>01/01/2021</td>
                    <td>120000 INR</td>
                </tr>
                <tr>
                    <td>101</td>
                    <td>Monitor</td>
                    <td>100</td>
                    <td>01/02/2021</td>
                    <td>116000 INR</td>
                </tr>
                <tr>
                    <td>101</td>
                    <td>Desktop</td>
                    <td>200</td>
                    <td>01/03/2021</td>
                    <td>130500 INR</td>
                </tr>
            </table> */}
        </div>
    )
}

export default PremiumSheet;
