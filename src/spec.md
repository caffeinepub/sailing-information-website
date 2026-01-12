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
- Interactive sailing timeline spanning from approximately 6000 BC to present day
- Timeline displays chronological progression of sailing history with static placeholder entries for each year
- Static lookup table mapping each year (6000 BC–2026 AD) to fixed placeholder strings of approximately 20 words
- Scrollable or draggable interface for navigating through the extensive timeline
- Clear, engaging writing style suitable for general audiences
- Consistent depth and tone across all sections

### User Interface
- Clean, readable text layout
- Simple navigation structure that accommodates all sections including Wing Foils, Hydrofoils, and Timeline
- Header navigation with jump links to all sections including Wing Foils, Hydrofoils, and Timeline
- Interactive timeline component with intuitive scrolling/dragging functionality
- Responsive design for different screen sizes
- Professional typography for easy reading
- Consistent design and spacing across all sections including the Timeline content
- Feature card layout for both Wing Foils and Hydrofoils benefits and aspects

## Technical Requirements

### Frontend
- Static content presentation with additional Timeline section
- SailingTimeline component with scrollable/draggable timeline interface
- Timeline component uses static lookup table for year-to-text mapping instead of dynamic generation
- Static mapping table contains fixed placeholder strings for each year from 6000 BC to 2026 AD
- Each placeholder string is approximately 20 words in length
- Feature card components for both Wing Foils and Hydrofoils sections
- Updated navigation to include Timeline section
- Seamless integration of timeline content into existing layout
- No user authentication required
- No data persistence needed
- Text-only content (no images required per user request)

### Backend
- No backend functionality required
- All content is static and embedded in the frontend
