"use client";

import Card from "./Card";
import { useReducer } from "react";

type RatingMap = Map<string, number>;

type Action =
  | { type: "set"; venue: string; rating: number }
  | { type: "remove"; venue: string };

function reducer(state: RatingMap, action: Action): RatingMap {
  const newMap = new Map(state);

  if (action.type === "set") {
    newMap.set(action.venue, action.rating);
  }

  if (action.type === "remove") {
    newMap.delete(action.venue);
  }

  return newMap;
}

export default function CardPanel() {
  const initialState: RatingMap = new Map([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  const [ratings, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <Card
          venue="The Bloom Pavilion"
          img="/img/bloom.png"
          onRate={(rating: number) => {
            dispatch({ type: "set", venue: "The Bloom Pavilion", rating });
          }}
        />

        <Card
          venue="Spark Space"
          img="/img/sparkspace.png"
          onRate={(rating: number) => {
            dispatch({ type: "set", venue: "Spark Space", rating });
          }}
        />

        <Card
          venue="The Grand Table"
          img="/img/grandtable.png"
          onRate={(rating: number) => {
            dispatch({ type: "set", venue: "The Grand Table", rating });
          }}
        />
      </div>

      <hr style={{ margin: "40px 0" }} />

      {[...ratings.entries()].map(([venue, rating]) => (
        <div
          key={venue}
          data-testid={venue}
          style={{
            cursor: "pointer",
            padding: "10px",
            fontSize: "18px",
          }}
          onClick={() => dispatch({ type: "remove", venue })}
        >
          {venue} Rating : {rating}
        </div>
      ))}
    </div>
  );
}
