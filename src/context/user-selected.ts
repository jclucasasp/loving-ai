import { createContext } from "react";
import { ProfileInterface } from "../lib/interfaces";

const SelectedUser = createContext<ProfileInterface | null>({} as ProfileInterface);

export default SelectedUser;
