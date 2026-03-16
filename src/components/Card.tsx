"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function Card({
  venue,
  img,
  onRate,
}: {
  venue: string;
  img: string;
  onRate: (rating: number) => void;
}) {
  const [rating, setRating] = useState<number | null>(0);

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* รูปสถานที่ */}

      <Image
        src={img}
        alt={venue}
        width={300}
        height={200}
        style={{ objectFit: "cover" }}
      />

      <div style={{ padding: "20px" }}>
        <h2>{venue}</h2>

        <Rating
          id={`${venue} Rating`}
          name={`${venue} Rating`}
          data-testid={`${venue} Rating`}
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
            if (newValue !== null) {
              onRate(newValue);
            }
          }}
        />
      </div>
    </div>
  );
}
