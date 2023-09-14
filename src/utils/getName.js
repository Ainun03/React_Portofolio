import Resume from "../settings/resume.json";

const names = Resume.basics.name.split(" ");
const fullNames = Resume.basics.name

export const FullName = fullNames;
export const FirstName = names[1];

export const LastName = names[names.length - 2];

export const Initials = FirstName.charAt(0)
    .toUpperCase()
    .concat(LastName.charAt(0).toUpperCase());