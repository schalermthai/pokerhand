import { Card, Face, Suit } from "~/Card";

export type GroupedCardBySuit = { [key in Suit]?: Card[] }
export type GroupedCardByFace = { [key in Face]?: Card[] }
