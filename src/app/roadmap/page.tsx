'use client';
import * as React from 'react';
import RoadmapHeader from './components/RoadmapHeader';
import Roadmap from './components/Roadmap';
import RoadmapMobileNav from './components/RoadmapMobileNav';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useStatusFeedbacks } from '@/hooks/useStatusFeedbacks';
import { useWindowSize } from '@uidotdev/usehooks';
import { useFeedbackContext } from '@/state/feedback';

export default function RoadmapPage() {
  const size = useWindowSize();
  const { loading } = useFeedbackContext();
  const { plannedFeedbacks, inProgressFeedbacks, liveFeedbacks } =
    useStatusFeedbacks();

  if (!loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const roadmapData = [
    {
      id: 1,
      name: 'Planned',
      description: 'Ideas prioritized for research',
      color: 'orange-planned',
      feedbacks: plannedFeedbacks || [],
    },
    {
      id: 2,
      name: 'In-Progress',
      description: 'Currently being developed',
      color: 'blue-live',
      feedbacks: inProgressFeedbacks || [],
    },
    {
      id: 3,
      name: 'Live',
      description: 'Release features',
      color: 'tertiary',
      feedbacks: liveFeedbacks || [],
    },
  ];

  return (
    <div className="sm:px-[6%] sm:py-[95px] md:px-[11.4%]">
      <RoadmapHeader />
      {size.width && size.width < 639 ? (
        <RoadmapMobileNav data={roadmapData} />
      ) : (
        <>
          <Roadmap roadmapData={roadmapData} />
        </>
      )}
    </div>
  );
}
