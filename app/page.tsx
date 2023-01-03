import Image from 'next/image'
import Card from './Card';
import Header from './Header'
import RightColumn from './RightColumn';

// @ts-ignore
const cards = [...new Array(10).keys()];

async function getData() {
  // this cannot be built because we dont have a server when building
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData() as Array<any>;

  return (
    <div className='grid grid-cols-2 pt-4'>
      <div className='flex flex-col items-end'>
        <Header />
        {data.map((card, key) => (
          <Card key={key} />
        ))}

      </div>
      <RightColumn />
    </div>
  )
}
