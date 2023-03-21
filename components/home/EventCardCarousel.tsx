import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EventCard from "./EventCard";
import { Events } from "@/data/Events";
import style from "@/styles/home/EventCardCarousel.module.css";

type EventCardCarouselProps = {
  events: Array<Events>;
};

export default function EventCardCarousel(props: EventCardCarouselProps) {
  const [isDisabledPrevious, setDisabledPrevious] = useState(true);
  const [isDisabledNext, setDisabledNext] = useState(false);
  const [range, setRange] = useState([0, 3]);
  const displayedEvents = props.events.slice(...range);

  useEffect(() => {
    if (range[0] == 0) {
      setDisabledPrevious(true);
    } else {
      setDisabledPrevious(false);
    }
    if (range[1] >= props.events.length) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [range, props.events.length]);

  return (
    <div className={style["event-card-carousel-container"]}>
      <div className={style["event-card-carousel-button-div"]}>
        <button
          className={style["event-card-carousel-button"]}
          type="button"
          disabled={isDisabledPrevious}
          onClick={() => setRange(range.map((x) => x - 1))}
        >
          Previous
        </button>
      </div>
      <div className={style["event-card-carousel"]}>
        {displayedEvents.map((event) => (
          <EventCard
            key={uuidv4()}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
      <div className={style["event-card-carousel-button-div"]}>
        <button
          className={style["event-card-carousel-button"]}
          type="button"
          disabled={isDisabledNext}
          onClick={() => setRange(range.map((x) => x + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
