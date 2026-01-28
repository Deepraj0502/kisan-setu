CREATE TABLE IF NOT EXISTS equipment (
    id SERIAL PRIMARY KEY,
    owner_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price_per_hour DECIMAL(10, 2),
    location GEOGRAPHY(POINT, 4326), -- Longitude, Latitude
    phone_number VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example: Spatial index for high-speed nearby searches
CREATE INDEX idx_equipment_location ON equipment USING GIST (location);