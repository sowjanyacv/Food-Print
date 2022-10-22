

import React from "react"
import ScannerForm from "../components/scannerform"
import UserStatistics from "../components/userStats"

export function Dashboard(){
    return(
        <>
        <UserStatistics/>
        <ScannerForm/>
        </>
    )
}