const TestContext = React.createContext();

function Display() {
  const value = useContext(TestContext);
  return <div>{value}, I am learning react hooks.</div>;
}

function App() {
  return (
    <TestContext.Provider value={"Kaleem"}>
      <Display />
    </TestContext.Provider>
  );
}
    