import { MatchInterface, ProfileInterface } from "@/lib/interfaces";
import {  HOST } from "@/lib/constants";

export async function GetMatches(userId: string): Promise<MatchInterface[]> {
  return await fetch(HOST + "/api/matches/all", {
      credentials: "include",
    headers: {
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
  userId: string
): Promise<ProfileInterface[]> {
  const data = await GetMatches(userId);

  return await fetch(HOST + "/api/match/profiles", {
    method: "POST",
      credentials: "include",
    headers: {
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
): Promise<MatchInterface> {
  if (!profileId || !toProfileId) {
    throw new Error("fromProfileId and toProfileId are required");
  }

  return await fetch(HOST + "/api/match/create", {
    method: "POST",
      credentials: "include",
      headers: {
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

export default async function deleteMatchById(userId: string) {
  return await fetch(HOST + "/api/match/delete-by-id", {
    method: "DELETE",
      credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
    cache: "force-cache",
  }).catch((err) => {
    console.log(err);
    return null;
  });
}