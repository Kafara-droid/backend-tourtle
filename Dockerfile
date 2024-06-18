# Menggunakan image Node.js yang resmi sebagai basis
FROM node:18

# Membuat direktori kerja di dalam kontainer
WORKDIR /usr/src/app

# Menyalin file package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Menginstall dependensi aplikasi
RUN npm install

# Menyalin seluruh kode aplikasi ke direktori kerja
COPY . .

# Mengekspos port yang akan digunakan oleh aplikasi
EXPOSE 8080

# Menentukan perintah untuk menjalankan aplikasi
CMD [ "npm", "start" ]
