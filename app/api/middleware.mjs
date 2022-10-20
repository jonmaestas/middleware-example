import { requireAuth } from "../../models/requireAuth.mjs";

let locations = [
  {
    name: "WC Parks",
    zipcode: 63390,
  },
];

export let get = [requireAuth, getResult];
async function getResult(req) {
  console.log('middleware/getResult')
  return {
    json: { locations },
  };
}

export let post = [requireAuth, postResult];
async function postResult(req) {
  console.log('middleware/postResult')
  return {
    status: 501,
    json: "better luck next time",
  };
}

