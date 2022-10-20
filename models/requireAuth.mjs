export async function requireAuth (req) {
  if (req.session.email) { // add the ! once email is set in the session
    return {
      status: 403,
      location: `/login`
    }
  }
}
