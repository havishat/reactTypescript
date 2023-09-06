/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
const ELLIPSIS = "\u2026"; // Please use this in your solution and NOT '...' (three dots)

interface ChipListProps {
  chips?: { label: string }[];
  maxChips?: number;
  maxTextLength?: number;
}

interface ChipProps {
  label: string;
}

export const ChipList = ({ chips, maxChips, maxTextLength }: ChipListProps) => {
  const exampleChip = { label: "123456" };
  const index = 0;

  // Implement your logic here:

  const remaining = maxChips;
  // eslint-disable-next-line no-lone-blocks
  {
    //  chips.map(({ chip, index }) => (
    <div
      style={{
        border: "1px solid #bbbbbb",
        padding: "4px",
        borderRadius: "8px",
      }}
      data-testid={`chip-${index}`} // use index of each item here
      key={index}
    >
      {exampleChip.label} {/* replace this once you load the chips */}
    </div>;
    // ));
  }
  return (
    <section style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <aside data-testid="exceeding-text">{remaining} more items</aside>
    </section>
  );
};

const sampleChips: ChipProps[] = [
  { label: "123456789" },
  { label: "123456" },
  { label: "1234567" },
  { label: "12345678" },
  { label: "12345" },
];

// const chips = { sampleChips };

// used in the preview tab, don't remove this
//(you can add and change the parameters to test different cases)

export default function App() {
  return <ChipList maxChips={3} maxTextLength={6} chips={sampleChips} />;
  // return <ChipList maxChips={3} chips={sampleChips} />;
  //return <ChipList />;
  // return <ChipList maxTextLength={6} chips={sampleChips} />;
}
