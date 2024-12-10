export default async function handler(req, res) {
    const targetUrl = "http://lollollollol.falixsrv.me:45851"; // URL Dynmap
    try {
        const response = await fetch(targetUrl);
        const data = await response.text();

        // Прокидываем оригинальные заголовки
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Ошибка при подключении к Dynmap.");
    }
}
