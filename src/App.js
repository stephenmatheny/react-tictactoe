import Game from './component/Game';

export default function App() {
  return (
    <div className="App" style={background}>
      <Game />
    </div>
  );
}



const background = {
  flexDirection: "column",
  background: '#D8DED6',
  height: '100vh',
}