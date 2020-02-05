import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6'],
                datasets: [
                    {
                        label: 'Pop',
                        data: [1,2,3,4,5,6],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 132, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 99, 64)'
                        ]
                    }
                ]
            }

        }
    }
    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Activity Line Chart',
                            fontSize: 20

                        }
                    }}
                />

                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Activity Line Chart',
                            fontSize: 20

                        }
                    }}
                />

                <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Activity Line Chart',
                            fontSize: 20

                        }
                    }}
                />


            </div>
        )
    }
}

export default Chart;
