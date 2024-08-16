import { createContext } from "react";
import { ProfileInterface } from "../lib/interfaces";

const UserProfile = createContext<ProfileInterface>({} as ProfileInterface);

export default UserProfile;