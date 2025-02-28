# MapWidget Features:

## Dynamically Respond to changes in ViewMode


## Dynamically querying stops depending on map placement
- LVB API requires a 'boundingBox' to declare the stations that must be loaded.
- To ensure worldwide support without loading all the stops on the client outright, a mechanism that looks at the area already loaded and the current map placement was created.
- Pros:
    - Improves client performance.
    - Less cache space required from client to use webapp.
    - Support for LVB's platform expanding outside of Leipzig.
- Cons:
    - More queries to LVB's API.
        - Possible spam can be solved by implementing a 'new map placement' cooldown of x seconds.

