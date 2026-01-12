# Sailing Information Website

## Overview
A simple informational website about sailing that presents educational content in an engaging and accessible format.

## Features

### Content Display
- Static informational content about sailing fundamentals
- Explanation of what sailing is and how it works
- Description of why people are drawn to sailing
- Coverage of sailing's connection to adventure and nature
- New thematic section exploring a cohesive sailing-related concept (such as "The Art of Sailing" or "Life at Sea")
- Wing Foils section explaining what wing foiling is, its relationship to sailing, and its unique blend of wind, water, and innovation
- Feature cards within the Wing Foils section highlighting key aspects: "Speed and Agility," "Freedom Over Water," "Modern Wind Technology," and "Learning Curve"
- Hydrofoils section explaining what hydrofoils are, how they work under sailboats, and why they are an innovation in sailing
- Feature cards within the Hydrofoils section highlighting key aspects: "Lift and Efficiency," "Speed Advantages," "Technological Design," and "Environmental Benefits"
- Interactive sailing timeline spanning from approximately 6000 BC to 2026 AD
- Timeline contains a complete static mapping with one entry for every year in the range
- Timeline includes individual JSON or text files for the first 1100 years (6000 BC to 4901 BC) stored under `frontend/src/data/years/` directory
- Each year file is named by year (e.g., `6000BC.json`, `5999BC.json`, `5000BC.json`, `4999BC.json`) and contains the same 20-word descriptive placeholder string about sailing history
- Dynamic loading of year files on demand as users navigate through the timeline
- Loading and error states for missing or failed file loads
- Each timeline entry includes a 20-word descriptive placeholder string about sailing history
- Scrollable or draggable interface for navigating through the extensive timeline
- Clear, engaging writing style suitable for general audiences
- Consistent depth and tone across all sections

### User Interface
- Clean, readable text layout
- Simple navigation structure that accommodates all sections including Wing Foils, Hydrofoils, and Timeline
- Header navigation with jump links to all sections including Wing Foils, Hydrofoils, and Timeline
- Interactive timeline component with intuitive scrolling/dragging functionality
- Timeline spinner that renders individual year text strings from dynamically loaded files
- Loading indicators and error handling for timeline year data
- Responsive design for different screen sizes
- Professional typography for easy reading
- Consistent design and spacing across all sections including the Timeline content
- Feature card layout for both Wing Foils and Hydrofoils benefits and aspects

## Technical Requirements

### Frontend
- Static content presentation with Timeline section
- SailingTimeline component with scrollable/draggable timeline interface
- Timeline component dynamically imports year files from `frontend/src/data/years/` directory
- Individual JSON or text files for years 6000 BC to 4901 BC with 20-word placeholder strings
- Lazy-loading implementation for year files as users scroll or navigate through timeline
- Loading states and error handling for missing or failed file loads
- Timeline data for years after 4901 BC remains embedded in frontend code
- Timeline renders each year and its corresponding text properly in the UI with consistent behavior
- Timeline spinner displays individual year text strings with smooth loading transitions
- Feature card components for both Wing Foils and Hydrofoils sections
- Updated navigation to include Timeline section
- Seamless integration of timeline content into existing layout
- No user authentication required
- No data persistence needed
- Text-only content (no images required per user request)

### Backend
- No backend functionality required
- All content is static and embedded in the frontend or loaded from local files
