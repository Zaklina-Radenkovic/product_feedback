import { useFeedbackContext } from "../state/feedback";

export function useStatusFeedbacks() {
  const { feedbacks } = useFeedbackContext();

  let plannedFeedbacks;
  let inProgressFeedbacks;
  let liveFeedbacks;

  if (feedbacks) {
    plannedFeedbacks = feedbacks
      .filter((item) => item?.status === "planned")
      .map((item) => {
        return {
          ...item,
          status: item.status.replace(/(^\w|-\w)/g, (s: string) =>
            s.toUpperCase()
          ),
          color: "orange-planned",
        };
      });

    inProgressFeedbacks = feedbacks
      .filter((item) => item?.status === "in-progress")
      .map((item) => {
        return {
          ...item,
          status: item.status.replace(/(^\w|-\w)/g, (s: string) =>
            s.toUpperCase()
          ),
          color: "blue-live",
        };
      });

    liveFeedbacks = feedbacks
      .filter((item) => item?.status === "live")
      .map((item) => {
        return {
          ...item,
          status: item.status.replace(/(^\w|-\w)/g, (s: string) =>
            s.toUpperCase()
          ),
          color: "tertiary",
        };
      });
  }

  return { liveFeedbacks, plannedFeedbacks, inProgressFeedbacks };
}
