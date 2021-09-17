import React from 'react';
import './taxRates.css';

const TaxRates = () => {
    return (
        <div className="taxRate">
            <div className="twoWheelerTitle">Two Wheeler</div>
            <div className="twoWheelerSection">
                <div className="leftSection">
                    <div className="sectionTitle">Tax Rate</div>
                    <table>
                        <tr>
                            <th>S.N.</th>
                            <th>Engine (CC)</th>
                            <th>Price (NRs.)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Up to 125</td>
                            <td>3,000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>126 to 150</td>
                            <td>5,000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>151 to 225</td>
                            <td>6,500</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>226 to 400</td>
                            <td>11,000</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>401 to 650</td>
                            <td>20,000</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>651 and higher</td>
                            <td>30,000</td>
                        </tr>
                        <tr className="blankRow">
                            <td colspan="3"> </td>
                        </tr>
                        <tr>
                            <td colspan="3" className="note">
                                Note: Rs. 300 will be added on Tax amount per year as renewal charge.
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="rightSection">
                    <div className="sectionTitle">Third-Party Insurance Policy Rate </div>
                    <table>
                        <tr>
                            <th>S.N.</th>
                            <th>Engine (CC)</th>
                            <th>Price (NRs.)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Up to 149</td>
                            <td>1,715</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>150 to 250</td>
                            <td>1,941</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>251 to higher</td>
                            <td>2,167</td>
                        </tr>
                        <tr className="blankRow">
                            <td colspan="3"> </td>
                        </tr>
                        <tr>
                            <td colspan="3" className="note">
                                Note : As per the rule of Government of Nepal, Third Party Insurance is compulsory.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <hr />
            <div className="fourWheelerTitle">Four Wheeler</div>
            <div className="fourWheeler">
                <br />

                <div className="leftSection">
                    <div className="sectionTitle">Tax Rate</div>
                    <table>
                        <tr>
                            <th>S.N.</th>
                            <th>Engine (CC)</th>
                            <th>Price (NRs.)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Up to 1000</td>
                            <td>22,000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1001 to 1500</td>
                            <td>25,000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>1501 to 2000</td>
                            <td>27,000</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>2001 to 2500</td>
                            <td>37,000</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>2501 to 3000</td>
                            <td>50,000</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>3001 to 3500</td>
                            <td>60,000</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>3501 and higher</td>
                            <td>65,000</td>
                        </tr>
                        <tr className="blankRow">
                            <td colspan="3"> </td>
                        </tr>
                        <tr>
                            <td colspan="3" className="note">
                                Note: Rs. 400 will be added on Tax amount per year as renewal charge.
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="rightSection">
                    <div className="sectionTitle">Third-Party Insurance Policy Rate </div>
                    <table>
                        <tr>
                            <th>S.N.</th>
                            <th>Engine (CC)</th>
                            <th>Price (NRs.)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Up to 1000</td>
                            <td>7,365</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1001 to 1600</td>
                            <td>8,495</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>1601 to higher</td>
                            <td>10,747</td>
                        </tr>
                        <tr className="blankRow">
                            <td colspan="3"> </td>
                        </tr>
                        <tr>
                            <td colspan="3" className="note">
                                Note : As per the rule of Government of Nepal, Third Party Insurance is compulsory.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaxRates;
