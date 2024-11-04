import { ConversationInterface, ResponseInterface } from "@/lib/interfaces";
import { AUTH_HEADER, HOST } from "@/lib/constants";

export async function GetConversationFromTo(
  profileId: string,
  toProfileId: string
): Promise<ConversationInterface> {
  return await fetch(HOST + "/conversation/from-to", {
    method: "POST",
    headers: {
      Authorization: AUTH_HEADER,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ profileId, toProfileId }),
    cache: "force-cache",
  })
    .then((res) => {
      if (!res.ok) {
        return null;
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export async function CreateMessage(
  matchId: string,
  response: ResponseInterface
): Promise<ConversationInterface> {
  return await fetch(HOST + "/conversation/add/" + matchId, {
    method: "POST",
    headers: {
      Authorization: AUTH_HEADER,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(response),
    cache: "force-cache",
  })
    .then((res) => {
      if (!res.ok) {
        return null;
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}