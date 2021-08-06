export default function getBaseUrl() {
    // const inDevelopment = window.location.hostname === 'localhost'
    // return inDevelopment? 'http://localhost:3001/' : '/'
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://glacial-hollows-35376.herokuapp.com/';
  }
  // http://localhost:3000/?useMockApi=true
  function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  