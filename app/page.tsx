import Image from 'next/image'
import Card from './Card';
import Header from './Header'
import RightColumn from './RightColumn';

// @ts-ignore
const cards = [...new Array(10).keys()];

export default function Home() {
  return (
    <div className='grid grid-cols-2 pt-4 h-screen overflow-y-scroll'>
      <div className='flex flex-col items-end'>
        <Header />
        {cards.map((card, key) => (
          <Card key={key} />
        ))}

      </div>
      <RightColumn />
    </div>
  )
}
