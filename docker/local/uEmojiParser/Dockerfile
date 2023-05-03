FROM node:18.16.0-buster-slim
LABEL maintainer="developers@dailybot.com"

RUN apt-get update -y && \
    apt-get install less git -y && \
    # --- Clean ---
    apt-get clean -y && \
    rm -rf /var/cache/apk/* && \
    rm -rf /var/lib/apt/lists/*

# Add custom commands for container
RUN echo 'source /app/docker/custom_commands.sh' >> /root/.bashrc
