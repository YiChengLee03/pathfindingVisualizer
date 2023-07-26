import { Fragment } from 'react';
import { FeaturesContainer, ToolbarContainer } from './toolbar.styles';

import Algorithm from '../Algorithm/algorithm.component';
import Speed from '../Speed/speed.component';
import Nodes from '../Nodes/nodes.component';
import ClearNodes from '../ClearNodes/clearNodes.component';
import Visualize from '../Visualize/visualize.component';

const Toolbar = () => {
  return (
    <Fragment>
      <ToolbarContainer>
        <h1>Pathfinder</h1>
        <FeaturesContainer>
          <Algorithm />
          <Speed />
          <Nodes />
          <ClearNodes />
          <Visualize />
        </FeaturesContainer>
      </ToolbarContainer>
    </Fragment>
  );
};

export default Toolbar;
