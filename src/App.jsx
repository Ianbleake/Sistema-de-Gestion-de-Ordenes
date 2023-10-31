import logo from './media/Logo.svg';
import './App.css';

function App() {
  return (
    <div id='Main' className='w-full min-h-[100VH] bg-teal-100'>   
      <header className='bg-nav h-16 flex justify-between items-center text-white font-varela text-2xl'>
        <div id='Logo' className='flex flex-shrink p-4 items-center'>
          <div className='flex flex-1 h-max-auto'><img src={logo} className='h-10'/></div>
          <div><h1>PlayaLinda</h1></div>
        </div>
        <div className='p-4'>Menu</div>
      </header>

    </div>
  );
}

export default App;
