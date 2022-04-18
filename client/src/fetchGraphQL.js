async function fetchGraphQL(text, variables) {
    // const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
    console.log('BEFORE', JSON.stringify({
        query: text,
        variables,
      }));
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch('http://localhost:8080/graphql', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
    console.log('AFTER');
    // Get the response as JSON
    return await response.json();
  }
  
  export default fetchGraphQL;
