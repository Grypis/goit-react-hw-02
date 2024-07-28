import Section from "./components/Section/Section";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";

const App = () => {
  const initFeedback = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(() => {
    const stringFeedback = localStorage.getItem("feedbackValue");
    const parsedFeedback = JSON.parse(stringFeedback) ?? initFeedback;
    return parsedFeedback;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const posFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Section>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetFeedback={resetFeedback}
        />
        {totalFeedback !== 0 && (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            posFeedback={posFeedback}
          />
        )}
        {totalFeedback === 0 && <Notification />}
      </Section>
    </>
  );
};
export default App;
