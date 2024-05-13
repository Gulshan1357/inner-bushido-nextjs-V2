'use client'
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

const CutProficiencyChart = () => {
    const data = [
        {
            Date: 'May 1st',
            Proficiency: 5,
        },
        {
            Date: 'May 2nd',
            Proficiency: 16,
        },
        {
            Date: 'May 3rd',
            Proficiency: 46,
        },
        {
            Date: 'May 4th',
            Proficiency: 67,
        },
        {
            Date: 'May 5th',
            Proficiency: 83,
        },
        {
            Date: 'May 6st',
            Proficiency: 67,
        },
    ]

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={730}
                    height={150}
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#8884d8"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#8884d8"
                                stopOpacity={0}
                            />
                        </linearGradient>
                        <linearGradient
                            id="colorPv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Proficiency"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}
export default CutProficiencyChart
