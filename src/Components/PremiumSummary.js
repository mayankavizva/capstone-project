import React from 'react'
import "./PremiumSummary.css"

export const PremiumSummary = () => {
    return (
        <div>
            <h1>Premium Summary</h1><br/>
            <h2>Policy Start Date : 01/01/2021</h2>
            <h2>Policy End Date   : 01/01/2022</h2>
            <table >
                <tr>
                    <th>Policy No</th>
                    <th>Items</th>
                    <th>Coverage</th>
                    <th>Premium</th>
                </tr>
                <tr>
                    <td>101</td>
                    <td>Computers,Desktop,Monitors</td>
                    <td>120000 INR</td>
                    <td>10000 INR(per anum)</td>
                </tr>
            </table>
            <br/>
            <table>
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
            </table>
        </div>
    )
}
