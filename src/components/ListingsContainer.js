import React, { useState, useEffect } from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([]);

  // useEffect to get listings to display upon first page render
  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then((r) => r.json())
      .then((listings) => setListings(listings));
  }, []);

  // handle deleting an item from the list
  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedListings = listings.filter((listing) => {
          return listing.id !== id;
        });
        setListings(updatedListings);
      });
  }

  // filter products based on search
  const filteredListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase());
  })

  // crease ListingCard component for each listing
  const listingCards = filteredListings.map((listing) => {
    return <ListingCard 
              image={listing.image}
              id={listing.id}
              description={listing.description}
              location={listing.location}
              key={listing.id}
              onDeleteListing={handleDelete}
            />;
  });

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
