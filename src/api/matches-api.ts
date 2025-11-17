import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import {  HOST } from "@/lib/constants";

export async function GetMatches(userId: string, token: string): Promise<MatchInterface[]> {
  return await fetch(HOST + "/api/matches/all", {
    headers: {
        Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ userId }),
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

export async function GetMatchedProfiles(
  userId: string,
  token: string,
): Promise<ProfileInterface[]> {
  const data = await GetMatches(userId, token);

  return await fetch(HOST + "/api/match/profiles", {
    method: "POST",
    headers: {
        Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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

export async function CreateMatch(
  profileId: string,
  toProfileId: string,
  token: string,
): Promise<MatchInterface> {
  if (!profileId || !toProfileId) {
    throw new Error("fromProfileId and toProfileId are required");
  }

  return await fetch(HOST + "/api/match/create", {
    method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
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

export default async function deleteMatchById(userId: string, token: string) {
  return await fetch(HOST + "/api/match/delete-by-id", {
    method: "DELETE",
    headers: {
    Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
    cache: "force-cache",
  }).catch((err) => {
    console.log(err);
    return null;
  });
}