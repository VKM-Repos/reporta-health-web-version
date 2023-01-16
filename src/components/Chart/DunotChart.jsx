import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Title,
    ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    ArcElement,
    Title
)

export default function DunotChart(props) {
    // console.log(props.data, props.labels)
    const data = {
        labels: props.labels,
        datasets: [{
            data: props.data,
            backgroundColor: props.colors
        }]
    }
    const options = {
        plugins: {
            labels: {
                render: 'value',
                percision: 2
            }
        }
    }
    return (
        <div className='h-[350px]'>
            <Doughnut data={data} options={options} />
            {
                props.labels?.length > 2
                    ? <div className="flex flex-wrap gap-5 w-[300px] text-sm mt-3"><div className="flex justify-center items-center gap-1"><div className="h-3 w-3 rounded-full bg-[#242F9B]"></div> Hospital </div><div className="flex justify-center items-center gap-1"><div className="h-3 w-3 rounded-full bg-[#54249B]"></div> Imaging </div><div className="flex justify-center items-center gap-1"><div className="h-3 w-3 rounded-full bg-[#247F9B]"></div> Laboratory </div><div className="flex justify-center items-center gap-1"><div className="h-3 w-3 rounded-full bg-[#9B247F]"></div> Phamacy </div></div>
                    :
                    <div className="flex gap-5 text-sm mt-3">
                        <div className="flex justify-center items-center gap-1"><div className="h-3 w-3 rounded-full bg-[#F806CC]"></div> Private </div><div className="flex justify-center items-center gap-1"><div className="h-3 w-3 rounded-full bg-[#242F9B]"></div> Government </div>
                    </div>
            }
        </div>
    )
}
