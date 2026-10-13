import React from 'react';
import { PresentationViewer } from './components/PresentationViewer';

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#05070f] font-sans">
      <PresentationViewer />
    </div>
  );
}
