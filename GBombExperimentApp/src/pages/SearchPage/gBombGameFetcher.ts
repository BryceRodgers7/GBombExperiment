import fetchJsonp from "fetch-jsonp";

export interface GBombGame {
  readonly guid: string;
  readonly id: number;
  readonly name: string;
}

export namespace GBombGameFetcher {
  const baseURL = "https://www.giantbomb.com/api/search/";
  const apiKey = "bd3a93df31268b512e94aba52277101734c61bf9";

  export async function fetchAllGames(
    searchQuery: string
  ): Promise<GBombGame[]> {
    const allGames: GBombGame[] = [];
    let pageNumber = 1;

    try {
      let page = await fetchGames(pageNumber, searchQuery);
      allGames.push(...page);

      while (page.length === 10) {
        page = await fetchGames(++pageNumber, searchQuery);
        allGames.push(...page);
      }

      return allGames;
    } catch (error: unknown) {
      console.log("Failed to fetch all games", error);
    }

    return [];
  }

  async function fetchGames(
    pageNumber: number,
    searchQuery: string
  ): Promise<GBombGame[]> {
    try {
      const encodedQuery = encodeURI(searchQuery);
      const url =
        `${baseURL}?api_key=${apiKey}` +
        `&format=jsonp` +
        `&resources=game` +
        `&query=${encodedQuery}` +
        `&page=${pageNumber}`;

      console.log(`the query is ${url}`);

      const response = await fetchJsonp(url, {
        jsonpCallback: "json_callback",
      });

      // Unsafe casting for brevity
      const json = (await response.json()) as GBombAPIResponse;

      return json.results ?? [];
    } catch (error: unknown) {
      console.log(`Failed to fetch game for page ${pageNumber}`, error);
    }

    return [];
  }
}

interface GBombAPIResponse {
  readonly error: string;
  readonly limit: number;
  readonly offset: number;
  readonly number_of_page_results: number;
  readonly number_of_total_results: number;
  readonly status_code: number;
  readonly results: GBombGame[];
  readonly version: string;
}
