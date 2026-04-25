import { useState } from 'react'

import MainContent from './layout/main/MainContent';
import Top from './layout/top/Top';
import Bottom from './layout/bottom/Bottom';
import Card1 from './ui_comps/Card1';

export default function App() {
  const [mainContent, setMainContent] = useState(null)
  return (
    <>
     <Top updateMainContent={setMainContent} />
     <MainContent mainContent={mainContent} updateMainContent={setMainContent} />
    </>
  )
}
