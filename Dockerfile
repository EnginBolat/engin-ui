FROM node:23-bullseye

LABEL maintainer="engin@codes"

# Gerekli paketleri kur
RUN apt-get update && apt-get install -y \
  git \
  ruby \
  ruby-dev \
  openjdk-17-jdk \
  curl \
  wget \
  unzip \
  build-essential \
  && apt-get clean

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

# CocoaPods kur
RUN gem install cocoapods

# Uygulama dizini
WORKDIR /app

# Paket dosyalarını kopyala (önce cache layer için ayrı kopyalıyoruz)
COPY package.json yarn.lock ./

# Bağımlılıkları yükle
RUN yarn install

# Geri kalan tüm dosyaları kopyala
COPY . .

# Setup scriptini çalıştır
RUN chmod +x ./scripts/setup.sh && ./scripts/setup.sh

CMD ["yarn", "start"]
