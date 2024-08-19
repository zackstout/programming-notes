// You are given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize.

// You want to rearrange the cards into groups so that each group is of size groupSize, and card values are consecutively increasing by 1.

// Return true if it's possible to rearrange the cards in this way, otherwise, return false.

const isNStraightHand = (hand = [], size = 2) => {
  if (hand.length % size !== 0) return false;

  // Huh, does sorting matter? Yeah we always want to start from smallest available, right?
  // Yes. Because otherwise it will be missed.
  // When we start from smallest, we are guaranteeing, that will be the only way this card could appear in a straight. Because it's the smallest one we have currently.

  hand.sort((a, b) => a - b);

  const counter = new Map();
  for (const card of hand) {
    counter.set(card, (counter.get(card) || 0) + 1);
  }

  for (const card of hand) {
    // This means we've already used the card:
    if (counter.get(card) === 0) continue;
    for (let i = 0; i < size; i++) {
      // Needed card is absent, so we know it's impossible
      if ((counter.get(card + i) || 0) === 0) return false;
      // Use the card
      counter.set(card + i, counter.get(card + i) - 1);
    }
  }

  return true;
};

// No JS option lol
