import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Connect from './Pages/Connect/Connect.jsx';
import Livechat from './Pages/Chat/Chat.jsx';
import Legal from './Pages/Legal/Legal.jsx';
import TermsOfService from './Pages/TOS/Tos.jsx';
import PrivacyPolicy from './Pages/PP/Pp.jsx';
import WalletTermsOfService from './Pages/WOS/Wos.jsx';
import Congrats from './Pages/Congrats/congrats.jsx';
import Username from './Pages/Username/username.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Connect />} />
        <Route path="/livechat" element={<Livechat />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/wallettermsofservice" element={<WalletTermsOfService />} />
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/username" element={<Username />} />
      </Routes>
    </Router>
  )
  
}

export default App;
