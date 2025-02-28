import React from 'react';
import { useLocalStorage, QuickStartContainer } from '@patternfly/quickstarts';
import '@patternfly/react-catalog-view-extension/dist/css/react-catalog-view-extension.css';
import '@patternfly/quickstarts/dist/quickstarts.min.css';
import { useWatchQuickStarts } from '../utilities/useWatchQuickStarts';

const QuickStarts: React.FC = ({ children }) => {
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('odsQuickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('odsQuickstarts', {});
  const { quickStarts } = useWatchQuickStarts();

  const valuesForQuickStartContext = {
    quickStarts,
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates,
  };

  return <QuickStartContainer {...valuesForQuickStartContext}>{children}</QuickStartContainer>;
};

export default QuickStarts;
