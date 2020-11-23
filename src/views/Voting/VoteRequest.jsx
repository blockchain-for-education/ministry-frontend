import VoteBody from "../../components/VoteBody";
import VoteHeader from "./VoteHeader";

export default function VoteRequest({ request }) {
  return (
    <div>
      <VoteHeader request={request}></VoteHeader>
      <VoteBody request={request}></VoteBody>
    </div>
  );
}