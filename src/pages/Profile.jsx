
import * as React from 'react';

import { Avatar } from '@progress/kendo-react-layout'
import userAvatar from '../assets/user-avatar.jpg'
import { GridColumn, Grid } from '@progress/kendo-react-grid';
import {data} from '../resources/portfolio'
import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartTooltip } from '@progress/kendo-react-charts';

const Profile = () => {
    return (
        <>
            <div id="Profile" className="profile-page main-content">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-3">
                        <h1 style={{fontSize: "2.7rem", fontFamily: "sans-serif"}}>My Portfolio</h1>
                        <Avatar style={{width: 100, height: 100, marginLeft: "4rem"}} shape={'circle'} type="image">
                            <img style={{borderRadius: "100px"}} src={userAvatar} alt="user-avatar"/>
                        </Avatar>
                        <h2 style={{marginLeft: "2.5rem", fontWeight: "normal"}}>Steve Rogers</h2>
                        <div style={{marginTop: "2rem"}}>
                            <div className='mt-5'>
                                <span className='font'>Current Value </span> <span className='ml-5' style={{fontSize: "2rem"}}>$100</span>  
                            </div>
                            <div className='mt-5'>
                                <span className='font'>24H Change </span> <span className='green ml-5'>$20</span> 
                            </div>
                            <div className='mt-5'>
                                <span className='font'>% Change </span> <span className='green ml-5'>+1.4</span> 
                            </div>
                            <div className='mt-5'>
                                <span className='font'>Total Cost </span> <span className='ml-5'>$9,872</span> 
                            </div>
                            <div className='mt-5'>
                                <span className='font'>Total Profit </span> <span className='red ml-5'>$-2,876</span> 
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                    <Grid data={data}>
                        <GridColumn field='symbol' title="Symbol" />
                        <GridColumn field='name' title="Name" width={200} />
                        <GridColumn field="proportion" title='Proportion' format={"{0:p2}"} />
                    </Grid>
                    </div>
                    <div className="col-3">
                        <Chart>
                            <ChartLegend position='bottom' />
                            {/* <ChartTooltip /> */}
                            <ChartSeries>
                                <ChartSeriesItem data={data} field='proportion' type='pie' />
                            </ChartSeries>
                        </Chart>
                    </div>
                </div>
            </div>
            <style>{`
            .font{
                display: inline-block;
                width: 100px;
                font-size: 1rem;
                font-weight: lighter;
            }
            .red{
                color: red;
            }
            .green{
                color: green;
            }
            .ml-5{
                margin-left: 2rem;
            }
            .mt-5{
                margin-top: 2rem;
            }
            .k-grid td:first-child{
                color: #2b0cdf;
                font-size: 1.07rem;
            }
            `}</style>
        </>
    );
}

export default Profile;
