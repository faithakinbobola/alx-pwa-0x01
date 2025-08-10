## Api Overview
    Collection of information for movies, tv-shows, actors. Includes youtube trailer url, awards, full biography, and many other usefull informations. This api provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members
    ---
## Api Version
    v1 (current)

## Available Endpoints

This API supports endpoints for retrieving title, actor, and utility data. All endpoints return an object with a `results` key. Endpoints that support pagination also include `page`, `next`, and `entries`.

**Note:** All query parameters are optional unless specified otherwise.

---

1. [Endpoints](#endpoints)  
   - [Titles](#titles)  
   - [Titles — By IDs](#titles---by-ids)  
   - [Title Detail](#title-detail)  
   - [Title Rating](#title-rating)  
   - [Seasons & Episodes](#seasons--episodes)  
   - [Season Count](#season-count)  
   - [Episode IDs by Season](#episode-ids-by-season)  
   - [Episode Detail](#episode-detail)  
   - [Upcoming Titles](#upcoming-titles)  
   - [Search by Keyword](#search-by-keyword)  
   - [Search by Title](#search-by-title)  
   - [Search by AKA](#search-by-aka)  
   - [Actors](#actors)  
   - [Actor Detail](#actor-detail)  
   - [Utilities](#utilities)  
2. [Query Parameters & Models](#query-parameters--models)

---

## Endpoints

### Titles  
- **`GET /titles`**  
  Returns an array of titles, filtered or sorted based on query parameters.  
- **Query Parameters:** Multiple filters; unique `list` parameter to select collection (see "Titles Lists" under Utilities).  
- **Response Model:** `title`

### Titles — By IDs  
- **`GET /x/titles-by-ids`**  
  Returns titles by provided array of IDs.  
- **Query Parameters:**  
  - `list` (unique, as above)  
  - `idsList` (array of IMDb ID strings)  
- **Response Model:** `title`

### Title Detail  
- **`GET /titles/{id}`**  
  Returns details for a specific title.  
- **Path Parameter:** `{id}` — IMDb title ID (required)  
- **Query Parameters:** `info` (optional)  
- **Response Model:** `title`

### Title Rating  
- **`GET /titles/{id}/ratings`**  
  Returns the rating and vote count for a specific title.  
- **Path Parameter:** `{id}` — IMDb title ID (required)  
- **Response Model:** `rating`

### Seasons & Episodes  
- **`GET /titles/series/{id}`**  
  Returns list of episodes (episode ID, episode number, season number) in ascending order.  
- **Path Parameter:** `{id}` — IMDb series ID (required)  
- **Response Model:** `light episode`

### Season Count  
- **`GET /titles/seasons/{id}`**  
  Returns the number of seasons for a series (integer).  
- **Path Parameter:** `{id}` — IMDb series ID (required)

### Episode IDs by Season  
- **`GET /titles/series/{id}/{season}`**  
  Returns episode list for given season (episode ID, season number, episode number).  
- **Path Parameters:** `{id}` — series ID; `{season}` — season number (required)  
- **Response Model:** `light episode`

### Episode Detail  
- **`GET /titles/episode/{id}`**  
  Returns episode details based on filters.  
- **Path Parameter:** `{id}` — IMDb episode ID (required)  
- **Query Parameters:** `info` (optional)  
- **Response Model:** `title`

### Upcoming Titles  
- **`GET /titles/x/upcoming`**  
  Returns an array of upcoming titles.  
- **Query Parameters:** Multiple filters/sorting options  
- **Response Model:** `title`

### Search by Keyword  
- **`GET /titles/search/keyword/{keyword}`**  
  Returns titles matching the keyword, with optional query filters.  
- **Path Parameter:** `{keyword}` (required)  
- **Response Model:** `title`

### Search by Title  
- **`GET /titles/search/title/{title}`**  
  Returns titles matching or partially matching the specified title.  
- **Path Parameter:** `{title}` (required)  
- **Query Parameters:** Multiple filters and unique `exact` parameter (defaults to `false`)  
- **Response Model:** `title`

### Search by AKA  
- **`GET /titles/search/akas/{aka}`**  
  Returns titles matching the exact (case-sensitive) AKA.  
- **Path Parameter:** `{aka}` (required)  
- **Response Model:** `title`

### Actors  
- **`GET /actors`**  
  Returns list of actors based on filters.  
- **Query Parameters:** `limit`, `page`  
- **Response Model:** `actor`

### Actor Detail  
- **`GET /actors/{id}`**  
  Returns actor details by IMDb ID.  
- **Path Parameter:** `{id}` — IMDb actor ID (required)  
- **Response Model:** `actor`

### Utilities

#### Title Types  
- **`GET /title/utils/titleType`**  
  Returns list of available title types.

#### Genres  
- **`GET /title/utils/genres`** _(Note: correct path)_  
  Returns list of genres.

#### Title Lists  
- **`GET /title/utils/lists`**  
  Returns lists available for the `list` query parameter in title endpoints.

---

## Query Parameters & Models

Refer to the **Description of Optional Query Parameters** and **Models** sections for detailed definitions of all optional query parameters (`list`, `info`, pagination filters, etc.) and response schemas (`title`, `rating`, `actor`, `light episode`).

---

## Examples

```bash
# List titles from a specific collection
curl "GET /titles?list=popular"

# Fetch details of a title by ID
curl "GET /titles/tt0123456"

# Search titles by keyword with exact matching
curl "GET /titles/search/title/Inception?exact=true"


## Request and Response Format
```json
    Request
    ---
    GET /titles/tt0000002

    Response
    ---
    {
  "results": {
    "_id": "61e57fd694e8253137777f4a",
    "id": "tt0000002",
    "primaryImage": null,
    "titleType": {
      "text": "Short",
      "id": "short",
      "__typename": "TitleType"
    },
    "isSeries": false,
    "isEpisode": false,
    "titleText": {
      "text": "Le clown et ses chiens",
      "__typename": "TitleText"
    },
    "originalTitleText": {
      "text": "Le clown et ses chiens",
      "__typename": "TitleText"
    },
    "releaseYear": {
      "year": 1892,
      "endYear": null,
      "__typename": "YearRange"
    },
    "releaseDate": {
      "day": 28,
      "month": 10,
      "year": 1892,
      "__typename": "ReleaseDate"
    }
  }
}
```
---

## Authentication
```javascript
    Header
    ---
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
```
---
## Error Handling

All error responses include standard HTTP status codes and a structured JSON body.

### Common Status Codes
- **400 Bad Request**: Missing or invalid request parameters.
- **401 Unauthorized**
- **403 Forbidden**
- **404 Not Found**
- **429 Too Many Requests**
- **500 Internal Server Error**

### Error Response Example

```json
{
  "error": "NOT_FOUND",
  "message": "Title with ID 'tt9999999' not found."
}

---

## Usage Limits and Best Practices

###  Rate Limiting & Throttling

- **Define clear limits**: Even if not enforced currently, it’s wise to set client-side caps (e.g., 100 requests/minute). Document any known or expected limits, including per endpoint, user tier, or general usage policy.  
  :contentReference[oaicite:0]{index=0}
- **Throttling strategies**: Use algorithms like **token bucket** or **sliding windows** to allow bursts while maintaining steady limits.  
  :contentReference[oaicite:1]{index=1}
- **Graceful throttling**: Upon hitting a limit, you can either return a **429 Too Many Requests** response or implement request delays instead of outright rejection.  
  :contentReference[oaicite:2]{index=2}

###  Communicating Limits

- Include standard headers (when supported), such as:
  - `X-RateLimit-Limit`
  - `X-RateLimit-Remaining`
  - `X-RateLimit-Reset`
  
  This helps clients understand their remaining quota and reset window.  
  :contentReference[oaicite:3]{index=3}
- On exceeding limits, the API may respond with **429** and a `Retry-After` header to guide when requests can resume.  
  :contentReference[oaicite:4]{index=4}

###  Caching & Batching

- **Reduce unnecessary calls** with aggressive caching strategies (response or partial data), which can lower API load by up to 80%.  
  :contentReference[oaicite:5]{index=5}
- **Batch requests** when feasible and supported, helping consolidate multiple calls into one and optimize network usage.  
  :contentReference[oaicite:6]{index=6}
- **Leverage webhooks**, where supported, instead of frequent polling. This lowers traffic and improves timeliness.  
  :contentReference[oaicite:7]{index=7}

###  Retries & Failover

- Use **exponential backoff with jitter** when encountering 429 or other temporary errors to avoid repeated collisions.  
  :contentReference[oaicite:8]{index=8}
- Consider a **circuit breaker pattern** to halt requests during sustained rate-limit errors, then reset once conditions improve.  
  :contentReference[oaicite:9]{index=9}
- For critical operations, implement **fallback logic**, such as switching between API keys or providers if one fails.  
  :contentReference[oaicite:10]{index=10}

###  Monitoring & Adaptation

- **Log and monitor**: Track request volume, error rates (especially 429s), and response times. Use this data to fine-tune limits and identify issues.  
  :contentReference[oaicite:11]{index=11}
- **Iterate on limits**: Be prepared to revise quota settings based on real usage patterns and bottlenecks.  
  :contentReference[oaicite:12]{index=12}

---

### Summary

| Strategy               | Description                                                         |
|------------------------|---------------------------------------------------------------------|
| Rate Limiting          | Prevent request surges using algorithms, quotas, and throttling     |
| Caching & Batching     | Minimize redundant calls and optimize request flow                  |
| Retry Logic            | Handle limit violations and network issues gracefully               |
| Monitoring & Alerts    | Stay informed with logs and metrics to adjust strategies dynamically |

This structure enables safer, more efficient API consumption while ensuring scalability and stability. Let me know if you'd like sample implementation snippets or customized rate-limit tiers!
::contentReference[oaicite:13]{index=13}