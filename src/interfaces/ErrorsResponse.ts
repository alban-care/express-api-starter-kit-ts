import MessageResponse from "./MessageResponse";

export default interface ErrorResponse extends MessageResponse {
  errors?: string[];
}
