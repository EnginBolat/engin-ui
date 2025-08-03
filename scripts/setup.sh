#!/bin/bash

echo "🧹 Temizlik başlıyor..."
rm -rf node_modules yarn.lock package-lock.json ios/Pods ios/Podfile.lock android/.gradle android/build android/app/build

echo "📦 Bağımlılıklar tekrar yükleniyor..."
yarn install

echo "🔧 Pod install..."
cd ios && pod install --repo-update && cd ..

echo "🧼 Gradle temizliği..."
cd android && chmod +x ./gradlew && ./gradlew clean && cd ..

echo "✅ Setup tamamlandı."