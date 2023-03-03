// enum
enum direction1 {
  up,
  down,
  left = 10,
  right,
}
// {0,1,10,11}

enum direction2 {
  Up = "up",
  down = "down",
  left = "left",
  right = "right",
}
// {"up", "down", "left", "right"}
const dir: direction2 = direction2.down;
