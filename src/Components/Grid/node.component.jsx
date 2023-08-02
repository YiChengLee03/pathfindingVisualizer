import './node.styles.scss';

export const Node = (props) => {
  const { row, col, nodeType, onMouseDown, onMouseEnter } = props;

  if (nodeType === 'Start' || nodeType === 'End')
    return <tr id={`node-${row}-${col}`} className={`node ${nodeType}`} />;

  return (
    <tr
      id={`node-${row}-${col}`}
      className={`node ${nodeType}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
    />
  );
};

export default Node;
