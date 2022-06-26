import { Route, Routes } from 'react-router-dom';

// Import Pages
import { Event } from './pages/Event';

export function Router() {
 return(
  <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
  </Routes>
 );
}

// <Route path="/event/lesson/:slug" element={<Event />} /> definindo o slug de cada aula