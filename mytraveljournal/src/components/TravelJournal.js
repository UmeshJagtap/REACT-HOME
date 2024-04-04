import React from 'react';
import data from '../data';
import TjTitle from './TjTitle';
import TjDescription from './TjDescription';
import TjCards from './TjCards';
import TjFooter from './TjFooter';

export default function TravelJournal() {
  const events = data.map((item) => {
    return <TjCards key={item.id} {...item} />;
  });
  return (
    <>
      <TjTitle />
      <TjDescription />
      <section>{events}</section>
      <TjFooter />
    </>
  );
}
