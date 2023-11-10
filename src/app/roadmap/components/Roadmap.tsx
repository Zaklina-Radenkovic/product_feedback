'use client';
import * as React from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useFeedbackContext } from '../../../state/feedback';
import RoadmapListItems from './RoadmapListItems';
import { useStatusFeedbacks } from '@/hooks/useStatusFeedbacks';
import RoadmapMobileNav from './RoadmapMobileNav';

const Roadmap = ({ roadmapData }) => {
  return (
    <div className="roadmap">
      {roadmapData.length > 0 &&
        roadmapData.map((data) => (
          <div key={data.id}>
            <h3 className="mb-3.5 font-bold text-secondary">
              {data.name} (
              {data.feedbacks.length > 0 ? data.feedbacks.length : 0})
            </h3>
            <p className="mb-9">{data.description}</p>
            <RoadmapListItems
              key={data.id}
              feedbacksList={data.feedbacks}
              name={data.name}
            />
          </div>
        ))}
    </div>
  );
};

export default Roadmap;
