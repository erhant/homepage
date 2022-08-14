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
  // Soulsides
  "https://open.spotify.com/track/7njVyqzN7SfrGHvOo4hXGX?si=f526d47cc511405d",
  // Its Easy to Remember
  "https://open.spotify.com/track/4L54VoCRj9KvTZzwSqbRnF?si=9f23c371c3474f5b",
  // Cantaloupe Island
  "https://open.spotify.com/track/0sCeNwt8xRCMR4NhKpMyBe?si=d17a0a78eca44455",
  // Where are your branches
  "https://open.spotify.com/track/7i8MOdbZoAiUCdathqHMDX?si=0707d8cb9b454fdd",
  // Sonata Concertata, MS 2. II
  "https://open.spotify.com/track/4MqaFp6x3NT7qHHcGxcbSm?si=6c55b014a29b49c1",
  // 4 Impromptus, Op. 90 D. 899
  "https://open.spotify.com/track/0SwKt4T6PMsdqU5q6Pv234?si=2e6d714f1ab24923",
  // Fruit Stand
  "https://open.spotify.com/track/6yZs3T7BnMwxVELyo6OduT?si=8e98226fb3264fc0",
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
