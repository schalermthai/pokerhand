import { Card, Face, Suit } from "~/Card";

export type GroupedCardBySuit = { [K in Suit]?: Card[] }
export type GroupedCardByFace = { [K in Face]?: Card[] }
