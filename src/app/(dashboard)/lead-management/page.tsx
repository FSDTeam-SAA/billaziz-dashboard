import React from 'react'
import LeadManagementContainer from './_components/lead-management-container'
import DashboardOverviewHeader from '../_components/dashboard-overview-header'

const LeadManagementPage = () => {
  return (
    <div>
         <DashboardOverviewHeader
        title="Lead Management"
        description="Efficiently manage and track your leads with our comprehensive lead management system. Organize, prioritize, and nurture your leads to maximize conversions and drive business growth."
      />
        <LeadManagementContainer/>
    </div>
  )
}

export default LeadManagementPage