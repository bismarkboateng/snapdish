import { redirect } from "next/navigation";

const UserSettings = () => {
  redirect("/dashboard/settings/profile");
};

export default UserSettings;
