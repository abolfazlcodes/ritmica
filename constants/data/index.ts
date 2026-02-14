export const habitsData = [
  {
    id: 1,
    title: "sport",
    description: "Running everyday",
    completedDays: [0, 3, 5, 6],
    color: "#F04343",
  },
  {
    id: 2,
    title: "sport",
    description: "Going to the gym",
    completedDays: [2, 3, 4],
    color: "#8B5CF6",
  },
  {
    id: 3,
    title: "study",
    description: "Read Linux",
    completedDays: [0, 1, 2],
    color: "#13B8A7",
  },
  {
    id: 4,
    title: "Game",
    description: "Sparta need me!",
    completedDays: [5, 7],
    color: "#F43F5E",
  },
  // {
  //   id: 5,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 6,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 7,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 8,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 9,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 10,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 11,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 12,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 13,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
  // {
  //   id: 14,
  //   title: "sport",
  //   description: "Running everyday",
  //   completedDays: [0, 3, 5, 6],
  //   color: "#13B8A7",
  // },
];

export interface IHabit {
  id: number;
  title: string;
  description: string;
  completedDays: number[];
  color: string;
  emoji?: string;
}
