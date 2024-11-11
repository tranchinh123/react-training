interface ErrorComponentProps {
  error: Error;
}

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <p>{error.message}</p>
    </div>
  );
};
export default ErrorComponent;
