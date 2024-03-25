export interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
  avatar?: string;
}
