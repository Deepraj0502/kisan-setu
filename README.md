# 🌾 Kisan-Setu (किसान-सेतु)

### *Empowering Farmers through Decentralized Resource Sharing*

**Kisan-Setu** is a peer-to-peer (P2P) platform designed to bridge the resource and knowledge gap in Indian agriculture. By leveraging geo-spatial technology, it allows marginal farmers to rent high-end machinery, consult with experts, and secure their harvest through a direct-to-consumer pledge system.

---

## 🚀 Key Features

* **🚜 The Tool Pool:** A location-based marketplace for renting tractors, harvesters, and drones.
* **🩺 Crop Doctor:** AI-integrated community forum for pest detection and crop health advice.
* **🤝 Pledge Market:** Direct-to-consumer pre-ordering system to ensure fair price discovery for farmers.
* **🌍 Multi-lingual Support:** Full localized support for **Marathi**, **Hindi**, and **English**.
* **📍 Geo-Fencing:** Precision search using **PostGIS** to find resources within a 5km–25km radius.

---

## 🏗️ System Architecture

The project follows a **Monorepo** structure for ease of development and deployment:

```text
kisan-setu/
├── frontend/             # Next.js 14 (App Router)
├── backend/              # Spring Boot (Java 17+)
└── db/                   # PostgreSQL + PostGIS SQL Scripts

```

---

## 🛠️ Tech Stack

### **Frontend**

* **Framework:** Next.js 14 (React)
* **Styling:** Tailwind CSS + Shadcn/UI
* **State Management:** React Query (TanStack Query)
* **Maps:** Mapbox GL JS / OpenStreetMap

### **Backend**

* **Framework:** Spring Boot 3.x
* **Database:** PostgreSQL with **PostGIS** extension
* **ORM:** Hibernate Spatial (for handling geometry data)
* **Security:** JWT-based Authentication
* **AI Integration:** Google Gemini API (for Crop Doctor vision)

---

## 🚦 Getting Started

### **Prerequisites**

* Node.js (v18+)
* Java JDK 17+
* PostgreSQL with PostGIS installed

### **1. Database Setup**

```sql
CREATE DATABASE kisan_setu;
\c kisan_setu;
CREATE EXTENSION postgis;

```

### **2. Backend Setup**

```bash
cd backend
# Configure your application.properties with DB credentials
./mvnw spring-boot:run

```

### **3. Frontend Setup**

```bash
cd frontend
npm install
npm run dev

```

---

## 📊 Database Schema (Core)

| Table | Key Fields | Purpose |
| --- | --- | --- |
| `users` | `id`, `name`, `role`, `location (point)` | User identity and GPS base. |
| `equipment` | `id`, `owner_id`, `category`, `rate`, `location (point)` | Listed machinery for rent. |
| `bookings` | `id`, `equip_id`, `renter_id`, `status` | Rental transaction tracking. |
| `posts` | `id`, `farmer_id`, `image_url`, `ai_diagnosis` | Crop Doctor community data. |

---

## 🗺️ Roadmap

* [ ] **Phase 1:** MVP launch with Machinery Rental (Tool Pool) in one district.
* [ ] **Phase 2:** AI-powered "Crop Doctor" integration for automated pest detection.
* [ ] **Phase 3:** Integration of a "Village Ambassador" program for digitally illiterate farmers.
* [ ] **Phase 4:** Expanding the "Pledge Market" to include urban housing societies.

---

## ✉️ Contact

**Deepraj Pagare** *Full Stack Developer | Systems Engineer* [Email](mailto:pagaredeepraj05@gmail.com)
**Siddhi Chakave** *Frontend Developer | Data Analysis* [Email](mailto:chakavesiddhi3@gmail.com)
