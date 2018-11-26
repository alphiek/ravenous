const apiKey = 'PC-3qsjtwwgqgN1Id2o7VM0jqzU4RZMyVfIJf-hw_0NHE6mJb-ZWxSOTArNW1SRhaFO0NC3YBcE0hNyGRI3q4yskbOEuOqALhDxy0ZuVM4kobeivMfburVtYoTH5W3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch (`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }
}

export default Yelp;
