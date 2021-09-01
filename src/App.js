import Counter from './components/Counter';



function App() {
  return (
    <>
    {/* This min and max variable defines the minimum and the maximum value of the counter.
    We can change these values as per our needs */}
    <Counter
    min={1}
    max={1000} />
    </>
  );
}

export default App;
