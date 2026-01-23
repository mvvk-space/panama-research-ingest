
export const researchData = [
    {
        id: 1,
        title: "Canopy Structure & Microclimate Regulation",
        authors: ["Dr. Aurelia Green", "Prof. Thomas W."],
        date: "2023-11-12",
        abstract: "Investigating how upper canopy density influences temperature regulation in the understory of the Panamanian wet tropics. Results suggest a strong correlation between leaf area index and humidity retention.",
        citations: 124,
        tags: ["Microclimate", "Canopy", "Thermoregulation"],
        type: "Journal Article"
    },
    {
        id: 2,
        title: "Migration Pathways of the Blue Morpho",
        authors: ["Sofia R. Velasquez"],
        date: "2024-01-20",
        abstract: "Tracking the seasonal movements of Morpho peleides across the isthmus. This longitudinal study utilized radio telemetry to map breeding grounds versus feeding territories.",
        citations: 89,
        tags: ["Entomology", "Migration", "Lepidoptera"],
        type: "Field Report"
    },
    {
        id: 3,
        title: "Soil Composition Analysis: Volcanic Legacy",
        authors: ["Dr. Marcus Chen", "Elena Dobrev"],
        date: "2022-08-05",
        abstract: "A detailed chemical analysis of soil samples from the Valle de Antón crater. Highlights the persistence of mineral richness aiding specific fern species propagation.",
        citations: 210,
        tags: ["Geology", "Soil Science", "Botany"],
        type: "Research Paper"
    },
    {
        id: 4,
        title: "Acoustic Signatures of Neotropical Bats",
        authors: ["J.P. Harrington", "L. Weiss"],
        date: "2023-05-30",
        abstract: "Cataloging the echolocation frequencies of 12 native bat species. This data provides a baseline for automated acoustic monitoring systems in the reserve.",
        citations: 56,
        tags: ["Zoology", "Acoustics", "Mammalogy"],
        type: "Data Set"
    },
    {
        id: 5,
        title: "Ethnobotany of the Emberá People",
        authors: ["Rosa Martínez", "Dr. Aurelia Green"],
        date: "2023-09-14",
        abstract: "Documenting traditional medicinal uses of 50 local plant species. Collaborative research aimed at preserving indigenous knowledge and sustainable harvesting practices.",
        citations: 340,
        tags: ["Ethnobotany", "Cultural Heritage", "Medicine"],
        type: "Ethnography"
    },
    {
        id: 6,
        title: "Hydrological Impact of Seasonal Rainfall",
        authors: ["Team Hydro Panama"],
        date: "2024-02-01",
        abstract: "Analyzing water flow changes in the Chagres River basin during El Niño events. Implications for the canal water levels and surrounding ecosystems.",
        citations: 18,
        tags: ["Hydrology", "Climate Change", "Water Resources"],
        type: "Technical Report"
    }
];

export const authors = [
    {
        id: "a1",
        name: "Dr. Aurelia Green",
        role: "Senior Ecologist",
        institution: "Smithsonian Tropical Research Institute",
        interests: ["Canopy Ecology", "Conservation Biology", "Microclimates"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: "a2",
        name: "Sofia R. Velasquez",
        role: "Entomologist",
        institution: "Panama City University",
        interests: ["Insect Migration", "Biodiversity", "Lepidoptera"],
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: "a3",
        name: "Dr. Marcus Chen",
        role: "Geologist",
        institution: "University of Panama",
        interests: ["Volcanology", "Soil Chemistry", "Mineralogy"],
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: "a4",
        name: "Elena Dobrev",
        role: "Botanist",
        institution: "Smithsonian Tropical Research Institute",
        interests: ["Fern Propagation", "Plant Taxonomy", "Forest Regeneration"],
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: "a5",
        name: "J.P. Harrington",
        role: "Zoologist",
        institution: "Wildlife Conservation Society",
        interests: ["Chiroptera", "Bioacoustics", "Nocturnal Wildlife"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: "a6",
        name: "Rosa Martínez",
        role: "Ethnobotanist",
        institution: "Independent Researcher",
        interests: ["Indigenous Knowledge", "Medicinal Plants", "Cultural Heritage"],
        image: "https://images.unsplash.com/photo-1554721205-f85af391d5l9?auto=format&fit=crop&q=80&w=200&h=200"
    }
];

export const collections = [
    {
        id: "c1",
        title: "The Butterfly Census",
        description: "A comprehensive decade-long tracking project of Lepidoptera populations across the Isthmus of Panama. Includes migration maps, specimen photos, and genetic analysis results.",
        itemCount: 45,
        lastUpdated: "2024-02-10",
        coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600&h=400",
        curator: "Sofia R. Velasquez"
    },
    {
        id: "c2",
        title: "Barro Colorado Island Flora",
        description: "Digital herbarium specimens from the world's most intensively studied tropical forest. Features high-resolution scans of rare ferns and flowering epigenes found only on the island.",
        itemCount: 128,
        lastUpdated: "2023-11-28",
        coverImage: "https://images.unsplash.com/photo-1448375240586-dfd8d3f5d8aa?auto=format&fit=crop&q=80&w=600&h=400",
        curator: "Elena Dobrev"
    },
    {
        id: "c3",
        title: "Chagres River Hydro-Data",
        description: "Raw sensor data from 50 autonomous hydrological monitoring stations. Critical for understanding the water security of the Panama Canal watershed.",
        itemCount: 1530,
        lastUpdated: "2024-03-01",
        coverImage: "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?auto=format&fit=crop&q=80&w=600&h=400",
        curator: "Team Hydro"
    },
    {
        id: "c4",
        title: "Camera Trap Highlights 2023",
        description: "Candid captures of elusive nocturnal mammals including jaguars, ocelots, and tapirs. Filtered for best visibility and behavioral relevance.",
        itemCount: 312,
        lastUpdated: "2024-01-15",
        coverImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&q=80&w=600&h=400",
        curator: "J.P. Harrington"
    }
];
