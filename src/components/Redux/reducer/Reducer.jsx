const intitalUser = {
  users: [
    // {
    //   firstName: "Ujjwal",
    //   lastName: "Kumar",
    //   userName: "admin@gmail.com",
    //   address:
    //     "Double happiness apartment, nala road, lower pp compound , sujat",
    //   password: "admin",
    //   gender: "male",
    //   status: "active",
    // },
    // {
    //   firstName: "ANJALI",
    //   lastName: "KUMARI",
    //   userName: "sonu@gmail.com",
    //   address: "LOVKUSH COLONY KARPURI NAGAR NEAR LAKSHMAN IRODOV CLASSES",
    //   password: "admin",
    //   gender: "female",
    //   status: "in-active",
    // },
    // {
    //   firstName: "Ravi",
    //   lastName: "Gupdat",
    //   userName: "ravi@gmail.com",
    //   address: "delhi",
    //   password: "asjdnkans",
    //   gender: "male",
    //   status: "active",
    // },
    // {
    //   firstName: "Abhishek",
    //   lastName: "Srivatva",
    //   userName: "Srivastava@abhi.com",
    //   address: "bhagalpur",
    //   password: "asjdnkans",
    //   gender: "male",
    //   status: "in-active",
    // },
  ],
};
const Reducer = (state = intitalUser, { type, payload }) => {
  switch (type) {
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, payload],
      };

    case "DELETE_USER":
      const newList = state.users.filter((ele) => ele.id !== payload);
      // console.log(payload, "this is payload id");
      return {
        ...state,
        users: newList,
      };

    // case "UPDATE_USER":
    //   console.log(payload.dataCreated, "data for update");
    //   console.log(state.users[0].id, "state for update");
    //   console.log(payload.id, "id for update");

    //   if (payload.id === state.users.id) {
    //     console.log("yes");
    //   }

    //   return {
    //     ...state,
    //     users: payload.dataCreated,
    //   };

    default:
      return state;
  }
};

export default Reducer;
