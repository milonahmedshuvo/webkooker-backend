import axios from "axios";
import config from "../../config";

interface Keyword {
  traffic?: number;
}

export const fetchOrganicTraffic = async (
  domain: string
): Promise<number | undefined> => {
  const params = {
    token: config.ahrefs_api_token,
    from: "domain_organic_keywords",
    target: domain,
    mode: "domain",
    output: "json",
    limit: 1000,
    country: "us",
  };

  try {
    const response = await axios.get("https://apiv3.ahrefs.com", { params });

    const keywords: Keyword[] = response.data?.keywords || [];
    const traffic = keywords.reduce(
      (sum, item) => sum + (item.traffic || 0),
      0
    );

    return traffic;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const ahrefsServices = {
  fetchOrganicTraffic,
};
