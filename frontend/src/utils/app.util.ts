import { APP_NAME } from "@/constants/app.constant";

export function getPageTitle() {
  return `${APP_NAME}`;
}


export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase()
}

export function limitString(input: string, maxLength: number): string {
  return input.length > maxLength ? input.slice(0, maxLength) + "..." : input;
}