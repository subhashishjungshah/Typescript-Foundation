// Interfaces only apply to objects
interface Rectangle {
  height: number;
  width: number;
}

interface colouredRectangle extends Rectangle {
  color: string;
}

const rectangle: colouredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
