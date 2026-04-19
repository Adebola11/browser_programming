import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Lecture – REST API Fetch (Java version)
 * Fetches users from JSONPlaceholder and prints them.
 */
public class RestApiFetch {

    // API endpoint
    private static final String API_URL = "https://jsonplaceholder.typicode.com/users";

    public static void main(String[] args) {
        System.out.println("🚀 Java REST API Fetch");
        System.out.println("======================\n");

        try {
            // 1) Create modern HTTP client (Java 11+)
            HttpClient client = HttpClient.newHttpClient();

            // 2) Build GET request
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(API_URL))
                    .header("Accept", "application/json")
                    .GET()
                    .build();

            System.out.println("⏳ Fetching: " + API_URL);

            // 3) Send request and get response body as String
            HttpResponse<String> response = client.send(
                    request, 
                    HttpResponse.BodyHandlers.ofString()
            );

            // 4) Check status
            if (response.statusCode() != 200) {
                System.err.println("✗ HTTP Error: " + response.statusCode());
                return;
            }

            System.out.println("✓ Status: " + response.statusCode() + "\n");

            // 5) Parse and display (simple regex approach — no external JSON libs)
            String body = response.body();
            parseAndDisplayUsers(body);

        } catch (Exception e) {
            System.err.println("✗ Error: " + e.getMessage());
            e.printStackTrace();
        }
    }

    /**
     * Simple parser that extracts "name" and "email" fields using regex.
     * Good for demos without adding Maven/Gradle dependencies.
     */
    private static void parseAndDisplayUsers(String json) {
        // Pattern to match: "name": "Some Name"
        Pattern namePattern = Pattern.compile("\"name\"\\s*:\\s*\"([^\"]+)\"");
        Pattern emailPattern = Pattern.compile("\"email\"\\s*:\\s*\"([^\"]+)\"");

        Matcher nameMatcher = namePattern.matcher(json);
        Matcher emailMatcher = emailPattern.matcher(json);

        int count = 0;

        System.out.println("Users:");
        System.out.println("------");

        while (nameMatcher.find() && emailMatcher.find()) {
            count++;
            String name = nameMatcher.group(1);
            String email = emailMatcher.group(1);

            System.out.printf("%d. %-20s | %s%n", count, name, email);
        }

        System.out.println("\nTotal loaded: " + count);
    }
}
