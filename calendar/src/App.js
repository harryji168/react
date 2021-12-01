import './App.css';
import Calend from 'calend'

function App() {
  return (    
    <Calend
    initialDate={new Date().toISOString()}
    hourHeight={60}
    initialView={CALENDAR_VIEW.WEEK}
      disabledViews={[CALENDAR_VIEW.DAY]}
      onSelectView={onSelectView}
      selectedView={selectedView}
      onPageChange={onPageChange}
    />
  );
}

export default App;
