'use client'
import { useEffect } from 'react'
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

const Cut2ProficiencyChart = () => {

    // type ProficiencyData = {
    //     "Date": string,
    //     "Proficiency": number,
    // }
    // type TechniqueData = {
    //     "key": string,

    // }

    const data = [
        {
            Date: 'May 1st',
            Proficiency: 15,
        },
        {
            Date: 'May 2nd',
            Proficiency: 36,
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
            Proficiency: 97,
        },
    ]

    useEffect(() => {
        const getData = async () => {
            const url =
                'https://cloud-save.services.api.unity.com/v1/data/projects/23a02ed7-3fbd-43f1-b190-5ba54d029192/players/0gp1PduWn8fLdPwQXGQ1wrtILPLs/items'
            const bearer =
                'Bearer ' +
                'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InVuaXR5LWtleXM6MzU0OWFkNDMtN2RjYS00YTdkLTg2MWMtYjJmM2ZjZmMyZTAyIiwiamt1IjoiaHR0cHM6Ly9rZXlzLnNlcnZpY2VzLnVuaXR5LmNvbS8ifQ.eyJleHAiOjE3MTU1NTM5MjEsImlhdCI6MTcxNTU1MDMyMSwibmJmIjoxNzE1NTUwMzIxLCJqdGkiOiJlOTU3ZDcxMy00NTY3LTQyZjAtYTU3Ny02YjQyYmY4Y2Q0YmMiLCJzdWIiOiI4ZTU5NmVkMS01OGJjLTQ5MTYtYTg1Yi0yMWU0OTIyMmYzYzgiLCJ2ZXJzaW9uIjoxLCJpc3MiOiJodHRwczovL3NlcnZpY2VzLnVuaXR5LmNvbSIsImF1ZCI6WyJ1cGlkOjIzYTAyZWQ3LTNmYmQtNDNmMS1iMTkwLTViYTU0ZDAyOTE5MiIsImVudklkOjBlNGIzMGViLTc2OGEtNGU5OS1hYTQ1LTM4Y2Y0NzE0ODRhNiJdLCJzY29wZXMiOlsiYW1jLmFzc2V0cy5saXN0IiwiYW1jLmFzc2V0cy5yZWFkIiwiYW1jLmNvbGxlY3Rpb25zLmxpc3QiLCJhbWMuY29sbGVjdGlvbnMucmVhZCIsImFtYy5wcm9qZWN0cy5nZXQiLCJjbG91ZF9zYXZlLmRhdGEucmVhZCIsImNsb3VkX3NhdmUuZW50aXRpZXMubGlzdCIsImNsb3VkX3NhdmUuZmlsZXMubGlzdCIsImNsb3VkX3NhdmUuZmlsZXMucmVhZCIsImNsb3VkX3NhdmUuZmlsZXNfZW52LnJlYWQiLCJjbG91ZF9zYXZlLmluZGV4ZXMuZ2V0IiwiY2xvdWRfc2F2ZS5pbmRleGVzLmxpc3QiXSwiYXBpS2V5UHVibGljSWRlbnRpZmllciI6IjRiMmU1YWRmLTgzMTUtNDgxMy04OTEwLTUyZWMyNDUzMDUwNiJ9.sof6oFemoX0Xyf3WqkdAb97EyIUU6S50RhsSTxxbZ8rgF_o5RSjH48CwsowRdsEqFShl2KQRjCg8fdnlRV80D0SuYBTGemW9-YX8KypQzcOZ-Rv1O-CTsbPW6lFBfu_0r5Q5ebFifDFQGZHh6DtVHYkRHaQNWDBW-biynmVdB4BLJn1wPtpdBMVQtSg7ZdGg7V3vpCV-Pm9ElHcKERhPzcU4OVHuDgNvtBHoPjWDPTtDcj4AWJUVpiNbqpd7aUQbtGTDOTcrtxYuL3pTqgLzlxdtPmlr20bn0cUIHHOG8HfNy8GiwCJih2bo9v4bXpLjhb45Cx3JK8eEoSgfeLnDIw'
            const query = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            const response = await query.json()
            console.log('---------------------------------------------------')
            console.log('response from API: ', response.results)
        }
        getData()
    }, [])

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={730}
                    height={250}
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
                                stopColor="#82ca9d"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="#82ca9d"
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
                        stroke="#82ca9d"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}
export default Cut2ProficiencyChart
