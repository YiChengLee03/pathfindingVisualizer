import { FeaturesContainer, ToolbarContainer, Title } from './toolbar.styles';

import Algorithm from './DropdownComponents/Algorithm/algorithm.component';
import Speed from './DropdownComponents/Speed/speed.component';
import Nodes from './DropdownComponents/Nodes/nodes.component';
import ClearNodes from './ButtonComponents/ClearNodes/clearNodes.component';
import Visualize from './ButtonComponents/Visualize/visualize.component';

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <Title>Pathfinder</Title>
      <FeaturesContainer>
        <Algorithm />
        <Speed />
        <Nodes />
        <ClearNodes />
        <Visualize />
      </FeaturesContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;
