# Use a lightweight Nginx image as the base
FROM nginx:alpine

# Copy the frontend's static files to the Nginx public directory
COPY . /usr/share/nginx/html

# Expose the port that Nginx will listen on (adjust if needed)
EXPOSE 80

# Nginx starts automatically, no need to set CMD

sdf