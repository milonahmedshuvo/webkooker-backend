import fetch from "node-fetch";

const sensitivePaths = [
  "/admin/",
  "/login/",
  "/wp-login.php",
  "/phpmyadmin/",
  "/config.php",
  "/.env",
  "/.git/",
  "/server-status",
  "/debug/",
  "/setup.php",
  "/backup/",
  "/test/",
  "/private/",
];

const detectSensitiveRoutes = async (baseUrl: string) => {
  const results: {
    path: string;
    status: number | string;
    accessible: boolean;
  }[] = [];

  for (const path of sensitivePaths) {
    const url = new URL(path, baseUrl).toString();

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(url, {
        method: "GET",
        // redirect: "manual",
        redirect: "follow",
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const status = response.status;
      const accessible = [200, 301, 302, 403].includes(status);

      results.push({ path, status, accessible });
    } catch (error) {
      results.push({ path, status: "FAILED", accessible: false });
    } 
  }


  return results
};


export const sensitiveServices = {
    detectSensitiveRoutes
}