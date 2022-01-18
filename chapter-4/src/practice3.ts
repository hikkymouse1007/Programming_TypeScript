// type Reservation = void

// type Reserve = {
//   (from: Date, to: Date, destination: string): Reservation
//   (from: Date, destination: string): Reservation
//   (from: Date): Reservation
// }

// let reseve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination?: string
// ) => {
//   if (toOrDestination instanceof Date && destination !== undefined) {
//     // 宿泊旅行を予約する
//   } else if (typeof toOrDestination === 'string') {
//     // 日帰り旅行を予約する
//   }
// }