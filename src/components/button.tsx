export const Button = (props: { onClick: () => void; icon: JSX.Element }) => {
  return <button onClick={props.onClick}>{props.icon}</button>;
};
