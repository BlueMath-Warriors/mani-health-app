import React from 'react'
import WorkersCompIntroSection from '../components/workers-comp/WorkersCompIntroSection';
import WorkersCompListSection from '../components/workers-comp/WorkersCompListSection';
import { WORKERS_COMPENSATION_SERVICES } from '@/Constants/workersCompData';
import WorkersCompDetailsSection from '../components/workers-comp/WorkersCompDetailsSection';

const WorkersComp = () => {
  return (
    <>
        <WorkersCompIntroSection />
        <WorkersCompDetailsSection />
        <WorkersCompListSection content={WORKERS_COMPENSATION_SERVICES} />
    </>
  )
}

export default WorkersComp;