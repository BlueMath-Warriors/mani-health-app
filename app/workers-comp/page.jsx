import React from 'react'
import WorkersCompIntroSection from '../components/workers-comp/WorkersCompIntroSection';
import WorkersCompListSection from '../components/workers-comp/WorkersCompListSection';
import { WORKERS_COMPENSATION_SERVICES } from '@/Constants/workersCompData';
import WorkersCompDetailsSection from '../components/workers-comp/WorkersCompDetailsSection';
import ReferralAction from '../components/common/ReferralAction';

const WorkersComp = () => {
  return (
    <>
        <WorkersCompIntroSection />
        <WorkersCompDetailsSection />
        <WorkersCompListSection content={WORKERS_COMPENSATION_SERVICES} />
        <ReferralAction />
    </>
  )
}

export default WorkersComp;