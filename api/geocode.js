export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'query required' });
  const response = await fetch(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(query)}`,
    { headers: { Authorization: `KakaoAK d3eab2d255aa361b911661c86154dc56` } }
  );
  const data = await response.json();
  res.status(200).json(data);
}
