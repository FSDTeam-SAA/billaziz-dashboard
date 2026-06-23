import React from 'react'
import FaqContainer from './_components/faq-container'
import DashboardOverviewHeader from '../_components/dashboard-overview-header'

const FaqPage = () => {
  return (
    <div>
        <DashboardOverviewHeader
        title="FAQ"
        description="Find answers to frequently asked questions and get assistance with common issues related to our platform."
      />
        <FaqContainer/>
    </div>
  )
}

export default FaqPage