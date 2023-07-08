import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// Route 1: Fetch userid by username
app.get("/userid/:username", async (req, res) => {
  const { username } = req.params;

  try {
    const requestOptions = {
      method: "POST",
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
        "sec-fetch-site": "same-origin",
        "x-fb-lsd": "4GaYIJW6lxs-XRVfHawU8K",
      },
      body: new URLSearchParams({
        "route_urls[0]": "/@" + username,
        __user: "0",
        __a: "1",
        __comet_req: "29",
        lsd: "4GaYIJW6lxs-XRVfHawU8K",
      }),
      redirect: "follow",
    };

    const response = await fetch(
      "https://www.threads.net/ajax/bulk-route-definitions/",
      requestOptions
    );
    let result = await response.text();
    result = result.replace("for (;;);", "");
    result = JSON.parse(result);
    const userid =
      result.payload.payloads["/@" + username].result.exports.rootView.props
        .user_id;

    res.json({ userid });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route 2: Fetch user profile by userid
app.get("/userprofile/:userid", async (req, res) => {
  const { userid } = req.params;

  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "x-fb-lsd": "BMckKFfB3JDIA2XkhD8-ez",
        "x-ig-app-id": "238260118697367",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        lsd: "BMckKFfB3JDIA2XkhD8-ez",
        variables: JSON.stringify({ userID: userid }),
        doc_id: "23996318473300828",
      }),
      redirect: "follow",
    };

    const response = await fetch(
      "https://www.threads.net/api/graphql",
      requestOptions
    );
    const result = await response.json();

    res.json(result);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route 3: Fetch threads or posts of userid
app.get("/threads/:userid", async (req, res) => {
  const { userid } = req.params;

  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "x-fb-lsd": "A2LiqVjcY0jBE_DEsTaKNI",
        "x-ig-app-id": "238260118697367",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        dpr: "1",
        lsd: "A2LiqVjcY0jBE_DEsTaKNI",
        variables: JSON.stringify({ userID: userid }),
        doc_id: "6451898791498605",
      }),
      redirect: "follow",
    };

    const response = await fetch(
      "https://www.threads.net/api/graphql",
      requestOptions
    );
    const result = await response.json();

    res.json(result);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
