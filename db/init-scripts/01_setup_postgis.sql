-- Enable PostGIS extension
CREATE EXTENSION IF NOT EXISTS postgis;
-- Verify installation
SELECT postgis_full_version();