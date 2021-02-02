export type Unnull<O> = {
  [K in keyof O]: O[K] extends null
    ? NonNullable<O[K]> | undefined
    : NonNullable<O[K]>;
};
