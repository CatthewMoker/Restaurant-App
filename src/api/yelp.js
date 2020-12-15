import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jS5g98QPKA4BFKvUfQg-s2wll4GetZ6-GdamUt0B4ctKJY51PBscMfaBbfVfX-Dp4N7Y6RCjrJAhAaEOYWrZyhoxb8A8D5P8NWwKHpKwJMJrvJtHEeN33wo-iS_WX3Yx'
    }
});