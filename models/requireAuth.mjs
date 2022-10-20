export async function requireAuth (req) {
  // if (!req.session.email) { // how it will be
  if (req.session.email) { 
    return {
      status: 403,
      location: `/login`
    }
  }
}
