import { CREATE_USER, UPDATE_USER, DELETE_USER, VIEW_USER } from "./ActionType";

export const createUser = (dataCreated) => {
  return {
    type: CREATE_USER,
    payload: {
      id: new Date().getTime().toString(),
      dataCreated,
    },
  };
};

export const updateUser = (dataCreated, id) => {
  // console.log(dataCreated, "updated payload");
  // console.log(id, "updated id");
  return {
    type: UPDATE_USER,
    payload: {
      dataCreated,
      id,
    },
  };
};

export const deleteUser = (id) => {
  console.log(id);
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const viewUser = (viewData, id) => {
  // console.log(id);
  return {
    type: VIEW_USER,
    payload: viewData,
  };
};
