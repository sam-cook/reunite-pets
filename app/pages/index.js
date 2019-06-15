import Link from "next/link";

export default () => (
  <>
    <h1>Reunite Pets</h1>
    <p>Helping lost pets find their way home</p>
    <p>
      Choose your region, provide us with some information about the lost or found pet, then sit back and let us do the
      work for you. Find an animal? Listings for found animals are always free. Looking for a lost pet? Your FREE Lost
      Pet listing into our data bank is valid for 3 months. Extending your listing is also FREE.
    </p>
    <p>Lost a pet?</p>
    <Link href="/list-lost-pet" prefetch>
      <a>Click here to create a listing</a>
    </Link>
    <p>Found someones fur baby?</p>
    <Link href="/list-found-pet" prefetch>
      <a>Click here to create a listing</a>
    </Link>
  </>
);
