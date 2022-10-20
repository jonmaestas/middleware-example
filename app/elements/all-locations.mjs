export default function AllLocations({ html, state }) {
  console.log('in allLocations')
  console.log(JSON.stringify(state, null, 2))
  const { store } = state
  const { locations='' } = store

  return html`<pre>${JSON.stringify(locations, null, 2)}</pre>`
}