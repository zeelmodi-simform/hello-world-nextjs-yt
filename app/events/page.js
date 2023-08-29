'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const EventsList = async ({ params: { category } }) => {
  const { eventList: eventsData } = await getEvents(category);

  // const router = useRouter();

  // const [eventsData, setEventsData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { eventList } = await getEvents(category);
  //     setEventsData(eventList);
  //   };
  //   fetchData();
  // }, [category]);

  const fetchSportsEvents = async () => {
    // const response = await fetch(
    //   `http://localhost:4000/events?category=sports`
    // );
    // const data = await response.json();
    // setEventsData(data);
    // router.push(`/events?category=sports`, undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={() => fetchSportsEvents()}>Sports Events</button>
      <h1>List of Events</h1>
      {eventsData?.map((event) => {
        return (
          <div key={event?.id}>
            <h2>
              {event?.id} {event?.title} {event?.data} | {event?.category}{' '}
            </h2>
            <p>{event?.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default EventsList;

export async function getEvents(categoryName) {
  const queryString = categoryName ? `category=sports` : '';
  const response = await fetch(`http://localhost:4000/events${queryString}`);
  const data = await response.json();

  return {
    eventList: data,
  };
}
