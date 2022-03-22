import ApplicationsPage from '../ApplicationsPage';
import * as React from 'react';
import {
    Divider,
    Drawer,
    DrawerContent,
    DrawerContentBody,
    PageSection,
    EmptyState,
    EmptyStateIcon,
    Title,
    EmptyStateBody,
    Button,
    EmptyStateSecondaryActions,
  } from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';
import NameForm from './NameForm';
import ImageForm from './imageForm/ImageForm';

const description = `Customize and spawn your notebooks here.`;

export const JupyterNotebooks: React.FC = () => {
    const loaded = true; // temp
    const isEmpty = false; // temp

    const emptyComponent = (
        <PageSection variant="light" padding={{ default: 'noPadding' }} isFilled>
          <EmptyState variant="large">
            <EmptyStateIcon icon={CubesIcon} />
            <Title headingLevel="h5" size="lg">
              No spawner here yet.
            </Title>
            <EmptyStateBody>
              This is the new spawner placeholder page. Hi!
            </EmptyStateBody>
            <EmptyStateSecondaryActions>
              <Button variant="link">Launch Notebook</Button>
            </EmptyStateSecondaryActions>
          </EmptyState>
        </PageSection>
      );


    return (
        <>
            <ApplicationsPage
                title="Jupyter Notebooks"
                description={description}
                loaded={loaded}
                empty={isEmpty}
                emptyComponent={emptyComponent}
            >
                <NameForm/>
                <ImageForm/>
            </ApplicationsPage>
        </>
    )
}

export default JupyterNotebooks;