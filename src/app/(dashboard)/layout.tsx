import Navbar from '@/components/NavBar'
import Sidebar from '@/components/SideBar'
import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const DashboardLayout = ({ children, ...props }: Props) => {
    return (
        <div>
            <div className="flex ">
                <Sidebar />
                <main className="flex-grow ml-64 relative ">
                    <Navbar />
                    <div>
                        <div>{children}</div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
