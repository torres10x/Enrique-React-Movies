import type { Movie } from "../types/movie";
import { getRandomDate } from "../utils/date.utils";

export const mockMovie: Movie = {

id: 1,
title: 'the flood',
description: 'Documentary about my flood',
pictureURL: 'imgURL',
releaseDate: new Date(2025-10-11)

}
export const movieList: Movie[]=[

{
  "id": 1,
  "title": "Tom Sawyer",
  "description": "Salsa made with fire-roasted tomatoes for an authentic flavor.",
  "pictureURL": "http://dummyimage.com/145x100.png/cc0000/ffffff",
  "releaseDate": getRandomDate(new Date("2020-10-18"),new Date("2025-10-18"))
}, {
  "id": 2,
  "title": "Thin Blue Line, The",
  "description": "Aromatic long-grain basmati rice, perfect for curries.",
  "pictureURL": "http://dummyimage.com/149x100.png/dddddd/000000",
  "releaseDate": getRandomDate(new Date("2020-10-18"),new Date("2025-10-18"))
}, {
  "id": 3,
  "title": "Past, The (Le passé)",
  "description": "Fresh thyme, perfect for seasoning dishes.",
  "pictureURL": "http://dummyimage.com/226x100.png/ff4444/ffffff",
  "releaseDate": getRandomDate(new Date("2020-10-18"),new Date("2025-10-18"))
}, {
  "id": 4,
  "title": "Dorian Gray",
  "description": "Refreshing tea with honey and lemon flavor, perfect for a warm drink.",
  "pictureURL": "http://dummyimage.com/244x100.png/dddddd/000000",
  "releaseDate": getRandomDate(new Date("2020-10-18"),new Date("2025-10-18"))
}, {
  "id": 5,
  "title": "Closed Curtain",
  "description": "Pasta alternative made from sweet potatoes, gluten-free and rich in flavor.",
  "pictureURL": "http://dummyimage.com/231x100.png/dddddd/000000",
  "releaseDate": getRandomDate(new Date("2020-10-18"),new Date("2025-10-18"))
}
]