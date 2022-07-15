import React from 'react'
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts'

const PieChart = (props) => {

    const pieData = [
        {
            name: "India",
            share: 0.24,
        },
        {
            name: "Russian Federation",
            share: 0.26,
            explode: true,
        },
        {
            name: "Germany",
            share: 0.1,
        },
        {
            name: "World",
            share: 0.4,
        },
    ]
    const categories = [2002, 2003, 2004];

    return <>
        <div className='row gx-0 justify-content-center'>
            <div className='col-lg-5 inline-block'>
                <div className='k-card'>
                    <Chart
                        style={{
                        height: 350,
                        }}>
                        <ChartTitle text="Pie Chart" />
                        <ChartLegend position="top" orientation="horizontal" />
                        <ChartSeries>
                            <ChartSeriesItem
                                type="pie"
                                overlay={{
                                gradient: "sharpBevel",
                                }}
                                tooltip={{
                                visible: true,
                                }}
                                data={pieData}
                                categoryField="name"
                                field="share"
                            />
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
        </div>
    </>
}

export default PieChart