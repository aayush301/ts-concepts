type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    // Now writing and hovering over pet shows that pet is identified as Fish.
    return "Food for fish";
  } else {
    return "Food for bird";
  }
}
