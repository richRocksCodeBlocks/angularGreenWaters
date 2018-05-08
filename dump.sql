--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: lease_listings; Type: TABLE; Schema: public; Owner: green_waters_user
--

CREATE TABLE public.lease_listings (
    lease_listing_id integer NOT NULL,
    property_id integer NOT NULL,
    property_type character varying(20) NOT NULL,
    space_number character varying(20) NOT NULL,
    space_available_sf integer NOT NULL,
    base_rent_sq_mo numeric(6,2) NOT NULL,
    space_description text NOT NULL,
    feature_1 character varying(255) NOT NULL,
    feature_2 character varying(255) NOT NULL,
    feature_3 character varying(255) NOT NULL,
    is_active boolean NOT NULL
);


ALTER TABLE public.lease_listings OWNER TO green_waters_user;

--
-- Name: lease_listings_lease_listing_id_seq; Type: SEQUENCE; Schema: public; Owner: green_waters_user
--

CREATE SEQUENCE public.lease_listings_lease_listing_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lease_listings_lease_listing_id_seq OWNER TO green_waters_user;

--
-- Name: lease_listings_lease_listing_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: green_waters_user
--

ALTER SEQUENCE public.lease_listings_lease_listing_id_seq OWNED BY public.lease_listings.lease_listing_id;


--
-- Name: properties; Type: TABLE; Schema: public; Owner: green_waters_user
--

CREATE TABLE public.properties (
    property_id integer NOT NULL,
    building_name character varying(100) NOT NULL,
    street_address character varying(100) NOT NULL,
    city character varying(100) NOT NULL,
    state character varying(2) NOT NULL,
    zip integer NOT NULL,
    latitude character varying(20) NOT NULL,
    longitude character varying(20) NOT NULL,
    g_street_number character varying(100) NOT NULL,
    g_street_name character varying(100) NOT NULL,
    g_neighborhood character varying(100) NOT NULL,
    g_county character varying(100) NOT NULL,
    g_city character varying(100) NOT NULL,
    g_state character varying(100) NOT NULL,
    g_placeid character varying(255) NOT NULL
);


ALTER TABLE public.properties OWNER TO green_waters_user;

--
-- Name: properties_property_id_seq; Type: SEQUENCE; Schema: public; Owner: green_waters_user
--

CREATE SEQUENCE public.properties_property_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.properties_property_id_seq OWNER TO green_waters_user;

--
-- Name: properties_property_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: green_waters_user
--

ALTER SEQUENCE public.properties_property_id_seq OWNED BY public.properties.property_id;


--
-- Name: lease_listings lease_listing_id; Type: DEFAULT; Schema: public; Owner: green_waters_user
--

ALTER TABLE ONLY public.lease_listings ALTER COLUMN lease_listing_id SET DEFAULT nextval('public.lease_listings_lease_listing_id_seq'::regclass);


--
-- Name: properties property_id; Type: DEFAULT; Schema: public; Owner: green_waters_user
--

ALTER TABLE ONLY public.properties ALTER COLUMN property_id SET DEFAULT nextval('public.properties_property_id_seq'::regclass);


--
-- Data for Name: lease_listings; Type: TABLE DATA; Schema: public; Owner: green_waters_user
--

COPY public.lease_listings (lease_listing_id, property_id, property_type, space_number, space_available_sf, base_rent_sq_mo, space_description, feature_1, feature_2, feature_3, is_active) FROM stdin;
\.


--
-- Data for Name: properties; Type: TABLE DATA; Schema: public; Owner: green_waters_user
--

COPY public.properties (property_id, building_name, street_address, city, state, zip, latitude, longitude, g_street_number, g_street_name, g_neighborhood, g_county, g_city, g_state, g_placeid) FROM stdin;
1	Pacific Guardian Tower	1440 Kapiolani Blvd	Honolulu	HI	96814	21.29365	-157.84270379999998	1440	Kapiolani Blvd	Ala Moana	Honolulu County	Honolulu	HI	ChIJU5_w0O9tAHwRg9xmhrRwRtM
2	Waikiki Shopping Plaza	2250 Kalakaua Ave	Honolulu	HI	96815	21.2792738	-157.82853490000002	2250	Kalakaua Ave	Waikīkī	Honolulu County	Honolulu	HI	ChIJma6583VyAHwRULeOYT_pUV0
3	Starts Plaza	1953 S Beretania St	Honolulu	HI	96826	21.296473	-157.8301058	1953	S Beretania St	McCully - Moiliili	Honolulu County	Honolulu	HI	ChIJ37WMgpNtAHwR74HbS650CG4
4	1914 S King St	1914 S King St	Honolulu	HI	96826	21.2956584	-157.83138659999997	1914	S King St	McCully - Moiliili	Honolulu County	Honolulu	HI	ChIJBepYFJNtAHwRyGxJVRxrDig
5	Hawaiian Monarch	444 Niu St	Honolulu	HI	96815	21.2869649	-157.8327139	444	Niu St	Honolulu	HI	Honolulu County	US	ChIJPQm8sYxtAHwRwkH9zx3KA9w
6	Precision Radio Building	1160 S King St	Honolulu	HI	96814	21.3002634	-157.8446599	1160	S King St	Makiki - Lower Punchbowl - Tantalus	Honolulu County	Honolulu	HI	ChIJE40houhtAHwRIL-cx_33-t8
\.


--
-- Name: lease_listings_lease_listing_id_seq; Type: SEQUENCE SET; Schema: public; Owner: green_waters_user
--

SELECT pg_catalog.setval('public.lease_listings_lease_listing_id_seq', 1, false);


--
-- Name: properties_property_id_seq; Type: SEQUENCE SET; Schema: public; Owner: green_waters_user
--

SELECT pg_catalog.setval('public.properties_property_id_seq', 1, false);


--
-- Name: lease_listings lease_listings_pkey; Type: CONSTRAINT; Schema: public; Owner: green_waters_user
--

ALTER TABLE ONLY public.lease_listings
    ADD CONSTRAINT lease_listings_pkey PRIMARY KEY (lease_listing_id);


--
-- Name: properties properties_pkey; Type: CONSTRAINT; Schema: public; Owner: green_waters_user
--

ALTER TABLE ONLY public.properties
    ADD CONSTRAINT properties_pkey PRIMARY KEY (property_id);


--
-- Name: lease_listings lease_listings_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: green_waters_user
--

ALTER TABLE ONLY public.lease_listings
    ADD CONSTRAINT lease_listings_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.properties(property_id);


--
-- PostgreSQL database dump complete
--

