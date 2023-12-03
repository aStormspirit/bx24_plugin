FROM base AS builder

# Install python3-certbot package
RUN apt-get update && apt-get install -y python3-certbot

# Copy and execute bash script
COPY script.sh /script.sh
RUN chmod +x /script.sh
RUN /script.sh


FROM nginx:latest AS base

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
