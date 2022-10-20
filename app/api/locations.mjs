import { requireAuth } from "../../models/requireAuth.mjs";

let locations = [
  {
    name: "WC Parks",
    zipcode: 63390,
  },
];

//----
// Does not work in browser
// But this does work with API call with header Accept: application/json
// ----
export let get = [requireAuth, getResult];
async function getResult(req) {
  return {
    json: { locations },
  };
}

export let post = [requireAuth, postResult];
async function postResult(req) {
  return {
    status: 501,
    json: "better luck next time",
  };
}

// // Works with both browser and API
// export async function get(req) {
//   if (req.session.email) {
//     return {
//       json: { locations },
//     };
//   } else {
//     return { location: "/login" };
//   }
// }
