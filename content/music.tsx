// A list of Spotify Song URLS
const tracks: Readonly<string[]> = [
  // Floating World
  "https://open.spotify.com/track/5OBoKqQJ47RGCy1WaZcxae?si=4449ec32c82f4c58",
  // Goodbye Porkpie Hat
  "https://open.spotify.com/track/3PJMsxg6rz9FOo6xNiASXz?si=c452400f11a54bd4",
  // The Answer Is Yes
  "https://open.spotify.com/track/6SS8TI05AWej9YcAyBhc6h?si=db0fe5aea6204303",
  // In a Sentimental Mood
  "https://open.spotify.com/track/0E8q2Fx2XuzXCO2NSAppkR?si=904d551db9fb475f",
  // Teardrop
  "https://open.spotify.com/track/1IFhdXTjyMaZd4kwXbqVF9?si=dce4399ead4b43bb",
  // Opening Day
  "https://open.spotify.com/track/7FI4GNCpplLLHihNZPOwKW?si=feb8206560c44e90",
]

const DEFAULT_ID: string = "4RBJH7YdpKun59lX0PeHjr" // Trio No 1 Schubert <3

const getRandomTrackID = (): string => {
  const TRACK_URL_REGEX: RegExp = new RegExp(
    /^https:\/\/open.spotify.com\/track\/[0-9a-zA-Z]{22}\?si=[0-9a-zA-Z]{16}$/,
    "gs"
  )

  // get today
  const t = new Date()
  // add all the dates in here
  const x = t.getFullYear() + t.getMonth() + t.getDay()
  // find the sine of it, and then get some amount of digits from it, modulus the length
  const i = Math.floor(Math.abs(Math.sin(x) * 10000)) % tracks.length
  const track = tracks[i]
  if (TRACK_URL_REGEX.test(track)) {
    // extract id
    const id = track.split("?")[0].split("/").at(-1)!
    return id
  } else {
    return DEFAULT_ID
  }
}

export default getRandomTrackID
