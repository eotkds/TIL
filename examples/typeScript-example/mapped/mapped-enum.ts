export {};

enum DogKind {
  Maltese,
  Retriever,
  Shiba,
}

const dog_age1 = {
  [DogKind.Maltese]: 2,
  [DogKind.Retriever]: 1,
  [DogKind.Shiba]: 3,
};

const dog_age2: { [key in DogKind]: number } = {
  [DogKind.Maltese]: 2,
  [DogKind.Retriever]: 1,
  [DogKind.Shiba]: 3,
};

