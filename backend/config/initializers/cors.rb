# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

allowed_origins = [
  "http://localhost:5173",
  "http://192.168.47.162:5173"
]

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allowed_origins.each do |origin|
    allow do
      origins origin

      resource "*",
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: true
    end
  end
end
