import axios from "axios";
import config from "../../config";

interface Keyword {
  traffic?: number;
}

export const fetchOrganicTraffic = async (
  domain: string
): Promise<number | undefined> => {
  
  
  try {
    const response = await axios.get("https://apiv3.ahrefs.com", {
      params: {
        token: config.ahrefs_api_token,
        from: "domain_organic_keywords",
        target: domain.replace(/^www\./, ""),
        mode: "domain",
        output: "json",
        limit: 1000,
        country: "us",
      },
    });


    console.log({response})

    const keywords = response.data?.keywords || [];
    const traffic = keywords.reduce((sum: number, item: any) => sum + (item.traffic || 0), 0);
    console.log({traffic})
    return traffic
  } catch (error: any) {
    console.error("Error fetching organic traffic:", error?.message);
    
  }
};




export const ahrefsServices = {
  fetchOrganicTraffic,
};
