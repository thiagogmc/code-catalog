import datasource from './esv7.datasource.config.json'

export default {
  ...datasource,
  "connector": "esv6",
  "index": "catalog",
  "version": "7",
  // "defaultSize": 50,
  "configuration": {
    "node": process.env.ELASTIC_SEARCH_HOST,
    "requestTimeout": process.env.ELASTIC_SEARCH_REQUEST_TIMEOUT,
    "pingTimeout": process.env.ELASTIC_SEARCH_PING_TIMEOUT
  },
  "mappingProperties": {
  }
}