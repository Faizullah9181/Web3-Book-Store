import xmen from "./images/xmen.jpg";
import ca from "./images/ca.jpg";
import depo from "./images/depo.png";
import Spidey4 from "./images/spiderman4.png";
import Dictionary from "./images/oxford.png";
import Novel1 from "./images/got.jpg"
import Novel2 from "./images/novel.jpg"
import Fantasy1 from "./images/bones.jpg"
import Horror1 from "./images/black.jpg"
import Adventure1 from "./images/adv.jpg"
import "./books.css";

export const books = {
  Comics: [
    {
      name: "X-MEN (MARVEL ORIGINAL COMIC)",
      price: 0.11,
      rating: 4,
      image: xmen,
      about:
        "An alien invasion attacks New York City and the only one who can stop it is...Spider-Man?! But that's far from all you'll find here - a revelation from the past puts Peter Parker's job, relationships and whole life in jeopardy! And if even that's not enough, you'll see a new roommate, new love interests and a new villain!",
    },
    {
      name: "CAPTAIN AMERICA (Marvel Original)",
      price: 19.99,
      rating: 5,
      image: ca,
      about:
        "Wondering when Boomerang's status as Spider-Man's roommate would blow up? Well, the time has come and it's all here in this continuation of Nick Spencer's action-packed take on everybody's favorite web-head!",
    },
    {
      name: "DEADPOOL BAD BLOOD (MARVEL ORIGINAL COMIC)",
      price: 2.99,
      rating: 1,
      image: depo,
      about:
        "J. Jonah Jameson, former publisher of the Daily Bugle, former mayor of New York City, has a new job - as a shock jock! It's the perfect job for the outspoken Jonah, but is the world ready for a JJJ who's...pro-Spider-Man?! More importantly, is Peter Parker ready? ",
    },
    {
      name: "The Amazing Spiderman By Nick Spencer Vol. 4: Hunted (MARVEL ORIGINAL COMIC)",
      price: 8.99,
      rating: 3,
      image: Spidey4,
      about:
        "When Kraven returns, Spider-Man becomes the hunted! Sergei Kravinoff and his minions have been kidnapping animal-themed superhumans for months, and they need one more to complete the collection: the Spider. But what does Kraven want with all of them?! In Central Park, the prey is let loose, and the hunt begins - but Kraven isn't the one in pursuit. Who has Spidey in their crosshairs?",
    },
  ],
  Dictionaries: [
    {
      name: "Oxford English Dictionary (3rd Edition)",
      price: 0.2,
      rating: 5,
      image: Dictionary,
      about:
        "The foremost single volume authority on the English language, the Oxford Dictionary of English is at the forefront of language research, focusing on English as it is used today. It is informed by the most up-to-date evidence from the largest language research programme in the world, including the two-billion-word Oxford English Corpus.",
    },
  ],
  Novels: [
    {
      name: "Games Of Thrones Ice and Fire",
      price: 0.2,
      rating: 4,
      image: Novel1,
      about:"The Best Novel "
        
    },
    {
      name: "The Lords Of The Rings Fellowship Of The Ring",
      price: 0.3,
      rating: 5,
      image: Novel2,
      about:
        "MasterPiece By J.R.R Tolkien",
    },
  ],
  Fantasy: [
    {
      name: "Shadow And The Bones",
      price: 0.2,
      rating: 3,
      image: Fantasy1,
      about:
        "Good Novel",
    },
  ],
  Horror: [
    {
      name: "Black Forest ",
      price: 0.2,
      rating: 4,
      image: Horror1,
      about:
        "Monty is a young man who is just trying to keep up his family’s farm after the death of his father. He’s never cared for farm life, but his mother and sister have to eat.",
    },
  ],
  Adventure: [
    {
      name: "Life Of Pi",
      price: 0.2,
      rating: 3,
      image: Adventure1,
      about:
        "The Life of Pi tells the story of Pi, a teenage boy from India, who finds himself trapped in a lifeboat in the Pacific Ocean with a tiger",
    },
  ],
};
