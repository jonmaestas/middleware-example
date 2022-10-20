let locations = [
  {
    name: "WC Parks",
    zipcode: 63390,
  },
];

export async function get(req) {
  console.log('nomiddleware/get')
  if (!req.session.email) { // remove the ! once email is set in the session
    return {
      json: { locations },
    };
  } else {
    return { location: "/login" };
  }
}
